import { useState, useEffect } from "react";
import axios from "axios"; // Axios 라이브러리를 가져옵니다.

const LandingPage = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("YOUR_API_ENDPOINT_HERE", {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
          },
        });

        if (response.status === 200) {
          const data = response.data;
          setMovieData(data);
        } else {
          console.error("API 요청에 실패했습니다.");
        }
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };

    fetchData(); // fetchData 함수를 호출하여 API를 호출하고 데이터를 설정
  }, []);

  return (
    <div>
      <p>얍</p>
      {movieData ? (
        <p>영화 데이터: {JSON.stringify(movieData)}</p>
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
};

export default LandingPage;
