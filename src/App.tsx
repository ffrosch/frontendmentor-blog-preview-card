import { css } from '@emotion/react';
import './App.css';

const card = css``;

const title = css`
  font-size: 3rem;
`;

function App() {
  return (
    <>
      <div css={card}>
        <h2 css={title}>Hello World</h2>
      </div>
    </>
  );
}

export default App;
