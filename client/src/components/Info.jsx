import { personalInfo } from "../data";

const Info = () => {
  return (
    <>
      {personalInfo.map((item, index) => {
        return (
          <li style={{display: "flex"}} className="info_item" key={index}>
            <div style={{width: "30%"}}>
              <span className="info_title">{item.title}</span>
            </div>
            <div style={{width: "70%"}}>
              <span className="info_desc">{item.description}</span>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default Info;
