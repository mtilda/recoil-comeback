import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import Link from 'next/link';
import dateState from '../../../state/dateState';
import routes from '../../../routes';

const TestDateRead: FC = () => {
  const date = useRecoilValue(dateState);
  return (
    <>
      <h2>Test: <label htmlFor='write'>Read date state</label></h2>
      <input
        id='write'
        type='date'
        value={date.toISOString().split('T')[0]}
        disabled
      />
      <hr />
      <p>
        <Link href={routes.testDateWrite}>
          Write date state
        </Link>
      </p>
    </>
  );
};

export default TestDateRead;
