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
            <h1>Professional Profile</h1>
            <p>
                Currently undertaking a reskilling/ bootcamp oppurtunity to learn how to operate as a full stack engineer.
                Built foundation of knowledge across front and back end development. Started my journey by learning a variety
                of GitHub, Git Bash, CSS, HTML, Javascript, ReactJs, Java, Springboot, SQL alongside other features and applications.
            </p>
            <h1>Career Ambitions</h1>
            <p>
                Short term my plan is to absorb and develop my knowledgeas much as possible whilst still undertaking my
                reskilling oppurtunity. Within the near future I would be looking to secure a tech based role where I can
                use my learning and actively implement this into a working environment. Being able to make a positive contirbution
                and learning the workplace infrastructure.
                <br />
                <br />
                Long term I am looking to become profficient in a range of different skills and applications used within software
                engineering. I would want to be pushing myself to becoming a mentor or team lead to be able to support other engineers
                and to be able to provide a more positive impact within a workplace.
            </p>
            <br />
            <br />
            <br />
            <br />
            <h1>What do I do!</h1>

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