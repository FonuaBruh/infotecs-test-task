import { useState, useEffect, useCallback } from 'react';
import { usersApi } from '../api/usersApi';

export const useUsers = (initialPage = 1) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: initialPage,
    totalPages: 1,
    total: 0
  });

  const fetchUsers = useCallback(async (page = 1, sortField = null, sortDirection = 'none') => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await usersApi.getUsers({
        page,
        sortBy: sortField,
        order: sortDirection
      });
      
      setUsers(data.users);
      setPagination({
        currentPage: page,
        totalPages: Math.ceil(data.total / 10),
        total: data.total
      });
      
      return data;
    
    } catch (err) {
      setError(err.message);
      console.error('Error fetching users:', err);
      throw err;
    
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers(initialPage);
  }, [fetchUsers, initialPage]);

  const handlePageChange = useCallback((page) => {
    fetchUsers(page);
  }, [fetchUsers]);

  return {
    users,
    loading,
    error,
    pagination,
    fetchUsers,
    handlePageChange,
    setUsers,
    setPagination
  };
};