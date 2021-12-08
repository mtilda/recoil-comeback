import { FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import CodeBlock from '../../components/CodeBlock';
import dateState from '../../state/session/dateState';

const SessionDate: FC = () => {
  const [ recoilState, setRecoilState ] = useRecoilState(dateState);
  const recoilValue = useRecoilValue(dateState);

  return (
    <>
      <h2>sessionAtom &gt; Date</h2>

      <hr />

      <h3><label htmlFor='recoil-state'>useRecoilState</label></h3>
      <input
        id='recoil-state'
        type='date'
        value={recoilState.toISOString().split('T')[0]}
        onChange={(e) => setRecoilState(e.target.valueAsDate as Date)}
      />

      <hr />

      <h3><label htmlFor='recoil-value'>useRecoilValue</label></h3>
      <input
        id='recoil-value'
        type='date'
        value={recoilValue.toISOString().split('T')[0]}
        disabled
      />

      <hr />

      <h3>Example</h3>
      <CodeBlock path='state/session/dateState.ts' />
    </>
  );
};

export default SessionDate;
