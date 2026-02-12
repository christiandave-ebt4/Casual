import { useNavigate, NavLink } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("authed");
    navigate("/", { replace: true });
  };

  const linkClass ="font-semibold font-elegant px-2 py-1 rounded transition-colors";
  const activeClass = "text-yellow-600 shadow-lg";

  return (
    <nav className="px-6 py-3 flex items-center justify-between shadow font-elegant">
      <div className="flex gap-6">
        <NavLink to="/home" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : `${linkClass} `}>
          Home
        </NavLink>
        <NavLink to="/memories" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : `${linkClass}`}>
          Memories
        </NavLink>
        <NavLink to="/read" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : `${linkClass} `}>
          Read
        </NavLink>
      </div>
      <button
        onClick={logout}
        className="px-4 py-1 rounded hover:bg-burgundy-800 font-semibold font-elegant"
      >
        Logout
      </button>
    </nav>
  );
};

export default TopNav;