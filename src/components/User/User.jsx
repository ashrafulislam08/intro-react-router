import "./User.css";
const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="user">
      <h2>name: {name}</h2>
      <p>phone: {phone}</p>
    </div>
  );
};

export default User;
