import { useEffect } from "react";
import "./App.css";
import IssueAPI from "./api/api";

function App() {
  useEffect(() => {
    (async () => {
      const api = await IssueAPI.getAPI();
      console.log(api);
    })();
  }, []);
  return (
    <>
      <p>얍</p>
    </>
  );
}

export default App;
/*
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //1번째 방법
    // axios({
    //   method: "GET",
    //   url: "https://jsonplaceholder.typicode.com/photos",
    // }).then((response) => setPosts(response.data));
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => setPosts(response.data));
  });



 <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div> {post.title}</div>
            <div>
              <img src={post.thumbnailUrl} alt="photo" />
            </div>
          </li>
        ))}
      </ul>
*/
