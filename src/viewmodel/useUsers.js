import { useEffect, useState } from 'react';
import { fetchUsers } from '../api/userApi';

const SORT_STATES = [null, 'asc', 'desc'];

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);

  const [sortField, setSortField] = useState(null);
  const [sortOrderIndex, setSortOrderIndex] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sortOrder = SORT_STATES[sortOrderIndex];

  useEffect(() => {
    loadUsers();
  }, [page, sortField, sortOrderIndex]);

  async function loadUsers() {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchUsers({
        page,
        limit,
        sortBy: sortOrder ? sortField : null,
        order: sortOrder
      });

      setUsers(data.users);
      setTotal(data.total);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function toggleSort(field) {
    if (field !== sortField) {
      setSortField(field);
      setSortOrderIndex(1);
    } else {
      setSortOrderIndex((prev) => (prev + 1) % 3);
    }
    setPage(1);
  }

  return {
    users,
    page,
    total,
    limit,
    loading,
    error,
    setPage,
    toggleSort,
    sortField,
    sortOrder
  };
}
