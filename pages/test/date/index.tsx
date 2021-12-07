import { FC } from 'react';
import CodeBlock from '../../../components/CodeBlock';

const TestDate: FC = () => {
  return (
    <>
      <h2>Test: Date</h2>
      <CodeBlock path='state/dateState.ts' />
    </>
  );
};

export default TestDate;
