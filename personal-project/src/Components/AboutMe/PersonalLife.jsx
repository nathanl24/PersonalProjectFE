import ExeterUni from "C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/ExeterUni.jpg";
import Dogs from "C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/Dogs.jpeg";


function PersonalLife() {
    return (
        <div>
            <br/>
            <h2>Personal Life</h2>
            <div>
                <br />
                <br />
                <h3>Day to day</h3>
                <p> I live in cardiff on a day to day basis with my girlfriend. Having moved here in the last
                    year and a half I get to experience the difference between a countryside life from Dorset
                    and a city life with pace and things constantly happening.
                </p>
                <img alt="Graduation photo with girlfriend" src={ExeterUni} style={{ width: '400px', height: 'auto', }} />
            </div>
            <div>
                <br/>
                <br/>
                <h3> Where I came from</h3>
                <p> Before Cardiff I have lived in a few different places being an army child. Around 13
                    different places in about 18 years. Luckily this settled around 15yrs old in Dorset
                    where I spent 8 years before leaving. I lived with my parents and three dogs who
                    thankfully I get to see reguarly as its only a few hours away.
                </p>
                <img alt="Three Shitzu dogs" src={Dogs} style={{ width: '400px', height: 'auto', }} />
            </div>
        </div>
    );
}
export default PersonalLife;