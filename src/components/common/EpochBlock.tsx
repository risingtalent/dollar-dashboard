import React from 'react';

type EpochBlockProps = {
  epoch: string
}

function EpochBlock({ epoch }: EpochBlockProps) {
  return (
    <>
      <div style={{ fontSize: '12px', padding: 3, color: 'currentTheme.border' }}>Epoch</div>
      <div style={{ fontSize: '18px', padding: 3, fontWeight: 400, lineHeight: 1.5, fontFamily: 'aragon-ui-monospace, monospace'}}>{epoch}</div>
    </>
  );
}

export default EpochBlock;
