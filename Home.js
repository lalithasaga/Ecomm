import React from 'react';
import './Home.css';



const Home = () => {
  return (

    <div className="home">
        <div className="box-container">
      <div className="box">
        <p>Get our Latest Album</p>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M8 5v14l11-7z" />
        </svg>
        </div>
       </div>
   
      <h2 className="home__heading">TOURS</h2>
      <table className="home__tour-table">
        <tbody>
          <tr className="home__tour-row">
            <td>JUL 16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td><a href="#">BUY TICKETS</a></td>
          </tr>
          <tr className="home__tour-row">
            <td>JUL 19</td>
            <td>TORONTO, ON</td>
            <td>BUDWEISER STAGE</td>
            <td><a href="#">BUY TICKETS</a></td>
          </tr>
          <tr className="home__tour-row">
            <td>JUL 22</td>
            <td>BRISTOW, VA</td>
            <td>JIFFY LUBE LIVE</td>
            <td><a href="#">BUY TICKETS</a></td>
          </tr>
          <tr className="home__tour-row">
            <td>JUL 29</td>
            <td>PHOENIX, AZ</td>
            <td>AK-CHIN PAVILION</td>
            <td><a href="#">BUY TICKETS</a></td>
          </tr>
          <tr className="home__tour-row">
            <td>AUG 2</td>
            <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <td><a href="#">BUY TICKETS</a></td>
          </tr>
          <tr className="home__tour-row">
            <td>AUG 7</td>
            <td>CONCORD, CA</td>
            <td>CONCORD PAVILION</td>
            <td><a href="#">BUY TICKETS</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
