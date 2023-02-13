import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import "./listItem.scss";
import axios from 'axios';

export default function ListItem({index, item}) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});


  useEffect(()=>{
    const getMovie = async()=>{
      try{
        const res = await axios.get("/movies/find/" + item, {
          headers:{
            token: 
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGFkMGYxYTJjODFhOTRmMTI0ZTk1ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTY2NjM4NiwiZXhwIjoxNjc2MDk4Mzg2fQ.H0K0B8tyI5ST4B_uoUR9hStPgunYDhc29Ac77A-Me6A",
          },
        });
        setMovie(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getMovie()
  }, [item]);

  return (
    <div className="listItem"
    style={{left: isHovered && index * 225 -50 + index * 2.5}}
    onMouseEnter = {() => setIsHovered(true)} 
    onMouseLeave = {() => setIsHovered(false)}
    >
        <img src={movie.img} 
        alt="" />
        {isHovered && (
          <>
          
          <div className="itemInfo">
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div></>
        )}
    </div>
  )
}
