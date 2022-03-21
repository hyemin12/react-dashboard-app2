import { useEffect, useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import axios from "axios";

import "./covid.css";
const Key = process.env.REACT_APP_COVID_API_KEY;
function Covid() {
  const [covidInfo, setCovidInfo] = useState();
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
  return (
    <div className="weather-covid">
      <section className="covid-wrapper">
        <h4>코로나확진자</h4>
        <div className="covid-result">
          <div className="result-title">
            <p>경기</p>
            <span>
              <FaEllipsisH />
            </span>
          </div>
          <span>신규발생</span>
          <span>
            {covidInfo && covidInfo ? `${covidInfo.gyeonggi.newCase}` : null}
          </span>
        </div>
      </section>
    </div>
  );
}

export default Covid;
