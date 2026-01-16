import { useState, useCallback } from 'react';

export const useSort = (initialField = null, initialDirection = 'none') => {
  const [sortConfig, setSortConfig] = useState({
    field: initialField,
    direction: initialDirection
  });

  const handleSort = useCallback((field, getNextDirection) => {
    setSortConfig(prev => {
      const newDirection = getNextDirection(prev.field, field, prev.direction);
      return {
        field: newDirection === 'none' ? null : field,
        direction: newDirection
      };
    });
  }, []);

  return {
    sortConfig,
    handleSort,
    setSortConfig
  };
};