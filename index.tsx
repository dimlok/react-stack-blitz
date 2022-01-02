import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
const Test = styled.div`
color:red;
font-size: 12rem;
`;

const App = () => {
  const name = 'test';
  return (
    <div>
      <Test>{name}</Test>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};

render(<App />, document.getElementById('root'));
