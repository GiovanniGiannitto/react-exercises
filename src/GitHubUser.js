import { useGitHubUser } from "./useGitHubUser";

export function GitHubUser({ username }) {
  const { data, error, loading } = useGitHubUser(username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {data && <h1>{data.username}</h1>}
    </div>
  );
}
