import { getSortIcon } from '../utils/sortUtils';

const COLUMNS = [
  { key: 'firstName', label: 'Имя' },
  { key: 'lastName', label: 'Фамилия' },
  { key: 'age', label: 'Возраст' },
  { key: 'gender', label: 'Пол' },
  { key: 'phone', label: 'Телефон' }
];

export const TableHeader = ({ sortConfig, onSort, getNextSortDirection }) => {
  return (
    <thead>
      <tr>
        {COLUMNS.map((column) => (
          <th
            key={column.key}
            onClick={() => {
              const nextDirection = getNextSortDirection(
                sortConfig.field,
                column.key,
                sortConfig.direction
              );
              onSort(column.key, nextDirection);
            }}
            className="sortable-header"
          >
            <span className="header-content">
              {column.label}
              <span className="sort-icon">
                {getSortIcon(
                  sortConfig.field,
                  column.key,
                  sortConfig.direction
                )}
              </span>
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};