import { useCallback } from 'react';
import { useUsers } from '../../hooks/useUsers';
import { useSort } from '../../hooks/useSort';
import { getNextSortDirection } from '../../utils/sortUtils';
import { TableHeader } from '../../components/TableHeader';
import { TableRow } from '../../components/TableRow';
import { Pagination } from '../Pagination/Pagination';
import { LoadingError } from '../../components/LoadingError';

export const Table = () => {
  const {
    users,
    loading,
    error,
    pagination,
    fetchUsers,
    handlePageChange
  } = useUsers();

  const { sortConfig, handleSort } = useSort();

  const handleSortWithFetch = useCallback((field, nextDirection) => {
    handleSort(field, getNextSortDirection);
    
    fetchUsers(1, nextDirection === 'none' ? null : field, nextDirection);
  }, [handleSort, fetchUsers]);

  return (
    <div className="users-table-container">
      <LoadingError loading={loading && users.length === 0} error={error}>
        <div className="table-info">
          <h2>Список пользователей</h2>
          <p>Всего пользователей: {pagination.total}</p>
          {loading && users.length > 0 && (
            <div className="loading-indicator">Обновление данных...</div>
          )}
        </div>

        {users.length > 0 && (
          <>
            <table className="users-table">
              <TableHeader
                sortConfig={sortConfig}
                onSort={handleSortWithFetch}
                getNextSortDirection={getNextSortDirection}
              />
              <tbody>
                {users.map((user) => (
                  <TableRow key={user.id} user={user} />
                ))}
              </tbody>
            </table>

            <Pagination
              pagination={pagination}
              loading={loading}
              onPageChange={handlePageChange}
            />
          </>
        )}

        {!loading && users.length === 0 && !error && (
          <div className="no-data">Нет данных</div>
        )}
      </LoadingError>
    </div>
  );
};