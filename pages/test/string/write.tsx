import { FC } from 'react';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import stringState from '../../../state/stringState';
import routes from '../../../routes';

const TestStringWrite: FC = () => {
  const [ string, setString ] = useRecoilState(stringState);
  return (
    <>
      <h2>Test: <label htmlFor='write'>Write string state</label></h2>
      <input
        id='write'
        type='text'
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <hr />
      <p>
        <Link href={routes.testStringRead}>
          Read string state
        </Link>
      </p>
    </>
  );
};

export default TestStringWrite;
