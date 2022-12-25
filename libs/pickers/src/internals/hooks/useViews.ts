import * as React from 'react';
import { DateOrTimeView } from '../models';

export interface UseViewsProps<TView extends DateOrTimeView> {
  views: readonly TView[];
  openTo?: TView;
  /**
   * Callback fired when view is changed
   * @template View
   * @param {View} newView The new view
   */
  onViewChange?: (newView: TView) => void;
}

export interface UseViewsResult<TView> {
  nextView: TView | null;
  previousView: TView | null;
  openNextView: VoidFunction;
  openView: TView;
  setOpenView: (newView: TView) => void;
}

export const useViews = <TView extends DateOrTimeView>(props: UseViewsProps<TView>): UseViewsResult<TView> => {
  const { views, openTo, onViewChange } = props;

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

  const openNextView = React.useCallback(() => {
    nextView && changeView(nextView);
  }, [nextView, changeView]);

  return {
    nextView,
    previousView,
    openNextView,
    openView,
    setOpenView: changeView,
  };
};
