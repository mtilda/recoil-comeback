import { FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import CodeBlock from '../../components/CodeBlock';
import numberState from '../../state/session/numberState';

const SessionNumber: FC = () => {
  const [ recoilState, setRecoilState ] = useRecoilState(numberState);
  const recoilValue = useRecoilValue(numberState);

  return (
    <>
      <h2>sessionAtom &gt; number</h2>

      <hr />

      <h3><label htmlFor='recoil-state'>useRecoilState</label></h3>
      <input
        id='recoil-state'
        type='number'
        value={recoilState}
        onChange={(e) => setRecoilState(e.target.valueAsNumber)}
      />

      <hr />

      <h3><label htmlFor='recoil-value'>useRecoilValue</label></h3>
      <input
        id='recoil-value'
        type='number'
        value={recoilValue}
        disabled
      />

      <hr />

      <h3>Example</h3>
      <CodeBlock path='state/session/numberState.ts' />
    </>
  );
};

export default SessionNumber;
