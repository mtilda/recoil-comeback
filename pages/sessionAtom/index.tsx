import { FC } from 'react';
import CodeBlock from '../../components/CodeBlock';

const Test: FC = () => {
  return (
    <>
      <h2>sessionAtom</h2>

      <hr />

      <p>
        Creates an atom that persists state to sessionStorage.
      </p>

      <hr />

      <h3>Example</h3>
      <CodeBlock path='state/session/anyState.ts' />

      <hr />

      <h3>Source code</h3>
      <CodeBlock path='src/sessionAtom.ts' />
    </>
  );
};

export default Test;
