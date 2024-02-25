import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div>404 not found</div>
      <Link to="/">Home</Link>
    </>
  );
}

export default NotFoundPage;
