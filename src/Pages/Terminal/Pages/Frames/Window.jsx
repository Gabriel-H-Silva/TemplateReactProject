import React from 'react';
import Draggable from 'react-draggable';

function Window({ children, pLargura, pAltura }) {
  return (
    <Draggable handle=".frameTop">
      <div style={{ width: pLargura, height: pAltura, padding: '10px' }}>
        <div className='frameTop'>
          
        </div>
        <div className='frame'>
          {children}
        </div>
      </div>
    </Draggable>
  );
}

export default Window;