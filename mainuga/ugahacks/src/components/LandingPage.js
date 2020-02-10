import React, { Component } from 'react';
import { Button,Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return(
      <div style ={{width: '100%', margin:'auto'}}>
        <Grid className = "landing-grid">
          <Cell col = {12}>
          <img
             src="https://cdn.freebiesupply.com/images/large/2x/nba-logo-transparent.png"
             alt="avatar"
             className="avatar-img"
             />

           <div className="banner-text">
             <h1>Game Hype</h1>



         <Button raised>
          <Link to="/project">Project</Link>
         </Button>


           </div>
           </Cell>
        </Grid>
      </div>
    )

  }
} export default Landing;
