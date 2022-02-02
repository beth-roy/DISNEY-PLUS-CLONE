import React,{useEffect} from 'react';
import styled from 'styled-components'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies'
import db from '../firebase';

function Home() {

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot)=>{
            let tempMovies =snapshot.docs.map((doc)=>{
                return{id: doc.id, ...doc.data()}
            })
            console.log(tempMovies)
        })
    },[])
  return <Container>
      <ImgSlider/>
      <Viewers />
      <Movies/>
  </Container>;
}

export default Home;
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 75px);
  overflow-x: hidden;
  display: block;
  top:72px
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
