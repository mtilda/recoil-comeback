import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import Link from 'next/link';
import stringState from '../../../state/stringState';
import routes from '../../../routes';

const TestStringRead: FC = () => {
  const string = useRecoilValue(stringState);
  return (
    <>
      <h2>Test: <label htmlFor='write'>Read string state</label></h2>
      <input
        id='write'
        type='text'
        value={string}
        disabled
      />
      <hr />
      <p>
        <Link href={routes.testStringWrite}>
          Write string state
        </Link>
      </p>
    </>
  );
};

export default TestStringRead;
