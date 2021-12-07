import { FC } from 'react';
import CodeBlock from '../../../components/CodeBlock';

const TestBoolean: FC = () => {
  return (
    <>
      <h2>Test: Boolean</h2>
      <CodeBlock path='state/booleanState.ts' />
    </>
  );
};

export default TestBoolean;
