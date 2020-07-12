import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <div class="text-center">
      <img
        src={spinner}
        style={{ width: '100px', margin: 'auto',marginTop:250, display: 'block' }}
        alt="Loading..."
      />
      <p className="text-white mt-3">Loading...</p>
    </div>
  );
};
