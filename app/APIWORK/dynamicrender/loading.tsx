import React from 'react';
interface LoadingStripProps {
  text: string;
}
const LoadingStrip = ({text}:LoadingStripProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          height: '20px',
          backgroundColor: 'gray',
          flexGrow: 1,
          marginRight: '10px',
        }}
      />
      <p style={{ margin: 0 }}>{text}</p>
    </div>
  );
};

export default LoadingStrip;