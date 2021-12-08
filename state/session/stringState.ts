import { sessionAtom } from '../../src';

const stringState = sessionAtom<string>({
  key: 'stringState',
  default: '',
});

export default stringState;
