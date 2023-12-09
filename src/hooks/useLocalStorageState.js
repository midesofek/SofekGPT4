/// this hook is targeted to work similar to the useState hook

import { useEffect, useState } from "react";

/**
 *
 * @param {*} initalState
 * @param {*} key
 * @returns
 */
export function useLocalStorageState(initalState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initalState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
