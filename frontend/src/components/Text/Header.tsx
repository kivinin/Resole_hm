import React from 'react';

function Header({ text }: { text: String }): JSX.Element {
  return (
    <div>
      <div
        style={{ fontSize: '50px', fontWeight: '700', margin: '200px 0 30px 0' }}
      >
        {text}
      </div>
    </div>
  );
}

export default Header;
