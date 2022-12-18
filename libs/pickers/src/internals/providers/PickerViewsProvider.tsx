import * as React from 'react';
import { DateOrTimeView } from '../models';

interface PickerViewsProps<TView extends DateOrTimeView> {
  children?: React.ReactNode;
  views: readonly TView[];
  openTo?: TView;
  /**
   * Callback fired when view is changed
   * @template View
   * @param {View} newView The new view
   */
  onViewChange?: (newView: TView) => void;
}

interface PickerViewsContextType<TView extends DateOrTimeView> {
  openView: TView;
  nextView: TView | null;
  previousView: TView | null;
  openNext: VoidFunction;
  setOpenView: (newView: TView) => void;
}

const PickerViewsContext = React.createContext<PickerViewsContextType<any> | null>(null);

export function PickerViewsProvider<TView extends DateOrTimeView>(props: PickerViewsProps<TView>) {
  const { children, views, openTo, onViewChange } = props;

  const [openView, setOpenView] = React.useState(openTo && views.includes(openTo) ? openTo : views[0]);

  const openViewIndex = views.indexOf(openView);
  const previousView: TView | null = views[openViewIndex - 1] ?? null;
  const nextView: TView | null = views[openViewIndex + 1] ?? null;

  const changeView = React.useCallback(
    (newView: TView) => {
      setOpenView(newView);
      onViewChange?.(newView);
    },
    [setOpenView, onViewChange],
  );

  const openNext = React.useCallback(() => {
    nextView && changeView(nextView);
  }, [nextView, changeView]);

  return (
    <PickerViewsContext.Provider value={{ nextView, previousView, openNext, openView, setOpenView: changeView }}>
      {children}
    </PickerViewsContext.Provider>
  );
}

export function useViews<TView extends DateOrTimeView>(): PickerViewsContextType<TView> {
  return React.useContext(PickerViewsContext)!;
}
