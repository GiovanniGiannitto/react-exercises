import { useGitHubUser } from "./useGitHubUser";

export function GitHubUser({username}) {
  const { data } = useGitHubUser(username)
  
   return <div>{data && <h1>{data.username}</h1>}</div>;
}
