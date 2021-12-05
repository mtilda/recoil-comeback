import { FC } from 'react';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import numberState from '../../../state/numberState';
import routes from '../../../routes';

const TestNumberWrite: FC = () => {
  const [ number, setNumber ] = useRecoilState(numberState);
  return (
    <>
      <h2>Test: <label htmlFor='write'>Write number state</label></h2>
      <input
        id='write'
        type='number'
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <hr />
      <p>
        <Link href={routes.testNumberRead}>
          Read number state
        </Link>
      </p>
    </>
  );
};

export default TestNumberWrite;
