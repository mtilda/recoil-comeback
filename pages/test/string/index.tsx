import { FC } from 'react';
import CodeBlock from '../../../components/CodeBlock';

const TestString: FC = () => {
  return (
    <>
      <h2>Test: String</h2>
      <CodeBlock path='state/stringState.ts' />
    </>
  );
};

export default TestString;
