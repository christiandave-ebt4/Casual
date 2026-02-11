import { useNavigate } from "react-router-dom";
import TopNav from "../layouts/TopNav";

export default function Home() {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("authed");
    navigate("/", { replace: true });
  };

  return (
    <div>
        <TopNav />
      <h1>Home Page</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
