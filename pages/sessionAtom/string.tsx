import { FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import CodeBlock from '../../components/CodeBlock';
import stringState from '../../state/session/stringState';

const SessionString: FC = () => {
  const [ recoilState, setRecoilState ] = useRecoilState(stringState);
  const recoilValue = useRecoilValue(stringState);

  return (
    <>
      <h2>sessionAtom &gt; string</h2>

      <hr />

      <h3><label htmlFor='recoil-state'>useRecoilState</label></h3>
      <input
        id='recoil-state'
        type='text'
        value={recoilState}
        onChange={(e) => setRecoilState(e.target.value)}
      />

      <hr />

      <h3><label htmlFor='recoil-value'>useRecoilValue</label></h3>
      <input
        id='recoil-value'
        type='text'
        value={recoilValue}
        disabled
      />

      <hr />

      <h3>Example</h3>
      <CodeBlock path='state/session/stringState.ts' />
    </>
  );
};

export default SessionString;
