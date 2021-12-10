import React from 'react';

import { FooterArea } from '../assets/styled';

import {
  Like,
  CreditCard,
  PriSong,
  NextSong,
  SongPlay,
} from '../assets/icons';

import {
  Grid,
} from '@material-ui/core';

import MiniCover from "../assets/img/minicover.png";

function Footer() {

  

  return (
    <FooterArea>
      <Grid container spacing={12} class="mainContainer">
          <Grid item lg={3} md={12} sm={12} xs={12} class="leftSide">
              <img src={MiniCover} alt="MiniAlbum" />
              <div className="songName">
                <h5> One step Beyond</h5>
                <p> Madness </p>
              </div>
              <div className="likeicon">
                <Like/>
                <CreditCard/>
              </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}class="upIcon">
              <div class="statuicon">
                <PriSong/>
                <SongPlay/>
                <NextSong/>
              </div>
              <Grid item lg={6} md={6} sm={6} xs={12}class="statu">
              </Grid>
          </Grid>
          <Grid item lg={2} md={12} sm={12} xs={12}>
          </Grid>
        </Grid>  
    </FooterArea>
  );
}

export default Footer;
