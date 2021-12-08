import { ChangeEvent, FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import CodeBlock from '../../components/CodeBlock';
import booleanState from '../../state/session/booleanState';

const SessionBoolean: FC = () => {
  const [ recoilState, setRecoilState ] = useRecoilState(booleanState);
  const recoilValue = useRecoilValue(booleanState);

  console.log(recoilState);

  return (
    <>
      <h2>sessionAtom &gt; boolean</h2>

      <hr />

      <h3><label htmlFor='recoil-state'>useRecoilState</label></h3>
      <label className='switch'>
        <input
          id='recoil-state'
          type='checkbox'
          checked={recoilState}
          onClick={(e) => setRecoilState(e.currentTarget.checked)}
        />
        <span className='slider round'></span>
      </label>

      <hr />

      <h3><label htmlFor='recoil-value'>useRecoilValue</label></h3>
      <label className='switch'>
        <input
          id='recoil-value'
          type='checkbox'
          checked={recoilValue}
          disabled
        />
        <span className='slider round'></span>
      </label>

      <hr />

      <h3>Example</h3>
      <CodeBlock path='state/session/booleanState.ts' />
    </>
  );
};

export default SessionBoolean;
