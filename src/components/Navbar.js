import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  return (
    <div>
      <div className="d-flex align-items-center gap-4 justify-content-center py-4">
        <Link to="/">
          <FaCoins className="coin-icon" />
        </Link>
        <h1 className="fw-bold">
          Coin <span className="purple">Search</span>
        </h1>
      </div>
      <div className="col-12 col-sm-10 col-lg-8 m-auto pb-2">
        <form className="text-center">
          <input
            type="search"
            className="w-50 rounded-2 py-1 px-2 border border-none"
            placeholder="Search coins..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
