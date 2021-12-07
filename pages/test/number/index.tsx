import { FC } from 'react';
import CodeBlock from '../../../components/CodeBlock';

const TestNumber: FC = () => {
  return (
    <>
      <h2>Test: Number</h2>
      <CodeBlock path='state/numberState.ts' />
    </>
  );
};

export default TestNumber;
