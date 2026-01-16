export const getNextSortDirection = (currentField, clickedField, currentDirection) => {
  if (currentField !== clickedField) {
    return 'asc';
  }

  switch (currentDirection) {
    case 'asc':
      return 'desc';
    case 'desc':
      return 'none';
    case 'none':
    default:
      return 'asc';
  }
};

export const getSortIcon = (currentField, clickedField, currentDirection) => {
  if (currentField !== clickedField || currentDirection === 'none') {
    return '↕';
  }
  
  return currentDirection === 'asc' ? '↑' : '↓';
};

export const mapSortField = (field) => {
  const fieldMap = {
    'firstName': 'firstName',
    'lastName': 'lastName',
    'age': 'age',
    'gender': 'gender',
    'phone': 'phone'
  };
  
  return fieldMap[field] || field;
};