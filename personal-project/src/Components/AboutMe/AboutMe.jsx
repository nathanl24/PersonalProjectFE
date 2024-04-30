import LloydsLogo from "C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/LloydsLogo.png";
import RugbySolo from "C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/RugbySolo.jpg";
import Camden from "C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/Camden.jpg";
import { useNavigate, } from "react-router-dom";

function AboutMe() {
    const navigate = useNavigate();
    return (
        <div>
            <br />
            <br />
            <h3>What do I do!</h3>
            <br />
            <div id="itemCard" className="Cards" >
                <div class="card border-dark mb-3" style={{ width: "17%" }}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Work Life </li>
                        <li class="list-group-item"><a href="https://www.lloydsbank.com/" target="_blank"><img alt='Lloyds Logo' src={LloydsLogo} className="item-image" /></a></li>
                    </ul>
                    <br />
                    <br />
                    <br />
                    <br />
                    <button className="btn btn-primary" onClick={() => {
                        navigate("/WorkLife");
                    }}>Find out more</button>
                </div>
            </div>

            <div id="itemCard" className="Cards">
                <div class="card border-dark mb-3" style={{ width: "17%" }}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Personal Life </li>
                        <li class="list-group-item"><img alt='Picture with Girlfriend' src={Camden} className="item-image" />  </li>
                        <br />
                        <br />
                        <br />
                        <br />
                    </ul>
                    <button className="btn btn-primary" onClick={() => {
                        navigate("/PersonalLife");
                    }}>Find out more</button>
                </div>
            </div>

            <div id="itemCard" className="Cards" style={{ padding: "20px" }}>
                <div class="card border-dark mb-3" style={{ width: "17%" }}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Rugby </li>
                        <li class="list-group-item"> <a href="https://dinaspowys.rfc.wales/" target="_blank"><img alt='Rugby Solo Picture' src={RugbySolo} className="item-image"/> </a> </li>
                    </ul>
                    <button className="btn btn-primary" onClick={() => {
                        navigate("/Rugby");
                    }}>Find out more</button>
                </div>
            </div>

        </div >

    );
}

export default AboutMe;