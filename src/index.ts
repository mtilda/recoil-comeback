import { AtomEffect } from 'recoil';

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
        setSelf(store[node.key]);
    }

    onSet((newValue: any) => {
      const store = getStore();

      setStore({
        ...store,
        [node.key]: newValue,
      });
    });
  };

  const getStore = (): Record<string, unknown> => {
    const jsonString = storage.getItem(key);
    if (typeof jsonString === 'string')
      return parseJson(jsonString);
    return {};
  };

  const setStore = (store: Record<string, any>): void => {
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


/**
 * Based on built-in interface `Storage`
 */
export interface ComebackStorage {
  setItem(key: string, value: string): void;
  getItem(key: string): null | string;
}

export { createComeback };
