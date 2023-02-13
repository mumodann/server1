import { InfoOutlined, PlayArrow } from "@material-ui/icons";

import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Cast"}</span>
                <select name="genre" id="genre">
                    <option>Cast Crew</option>
                    <option value="adventure">Aisha</option>
                    <option value="comedy">Cynthia Nyokai</option>
                    <option value="crime">Jonte</option>
                    <option value="fantasy">CHarlie Chieng</option>
                    <option value="historical">Njeri</option>
                    <option value="horror">Mr.Tonga</option>
                    <option value="romance">Mrs. Tonga</option>
                    <option value="sci-fi">Dc  Chieng</option>
                    <option value="thriller">Mrs Chieng</option>
                    <option value="western">Mrs. Njogu</option>
                    <option value="animation">Otis</option>
                    <option value="drama">Alphonse</option>
                    <option value="documentary">Christine</option>

                </select>
            </div>
        )};
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgl0r7-jm1Y3IMdrYI-DJdGxS_NxuvrlSMEVXE925b6o9_Yuv72TeF01lBTv2JO2bJBrCEBuCBrdX-QW2a4lcW4SmAdrQI2iJrpYx3RTF_1dXlCLpQd2JHWBAmuFBxbwZ0Bi9c0d0dMFDmDAA43ejuxQb52CDWiHr9fd6rJF1jW2Ph5-BdsVNfcLn9FRw/s1600/IMG-20230129-WA0000.jpg" alt="" 
        />
        <div className="info">

            <span className="desc">
                Kienyeji tells the love story between Cynthia Njambi and Charles Chieng, students from two of Kenya's opposing tribes.<br/>
                This against their parents wishes, <b>will their love win or not...</b>
            </span>

            <div className="buttons">
                <button className="play" >
                    <PlayArrow />
                    <span>Watch Trailer</span>
                </button>
            </div>

        </div>

    </div>
  )
}
