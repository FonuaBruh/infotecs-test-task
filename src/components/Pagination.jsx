export function Pagination({ page, total, limit, onChange }) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => onChange(page - 1)}>
        Назад
      </button>

      <span>Страница {page} из {totalPages}</span>

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Вперед
      </button>
    </div>
  );
}
