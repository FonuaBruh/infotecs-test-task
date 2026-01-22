import { useUsersViewModel } from './viewmodel/useUsers';
import { UsersTable } from './components/UsersTable';
import { Pagination } from './components/Pagination';
import './App.css';

export default function App() {
  const vm = useUsersViewModel();

  return (
    <div className="container">
      {vm.loading && <p>Загрузка...</p>}
      {vm.error && <p className="error">{vm.error}</p>}

      {!vm.loading && !vm.error && (
        <>
          <UsersTable
            users={vm.users}
            onSort={vm.toggleSort}
            sortField={vm.sortField}
            sortOrder={vm.sortOrder}
          />

          <Pagination
            page={vm.page}
            total={vm.total}
            limit={vm.limit}
            onChange={vm.setPage}
          />
        </>
      )}
    </div>
  );
}
