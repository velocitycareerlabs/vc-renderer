import React, { useCallback, useEffect, useState } from 'react';

export const useTrackScrollToChangeBottomGradientVisibility = (
  isContentLoaded: boolean,
  scrollableCredentialContainerRef: React.RefObject<HTMLDivElement>,
) => {
  const [isScrollReachedTheEnd, setScrollReachedTheEnd] = useState(false);

  const checkIfScrollReachedTheEnd = useCallback(() => {
    if (!scrollableCredentialContainerRef.current || !isContentLoaded) {
      return;
    }

    if (
      scrollableCredentialContainerRef.current.scrollHeight <=
      Math.ceil(
        scrollableCredentialContainerRef.current.offsetHeight +
          scrollableCredentialContainerRef.current.scrollTop,
      ) +
        1
    ) {
      setScrollReachedTheEnd(true);
    } else {
      setScrollReachedTheEnd(false);
    }
  }, [isContentLoaded, scrollableCredentialContainerRef]);

  useEffect(() => {
    if (!isContentLoaded) {
      return;
    }

    Promise.resolve().then(checkIfScrollReachedTheEnd);
  }, [checkIfScrollReachedTheEnd, isContentLoaded]);

  return {
    checkIfScrollReachedTheEnd,
    isScrollReachedTheEnd,
  };
};
