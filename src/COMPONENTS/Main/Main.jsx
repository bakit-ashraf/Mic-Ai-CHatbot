import { assets } from "../../assets/assets";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="nav">
        <p>Hi Bro</p>
        <img src={assets.react} alt="bro-image " />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, bro</span>
          </p>
          <p>How can i help you today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>suggest abeautifull placesc in hughada egypt</p>
            <img src={assets.react} alt="compass_icon" />
          </div>
          <div className="card">
            <p>why does it always happen , your illugen, what is illugne</p>
            <img src={assets.react} alt="bulb_icon" />
          </div>
          <div className="card">
            <p>i do not know the wright spelling of illugne</p>
            <img src={assets.react} alt="message_icon" />
          </div>
          <div className="card">
            <p>suggest abeautifull placesc in hughada egypt</p>
            <img src={assets.react} alt="code_icon" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="enter your prompt here" />
            <div>
              {/* <img src={assets.vite} alt="galary-icon" /> */}
              <h2>📸</h2>
              {/* <img src={assets.vite} alt="mic-icon" /> */}
              <h2>🎙️</h2>
              {/* <img src={assets.vite} alt="send-icon" /> */}
              <h2>🏹</h2>
            </div>
          </div>
          <p className="bottom-info">
            Mic chat may display inacurate info, so double-check the chat
            response ...
          </p>
        </div>
      </div>
    </div>
  );
}
export default Main;
