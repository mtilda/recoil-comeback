import { sessionAtom } from '../../src';

const dateState = sessionAtom<Date>({
  key: 'dateState',
  default: new Date(),
});

export default dateState;
