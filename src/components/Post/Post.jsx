import { Link, useNavigate } from "react-router-dom";

export default function Post({ post }) {
  const navigate = useNavigate();
  const { id, title, body } = post;

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="user">
      <h4>Post of Id:{id} </h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>See Post</Link>
      <button onClick={handleShowDetail}>Show Details</button>
    </div>
  );
}
