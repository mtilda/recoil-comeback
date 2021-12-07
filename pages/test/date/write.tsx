import { FC } from 'react';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import dateState from '../../../state/dateState';
import routes from '../../../routes';

const TestDateWrite: FC = () => {
  const [ date, setDate ] = useRecoilState(dateState);
  console.log(typeof date, date);
  return (
    <>
      <h2>Test: <label htmlFor='write'>Write date state</label></h2>
      <input
        id='write'
        type='date'
        value={date.toISOString().split('T')[0]}
        onChange={(e) => setDate(new Date(e.target.value))}
      />
      <hr />
      <p>
        <Link href={routes.testDateRead}>
          Read date state
        </Link>
      </p>
    </>
  );
};

export default TestDateWrite;
