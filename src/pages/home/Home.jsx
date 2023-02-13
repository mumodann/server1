import React, { useState } from 'react'
import { useEffect } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import "./home.scss"
import axios from "axios";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect (()=>{
    const getRandomLists = async ()=>{
      try{
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : "" }`,
          {
            headers:{
              token: 
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGFkMGYxYTJjODFhOTRmMTI0ZTk1ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTY2NjM4NiwiZXhwIjoxNjc2MDk4Mzg2fQ.H0K0B8tyI5ST4B_uoUR9hStPgunYDhc29Ac77A-Me6A",
            },
          }
          );
          setLists(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
        < Navbar />
        <Featured  type={type} />
        {lists.map(list=>(
          <List list={list}/>
        ))}
     </div>
  );
};
export default Home;