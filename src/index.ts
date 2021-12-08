import { AtomEffect } from 'recoil';
import sessionAtom from './sessionAtom';

/**
 * Creates a Recoil effect to
 * backup and rehydrate state
 * using the given `Storage` object
 */
const createComeback = (
  key: string,
  storage: Storage,
): AtomEffect<any> => {
  if (!storage)
    return () => {};

  /**
   * Invoked the first time an atom is used (set or get)
   */
  const comeback: AtomEffect<any> = ({ node, trigger, onSet, setSelf }) => {

    if (trigger === 'get') {
      const store = getStore();

      if (node.key in store)
        setSelf(reconstructItem(store[node.key]));
    }

    onSet((newValue: unknown) => {
      const store = getStore();

      setStore({
        ...store,
        [node.key]: {
          value: newValue,
          class: Object.prototype.toString.call(newValue),
        },
      });
    });
  };

  /**
   * Construct a new instance of the item's original class
   */
  const reconstructItem = (item: Item): unknown => {
    switch (item.class) {
      case '[object Date]':
        return new Date(item.value as string | number | Date);
      default:
        return item.value;
    }
  };

  const getStore = (): Store => {
    const jsonString = storage.getItem(key);
    if (typeof jsonString === 'string')
      return parseJson(jsonString);
    return {};
  };

  const setStore = (store: Store): void => {
    try {
      storage.setItem(key, JSON.stringify(store));
    } catch (error) {
      console.error(error);
    }
  };

  const parseJson = (jsonString: string) => {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error(error);
      return {};
    }
  };

  return comeback;
};

interface Item {
  value: unknown;
  class: string;
}

type Store = Record<string, Item>;

/**
 * Based on built-in interface `Storage`
 */
export interface ComebackStorage {
  setItem(key: string, value: string): void;
  getItem(key: string): null | string;
}

export {
  createComeback,
  sessionAtom,
};
