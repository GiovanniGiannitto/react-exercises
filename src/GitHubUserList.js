import { useState } from "react";
import { Link } from "react-router-dom";

export function GitHubUserList() {
  const [user, setUser] = useState([]);

  const usersList = (event) => {
    event.preventDefault();

    setUser([...user, event.target.elements.input.value]);
  };

  return (
    <div>
      <form onSubmit={usersList}>
        <input name="input" />
        <button type="submit">Add to List</button>
        <ul>
          {user.map((u, index) => (
            <li key={index}>
              <Link to={`/users/${user}`}>{u}</Link>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};


