import RugbyTeam from "C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/RugbyTeam.jpg";
import { useNavigate, } from "react-router-dom";
import Principality from "C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/Principality.jpg";

function Rugby() {
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <img alt="Dinas Powys Squad Photo" src={RugbyTeam} style={{ border: '2px solid #00000', width: '100%', maxHeight: '600px', objectFit: 'cover' }} />
      <div>
        <h1>Rugby</h1>
        <p>Rugby is my main hobby in my spare time. I have played football for most of my life but since moving
          to Wales, more specifically Cardiff I have had encouragement to start playing. Since taking it up in
          october with a team called Dinas Powys I have had great oppurtunities to learn the game, play in
          friendlies and have socials. From the start I was happy to play the first season in the
          seconds/ reserves team. After a few games I was taken with the firsts for a trail. From there I have
          been able to kick on and be a name in and around the firsts teamsheet for the rest of the season and
          after an impressive club and personal season I have been able to be part of a squad that has won the league currently
          unbeaten. Aswell as the great oppurtunity to be included in the squad on our cup final trip
          which was played at the principality/ millenium stadium. A massive moment for me as my boyhood
          football club won their current only major trophy in the same stadium being the 2004 Carling cup for Middlesbrough.
          Off the back of this I am now competing to be involved in another cup final at Cardiff Arms Park</p>

        <div>
          <h3>Use the Score tracker below to keep a track of games</h3>
          <button className="btn btn-primary" onClick={() => {
            navigate("/DisplayScoreboard");
          }}>Score Tracker</button>
        </div>
        <br />
        <img
          src={Principality}
          alt="Image 2"
          style={{
            width: '400px', // Set the width of the second image
            height: 'auto', // Maintain aspect ratio
          }}
        />
      </div>
    </div>
  );
}
export default Rugby;