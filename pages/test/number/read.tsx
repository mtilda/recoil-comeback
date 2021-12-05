import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import Link from 'next/link';
import numberState from '../../../state/numberState';
import routes from '../../../routes';

const TestNumberRead: FC = () => {
  const number = useRecoilValue(numberState);
  return (
    <>
      <h2>Test: <label htmlFor='write'>Read number state</label></h2>
      <input
        id='write'
        type='number'
        value={number}
        disabled
      />
      <hr />
      <p>
        <Link href={routes.testNumberWrite}>
          Write number state
        </Link>
      </p>
    </>
  );
};

export default TestNumberRead;
