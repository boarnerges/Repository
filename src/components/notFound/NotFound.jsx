import { Link } from "react-router-dom";
import { AlertCircle, Home } from "lucide-react";
import "./notFound.css";

const NotFound = () => {
  return (
    <section className="not-found-section container">
      <div 
        className="not-found-content"
      >
        <div className="error-code">404</div>
        <div className="error-icon-wrap">
          <AlertCircle size={48} className="error-icon" />
        </div>
        <h1>System Error: Intent Not Found.</h1>
        <p>
          The resource you are looking for has been moved, deleted, or never existed in this architecture.
        </p>
        <Link to="/" className="btn btn-primary">
          <Home size={18} />
          <span>Back to Command Center</span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
