import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import Link from 'next/link';
import booleanState from '../../../state/booleanState';
import routes from '../../../routes';

const TestBooleanRead: FC = () => {
  const boolean = useRecoilValue(booleanState);
  return (
    <>
      <h2>Test: <label htmlFor='write'>Read boolean state</label></h2>
      <input
        id='write'
        type='checkbox'
        checked={boolean}
        disabled
      />
      <hr />
      <p>
        <Link href={routes.testBooleanWrite}>
          Write boolean state
        </Link>
      </p>
    </>
  );
};

export default TestBooleanRead;
