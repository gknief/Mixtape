import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import Players from "../Players";
import Rappers from "../Rappers";
import PlayersRappers from "../PlayersRappers"

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
        }
      }
    render() {
      return (
        <div className="home-container">
          <img className="logo" src="../images/logo.png" />
          <h2 className="slogan">Your favorite ballers paired with your favorite beats.</h2>
          <Link to='/PlayersRappers'><button className='get-started'>GET STARTED</button></Link>
          <div className="mission-statement-container">
          <div className="home-image-container">
          <img src="../images/lebron.png" className="lebron" />
          <img src="../images/drake.png" className="drake" />
          </div>
          <article className="mission-statement">I have always loved listening to hip-hop music and watching highlights of my favorite basketball players. But I wanted to be able to do both at the same time without YouTube pausing my music. With Mixtape, you can watch highlights of any player while listening to any song you want.</article>
          <h3> - Grant Knief, founder of Mixtape</h3>
          </div>
            {/* <button className='players-button'><Link to='/players'>Players</Link></button>
            <button className='rappers-button'><Link to='/rappers'>Rappers</Link></button> */}
        
        </div>
      )
    }
  }
  