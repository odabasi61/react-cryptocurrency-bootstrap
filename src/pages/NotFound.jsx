import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center text-white pt-5">
      <h1>Page Not Found</h1>
      <p>
        Please click{" "}
        <Link to={"/"} className="text-danger fw-bold">
          HERE
        </Link>{" "}
        to go back to main page
      </p>
    </div>
  );
};

export default NotFound;
