import { data } from "../store/data";
import "../components/About/about.css";
import MbitiChart from "../components/About/MbtiChart";
function About() {
  const education = data.education;
  const certificate = data.certificate;
  const skill = data.skill;
  const hobby = data.hobby;
  return (
    <div className="about">
      <div className="about-wrapper">
        <ul>
          {/* <li>
            <h4>Profile</h4>
            <p>고혜민 / KO HYEMIN</p>
            <p>010-2053-8583</p>
            <p>khnm31@naver.com</p>
          </li> */}
          <li>
            <h4>Education</h4>
            <ul>
              {education.map((item) => {
                return (
                  <li className="education content" key={item.text}>
                    <span>{item.date}</span>
                    <p>
                      {item.text}
                      {item.text2 !== null ? <span>{item.text2}</span> : null}
                    </p>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <h4>Certificate</h4>
            <ul>
              {certificate.map((item) => {
                return (
                  <li className="content" key={item.text}>
                    <span>{item.date}</span>
                    <p>{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="skill">
            <h4>Hobby</h4>
            <ul style={{ justifyContent: "space-between" }}>
              {hobby.map((item) => {
                return (
                  <li key={item.text}>
                    <img src={item.icon} alt={item.text} />
                    <p>{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <ul>
          <li className="skill">
            <h4>Skill &#38; Tools</h4>
            <ul>
              {skill.map((item) => {
                return (
                  <li key={item.text}>
                    <img src={item.icon} alt={item.text} />
                    <p>{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <h4>Person</h4>
            <MbitiChart />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default About;
