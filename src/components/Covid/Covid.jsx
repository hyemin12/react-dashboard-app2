import { useEffect, useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import axios from "axios";

import "./covid.css";
const Key = process.env.REACT_APP_COVID_API_KEY;
function Covid() {
  const [covidInfo, setCovidInfo] = useState();
  const [selected, setSelected] = useState();
  const getCovidInfo = async () => {
    const response = await axios.get(
      `https://api.corona-19.kr/korea/country/new/?serviceKey=${Key}`
    );
    setCovidInfo(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getCovidInfo();
  }, []);
  const citys = [
    { kor: "전체", eng: "korea" },
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
  console.log(citys.length);
  return (
    <div className="covid-wrapper">
      <div className="covid-title">
        <h4>코로나 확진 현황</h4>
        <span>
          <FaEllipsisH />
        </span>
      </div>

      <div className="covid-result">
        <div className="result-title">
          <select
            onChange={(e) => {
              console.log(e.target.value);
              setSelected(e.target);
            }}
          >
            {citys.map((city) => {
              return (
                <option value={city.eng} key={city.kor}>
                  {city.kor}
                </option>
              );
            })}
          </select>
        </div>
        <ul className="result-data">
          {/* {covidInfo.filter((city) => city.value === selected) ? (
            <h1>성공</h1>
          ) : (
            <h1>실패</h1>
          )} */}
          <li>
            <span>신규</span>
            <span></span>
          </li>
          <li>완치자</li>
          <li>전체</li>
        </ul>
        <span>신규발생</span>
        <span>
          {covidInfo && covidInfo ? `${covidInfo.gyeonggi.newCase}` : null}
        </span>
      </div>
    </div>
  );
}

export default Covid;
