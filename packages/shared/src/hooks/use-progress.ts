import { useState } from 'react';
import { useInterval } from './use-interval';

export function useProgress(initialValue: number, target: number, updateInterval: number | null) {
  const [value, setValue] = useState(initialValue);

  useInterval(() => {
    setValue((prev) => {
      const newValue = prev + Math.floor(Math.random() * 10);
      return newValue > target ? target : newValue;
    });
  }, updateInterval);

  return value;
}
