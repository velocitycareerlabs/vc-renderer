import React, { useCallback } from 'react';

export const useHasScrollBar = (
  isContentLoaded: boolean,
  scrollableCredentialContainerRef: React.RefObject<HTMLDivElement>,
) => {
  const [hasScrollBar, setHasScrollBar] = React.useState(false);

  const checkIfHasScrollBar = useCallback(() => {
    if (!scrollableCredentialContainerRef.current || !isContentLoaded) {
      return;
    }

    if (
      scrollableCredentialContainerRef.current.offsetWidth >
      scrollableCredentialContainerRef.current.clientWidth
    ) {
      setHasScrollBar(true);
    } else {
      setHasScrollBar(false);
    }
  }, [isContentLoaded, scrollableCredentialContainerRef]);

  React.useEffect(() => {
    Promise.resolve().then(checkIfHasScrollBar);
  }, [checkIfHasScrollBar]);

  return hasScrollBar;
};
