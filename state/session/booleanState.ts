import { sessionAtom } from '../../src';

const booleanState = sessionAtom<boolean>({
  key: 'booleanState',
  default: false,
});

export default booleanState;
