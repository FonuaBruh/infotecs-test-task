export function UsersTable({
  users,
  onSort,
  sortField,
  sortOrder
}) {
  const getArrow = (field) => {
    if (sortField !== field) return ' -';
    if (sortOrder === 'asc') return ' ▲';
    if (sortOrder === 'desc') return ' ▼';
    return '';
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSort('lastName')}>Фамилия{getArrow('lastName')}</th>
          <th onClick={() => onSort('firstName')}>Имя{getArrow('firstName')}</th>
          <th onClick={() => onSort('surname')}>Отчество{getArrow('surname')}</th>
          <th onClick={() => onSort('age')}>Возраст{getArrow('age')}</th>
          <th onClick={() => onSort('gender')}>Пол{getArrow('gender')}</th>
          <th onClick={() => onSort('phone')}>Телефон{getArrow('phone')}</th>
          <th>Email</th>
          <th>Страна</th>
          <th>Город</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.lastName}</td>
            <td>{u.firstName}</td>
            <td>{u.maidenName}</td>
            <td>{u.age}</td>
            <td>{u.gender === 'male' ? 'Мужской' : 'Женский'}</td>
            <td>{u.phone}</td>
            <td>{u.email}</td>
            <td>{u.address.country}</td>
            <td>{u.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
