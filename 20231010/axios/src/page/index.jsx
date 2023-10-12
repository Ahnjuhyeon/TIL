import { useEffect, useState } from "react";
import axios from "axios";
const IssuesPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://docs.github.com/repos/issues")
      .then((response) => setPosts(response.data));
  });

  return (
    <>
      <ul>{posts}</ul>
    </>
  );
};
export default IssuesPage;
