const fetchPosts = async () => {
  for(let i = 0; i<100000000;i++) {}
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

export default fetchPosts;