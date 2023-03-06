import React from 'react';
import { LeapFrog } from '@uiball/loaders';

export const Loader = () => {
  return (
    <div className="container-loader">
      <LeapFrog 
        size={80}
        speed={2.5} 
        color="#006d77" 
      />
    </div>
  )
};

