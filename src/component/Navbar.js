import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Spendify</li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>Hello {user.displayName}</li>
            <li className="btn" onClick={logout}>
              Logout
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
