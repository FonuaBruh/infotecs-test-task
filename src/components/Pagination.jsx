export function Pagination({ page, total, limit, onChange }) {
  const totalPages = Math.ceil(total / limit);

  const BUTTONS = {
    back: 'Назад',
    next: 'Вперед'
  }

  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => onChange(page - 1)}>
        {BUTTONS.back}
      </button>

      <span>Страница {page} из {totalPages}</span>

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        {BUTTONS.next}
      </button>
    </div>
  );
}
