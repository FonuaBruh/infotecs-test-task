export const LoadingError = ({ loading, error, children }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Загрузка</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">Ошибка: {error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="retry-button"
        >
          Повторить попытку
        </button>
      </div>
    );
  }

  return children;
};