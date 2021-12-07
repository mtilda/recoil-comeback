import { FC } from 'react';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import booleanState from '../../../state/booleanState';
import routes from '../../../routes';

const TestBooleanWrite: FC = () => {
  const [ boolean, setBoolean ] = useRecoilState(booleanState);
  return (
    <>
      <h2>Test: <label htmlFor='write'>Write boolean state</label></h2>
      <label className='switch'>
        <input
          id='write'
          type='checkbox'
          checked={boolean}
          onChange={(e) => setBoolean(e.currentTarget.checked)}
        />
        <span className='slider round'></span>
      </label>
      <hr />
      <p>
        <Link href={routes.testBooleanRead}>
          Read boolean state
        </Link>
      </p>
    </>
  );
};

export default TestBooleanWrite;
