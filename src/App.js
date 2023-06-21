import React, {useState, useEffect} from "react";
import Posts from './components/Posts';
import Pagination from "./components/Pagination";

function App() {
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage] = useState(10);

  useEffect(() => {
    async function fetchPosts(){
      setLoading(true);
      await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json));
      setLoading(false);
    }
    fetchPosts();
  }, []);

  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = posts.splice(indexOfFirstPost, indexOfLastPost);

  let paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">My Blog</h2>
      <Posts 
        currentPosts={currentPosts}
        loading={loading} />
      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
