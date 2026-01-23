export function UserModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeStyle} onClick={onClose}>✕</button>

        <img
          src={user.image}
          alt="avatar"
          style={{ width: 120, borderRadius: '50%' }}
        />

        <h3>
          {user.lastName} {user.firstName} {user.maidenName}
        </h3>

        <p>Возраст: {user.age}</p>
        <p>Рост: {user.height}</p>
        <p>Вес: {user.weight}</p>
        <p>Телефон: {user.phone}</p>
        <p>Email: {user.email}</p>

        <p>
          Адрес:<br />
          {user.address.country}, {user.address.city}<br />
          {user.address.address}
        </p>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '400px',
  minHeight: '400px',
};

const modalStyle = {
  background: '#fff',
  padding: 20,
  maxWidth: 400,
  width: '100%',
  position: 'relative',
  backgroundColor: 'var(--bg-color)',
  border: '1px solid var(--text-color)'
};

const closeStyle = {
  position: 'absolute',
  top: 10,
  right: 10
};
