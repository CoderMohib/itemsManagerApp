import { Link } from "react-router-dom";
import '../styles/Notfound.css'
const NotFound = () => {
  return (
    <div className="side-Content not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="button-link">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
