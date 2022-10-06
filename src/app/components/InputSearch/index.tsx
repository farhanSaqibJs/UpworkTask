import { Input } from 'antd';
import React from 'react';
import './style.less';

const { Search } = Input;

const InputSearch = () => (
  <>
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      loading
    />
  </>
);

export default InputSearch;
