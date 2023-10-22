import React from 'react';

const Bubble = ({ key, data, style, onClick, onMouseOver, onMouseOut }) => {
  return (
    <div
      className="bubble"
      style={style}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {/* You can display content or data related to the bubble here */}
    </div>
  );
};

export default Bubble;