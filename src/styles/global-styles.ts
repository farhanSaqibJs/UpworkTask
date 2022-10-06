import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background: #f3f3f3;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    
  }
  ::-webkit-scrollbar-thumb {
    background: #25AB75;
    border-radius: 8px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
  }
  section {
    background: #fff;
  }
  .heroPageHeight {
    min-height: calc(100vh - 180px);
  }
  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  .mt-1 {
    margin-top: 4px;
  }
  .mt-2 {
    margin-top: 8px;
  }
  .mt-3 {
    margin-top: 12px;
  }
  .mt-4 {
    margin-top: 16px;
  }
  .space-1 {
    margin-bottom: 4px !important;
    display: inline-block;
    width: 100%;
  }
  .space-2 {
    margin-bottom: 8px !important;
    display: inline-block;
    width: 100%;
  }
  .space-3 {
    margin-bottom: 12px !important;
    display: inline-block;
    width: 100%;
  }
  .space-4 {
    margin-bottom: 16px !important;
    display: inline-block;
    width: 100%;
  }
  label {
    font-weight: 500;
    margin-bottom: 6px;
    display: inline-block;
  }
  
  
  .ant-btn {
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
  }
  .ant-btn-ghost {
    color: #25AB75;
  }
`;
