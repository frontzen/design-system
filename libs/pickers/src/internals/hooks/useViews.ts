import { unstable_useControlled as useControlled } from '@mui/utils';
import * as React from 'react';
import { DateOrTimeView } from '../models';

interface UseViewsOptions<View extends DateOrTimeView> {
  onViewChange?: (newView: View) => void;
  openTo?: View;
  view: View | undefined;
  views: readonly View[];
}

interface UseViewsResult<View> {
  nextView: View | null;
  previousView: View | null;
  openNext: VoidFunction;
  openView: View;
  setOpenView: (newView: View) => void;
}

export function useViews<View extends DateOrTimeView>({
  onViewChange,
  openTo,
  view,
  views,
}: UseViewsOptions<View>): UseViewsResult<View> {
  const [openView, setOpenView] = useControlled({
    name: 'Picker',
    state: 'view',
    controlled: view,
    default: openTo && views.includes(openTo) ? openTo : views[0],
  });

  const openViewIndex = views.indexOf(openView);
  const previousView: View | null = views[openViewIndex - 1] ?? null;
  const nextView: View | null = views[openViewIndex + 1] ?? null;

  const changeView = React.useCallback(
    (newView: View) => {
      setOpenView(newView);

      if (onViewChange) {
        onViewChange(newView);
      }
    },
    [setOpenView, onViewChange],
  );

  const openNext = React.useCallback(() => {
    if (nextView) {
      changeView(nextView);
    }
  }, [nextView, changeView]);

  return {
    nextView,
    previousView,
    openNext,
    openView,
    setOpenView: changeView,
  };
}
