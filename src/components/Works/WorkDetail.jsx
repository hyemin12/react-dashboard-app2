import { FaCode, FaEdge } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./workdetail.css";
import { useState } from "react";

function WorkDetail() {
  const { id } = useParams();
  const [isTab, setIsTab] = useState(true);
  const state = useSelector((state) => state.worksReducer);
  const index = state.findIndex((element) => element.id === id);
  const item = state[index];
  return (
    <>
      <div className="detail-wrapper">
        <div className="column">
          <img src={`../img/portfolio/${item.img}.png`} alt={item.title}></img>
        </div>
        <div className="column text-column">
          <h1>#{item.title}</h1>
          <h4>{item.filter}</h4>
          <p>{item.describtion}</p>
          <div className="skills-wrapper">
            <h4>About</h4>
            {item.skills.map((skill) => {
              return <p key={skill}>- {skill}</p>;
            })}
          </div>

          {item.code ? (
            <div className="link-group">
              <a href={item.code} target="_blank" rel="noreferrer">
                <FaCode />
                <span>소스 보기</span>
              </a>
              <a href={item.site} target="_blank" rel="noreferrer">
                <FaEdge />
                <span>사이트 바로가기</span>
              </a>
            </div>
          ) : null}
        </div>
        {item.img2 != null ? (
          <div className="img2">
            <img src={`../img/portfolio/${item.img2}.jpg`} alt={item.title} />
          </div>
        ) : null}
        {item.tab1 !== null ? (
          <div className="detail-tab-wrapper">
            <ul className="tab-title">
              <li
                onClick={() => {
                  setIsTab(true);
                }}
              >
                리디자인
              </li>
              <li
                onClick={() => {
                  setIsTab(false);
                }}
              >
                원사이트
              </li>
            </ul>
            <div className="tab-img">
              {isTab ? (
                <img src={`../img/portfolio/${item.tab}`} alt={item.title} />
              ) : (
                <img src={`../img/portfolio/${item.tab2}`} alt={item.title} />
              )}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default WorkDetail;
