// import "./";
import "./sidebare.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const SideBare = () => {
  const [extended, setextended] = useState(false);
  function ToggleExtended() {
    setextended((perv) => !perv);
  }
  return (
    <div className="sidebare">
      <div className="top">
        {/* <img
          
          src={assets.hero}
          alt="menu"
          
        /> */}
        <h1 className="HHH" onClick={ToggleExtended}>
          //
        </h1>
        <div className="new-chat">
          <h1>+</h1>
          {extended ? (
            <p className={extended ? "hiverIcon" : null}>New chat</p>
          ) : null}
        </div>
        <div className="recent">
          {extended ? (
            <>
              <p className="recent-title">Recent</p>
              <div className="recent-entry">
                <img src={assets.react} alt="" />
                <p>what is react ...</p>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.react} alt="" />
          {extended ? <p>Help </p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.react} alt="histpry" />
          {extended ? <p>history </p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.react} alt="" />
          {extended ? <p>settings </p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBare;
