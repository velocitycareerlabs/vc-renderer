import React from 'react';
import FallbackImage from '../assets/png/fallback.png';

export const setFallbackImage = (e: React.SyntheticEvent<HTMLImageElement>) => {
  // eslint-disable-next-line better-mutation/no-mutation
  e.currentTarget.onerror = null;
  // eslint-disable-next-line better-mutation/no-mutation
  e.currentTarget.src = FallbackImage;
};
