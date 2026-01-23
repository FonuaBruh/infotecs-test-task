export function UsersTable({
  users,
  onSort,
  sortField,
  sortOrder,
  onRowClick
}) {
  const COLUMN_TITLE = {
    lastName: 'Фамилия',
    firstName: 'Имя',
    surname: 'Отчество',
    age: 'Возраст',
    gender: 'Пол',
    phone: 'Телефон',
    email: 'Email',
    country: 'Страна',
    city: 'Город'
  }

  const FILTER_BUTTONS = {
    static: ' -',
    asc: ' ▲',
    desc: ' ▼',
  }
  
  const getArrow = (field) => {
    if (sortField !== field) return FILTER_BUTTONS.static;
    if (sortOrder === 'asc') return FILTER_BUTTONS.asc;
    if (sortOrder === 'desc') return FILTER_BUTTONS.desc;
    return FILTER_BUTTONS.static;
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSort('lastName')}>{COLUMN_TITLE.lastName}{getArrow('lastName')}</th>
          <th onClick={() => onSort('firstName')}>{COLUMN_TITLE.firstName}{getArrow('firstName')}</th>
          <th onClick={() => onSort('surname')}>{COLUMN_TITLE.surname}{getArrow('surname')}</th>
          <th onClick={() => onSort('age')}>{COLUMN_TITLE.age}{getArrow('age')}</th>
          <th onClick={() => onSort('gender')}>{COLUMN_TITLE.gender}{getArrow('gender')}</th>
          <th onClick={() => onSort('phone')}>{COLUMN_TITLE.phone}{getArrow('phone')}</th>
          <th>{COLUMN_TITLE.email}</th>
          <th>{COLUMN_TITLE.country}</th>
          <th>{COLUMN_TITLE.city}</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr
            key={u.id}
            onClick={() => onRowClick(u)}
            style={{ cursor: 'pointer' }}
          >
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
