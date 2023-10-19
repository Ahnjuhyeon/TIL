import { fetchMovies, fetchTopMovies } from "../apis";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const LandingPage = () => {
  const [movieArr, setMovieArr] = useState();

  // const data = fetchMovies();
  // data && console.log(data);
  // fetchMovies();

  useEffect(() => {
    (async () => {
      const data = await fetchMovies();
      // console.log(data);
      setMovieArr(data.results);
      // console.log(movieArr);
    })();
  }, []);

  //리액트쿼리사용법
  // const { data, isLoading } = useQuery(
  //   ["아무이름혹은데이터에 이름붙여주기"],
  //   () => {
  //     fetchMovies();
  //   }
  // );
  // 알아서 상태로 만들어줌

  const { data: topMovie, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTopMovies,
  });

  //데이터 패싱을 했을 때만 보여준다
  return (
    topMovie !== undefined && (
      <ul>
        {topMovie.results.map((data, index) => (
          <li key={index}>{data.title}</li>
        ))}
      </ul>
    )
  );
};

export default LandingPage;
/*
 1.데이터 받아오기 
 2.영화제목 화면에 나열하기

 1.
 2. 
 */
