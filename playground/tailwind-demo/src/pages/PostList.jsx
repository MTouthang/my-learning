import { useQuery } from "@tanstack/react-query";

const PostList = () => {
  // useQuery hook to fetch data and manage its state
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["posts"], // Unique key to identify the query

    // Function that fetches data
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      return data;
    },
    staleTime: 1000 * 60 * 5, // caching data form 5minutes
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {/* Button to manually trigger a refetch of the data */}
      <button onClick={refetch}>Refetch</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
