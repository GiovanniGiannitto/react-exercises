/*import { useEffect, useState } from "react";
export function useGitHubUser({username}) {

const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

async function fetchGitHubUser(username) {
    setLoading(true)
    setError(null)

    try{
        const response = await fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()

        setData(json)
    }catch (error) {
        setError(error)
        setData(null)
    }finally {
        setLoading(false)
    }
}

  useEffect(() => {
      fetchGitHubUser(username)
  }, [username])

  return {data, error, loading}
}*/

import useSWR from "swr";

const fetcher = url => fetch(url).then(response => response.json())

export function useGitHubUser() {
    const { data, error } = useSWR(`https://api.github.com/users`, fetcher)

    return  {
        users: data,
        error,
        isLoading: !data && !error
    }
    
}
