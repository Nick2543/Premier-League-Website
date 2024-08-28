import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoPL from '../../assets/images/PL.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "Welcome to the".split("");
    const jobArray = "Premier League Website!".split("");

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);

        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return(
      <>
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>
                <img src = {LogoPL} alt = "Premier League Website" />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={12} />
                </h1>
                <h2>Home of the Premier League stats regarding your favorite players and team!</h2>
                <Link to = "/teams" className = "flat-button">START EXPLORING!</Link>
            </div>
        </div>
        <Loader type = "ball-scale-ripple" />
      </>
    )
}

export default Home;