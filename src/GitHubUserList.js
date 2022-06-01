import { useState } from "react";
import { GitHubUser } from "./GitHubUser";

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
              <GitHubUser username={u} />
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};


