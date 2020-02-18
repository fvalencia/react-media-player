import React from 'react';

import './Layout.scss';

export const Layout = (props) => {
  return (
    <div className="app">
      <div className="bg-artwork"></div>
      <div className="bg-layer"></div>
      { props.children }
    </div>
  );
};

export default Layout;
