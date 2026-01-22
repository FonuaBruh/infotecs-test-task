const BASE_URL = 'https://dummyjson.com/users';

export async function fetchUsers({
  page,
  limit,
  sortBy,
  order
}) {
  const skip = (page - 1) * limit;

  let url = `${BASE_URL}?limit=${limit}&skip=${skip}`;

  if (sortBy && order) {
    url += `&sortBy=${sortBy}&order=${order}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Ошибка при загрузке пользователей');
  }

  return response.json();
}
