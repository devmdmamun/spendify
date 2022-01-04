import { useState } from "react/cjs/react.development";
import styles from "./Signup.module.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Sign up</h2>
      <label>
        <span>Name *</span>
        <input
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <span>Email *</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password *</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className="btn">Sign up</button>
    </form>
  );
}
