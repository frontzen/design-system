import * as React from 'react';

export interface OpenStateProps {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export const useOpenState = ({ open, onOpen, onClose }: OpenStateProps) => {
  const isControllingOpenProp = React.useRef(typeof open === 'boolean').current;
  const [openState, setIsOpenState] = React.useState(false);

  // Sync inner state with outer `open` state on controlled mode
  React.useEffect(() => {
    if (isControllingOpenProp) {
      if (typeof open !== 'boolean') {
        throw new Error('You must not mix controlling and uncontrolled mode for `open` prop');
      }

      setIsOpenState(open);
    }
  }, [isControllingOpenProp, open]);

  const setIsOpen = React.useCallback(
    (newIsOpen: boolean) => {
      if (!isControllingOpenProp) {
        setIsOpenState(newIsOpen);
      }

      if (newIsOpen && onOpen) {
        onOpen();
      }

      if (!newIsOpen && onClose) {
        onClose();
      }
    },
    [isControllingOpenProp, onOpen, onClose],
  );

  return { isOpen: openState, setIsOpen };
};
