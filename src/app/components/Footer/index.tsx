import React from 'react';
import './style.less';
import { Footer } from 'antd/es/layout/layout';

function MainFooter() {
  return (
    <>
      <Footer
        style={{ textAlign: 'center', background: '#000', color: '#fff' }}
      >
        © Raghad 2022
      </Footer>
    </>
  );
}

export default MainFooter;
