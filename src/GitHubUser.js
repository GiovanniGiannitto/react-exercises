import { useGitHubUser } from "./useGitHubUser";

export function GitHubUser() {
  const { users, error, isLoading, handleRefetch } = useGitHubUser();

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>{user.login}</li>
          ))}
        </ul>
      )}
      <button onClick={handleRefetch}>Refetch</button>
    </div>
  );
}
