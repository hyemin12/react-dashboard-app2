import { useEffect, useState } from "react";
import {
  FaUserFriends,
  FaHubspot,
  FaHeartbeat,
  FaPlusSquare,
} from "react-icons/fa";
import axios from "axios";

import "./covid.css";
const Key = process.env.REACT_APP_COVID_API_KEY;
function Covid() {
  const [covidInfo, setCovidInfo] = useState();
  const [selected, setSelected] = useState("합계");
  const getCovidInfo = async () => {
    const response = await axios.get(
      `https://api.corona-19.kr/korea/country/new/?serviceKey=${Key}`
    );
    const objValue = Object.values(response.data).slice(2, 19);
    const selectCity = objValue.filter((city) => city.countryName === selected);
    setCovidInfo(selectCity[0]);
  };
  useEffect(() => {
    getCovidInfo();
  }, [selected]);

  const citys = [
    { kor: "합계", eng: "korea" },
    { kor: "강원", eng: "gangwon" },
    { kor: "경기", eng: "gyeonggi" },
    { kor: "경남", eng: "gyeongnam" },
    { kor: "경북", eng: "gyeongbuk" },
    { kor: "광주", eng: "gwangju" },
    { kor: "대구", eng: "daegu" },
    { kor: "대전", eng: "daejeon" },
    { kor: "부산", eng: "busan" },
    { kor: "서울", eng: "seoul" },
    { kor: "세종", eng: "sejong" },
    { kor: "인천", eng: "incheon" },
    { kor: "울산", eng: "ulsan" },
    { kor: "전남", eng: "jeonnam" },
    { kor: "전북", eng: "jeonbuk" },
    { kor: "제주", eng: "jeju" },
    { kor: "충남", eng: "chungnam" },
    { kor: "충북", eng: "chungbuk" },
  ];
  return (
    <div className="covid-wrapper">
      <div className="covid-title">
        <h4>코로나 확진 현황</h4>
        <div className="result-title">
          <select
            onChange={(e) => {
              console.log(e.target.value);
              setSelected(e.target.value);
            }}
          >
            {citys.map((city) => {
              return (
                <option value={city.kor} key={city.kor}>
                  {city.kor}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {covidInfo && covidInfo !== null ? (
        <div className="covid-result">
          <div className="result-box">
            <FaHubspot />
            <p>신규 발생</p>
            <span>{covidInfo.newCase}</span>
            {/* <span className="add">{covidInfo.percentage}%</span> */}
          </div>
          <div className="result-box">
            <FaUserFriends />
            <p>확진자</p>
            <span>{covidInfo.totalCase}</span>
          </div>

          <div className="result-box">
            <FaPlusSquare />
            <p>완치자</p>
            <span>{covidInfo.recovered}</span>
          </div>
          <div className="result-box">
            <FaHeartbeat />
            <p>사망자</p>
            <span>{covidInfo.death}</span>
          </div>
        </div>
      ) : (
        <div>정보를 불러올 수 없습니다.</div>
      )}
    </div>
  );
}

export default Covid;
