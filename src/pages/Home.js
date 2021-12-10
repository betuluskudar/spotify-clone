import React, { useState } from "react";
import { CircularProgress, Grid, Tooltip } from "@material-ui/core";

import {
  Home,
  Search,
  Library,
  Filter,
  BackArrow,
  NextArrow,
  Play,
  Arrow,
} from "../assets/icons";
import {
  CustomButton,
  SidebarItem,
  SidebarWrapper,
  Simplelink,
  MusicList,
  TopNav,
  PageWrapper,
  MusicCard,
  CustomIconButton,
} from "../assets/styled";
import { Paper, InputBase, Divider, IconButton, Button, } from "@material-ui/core";

import  MusicCardWidgets  from "../components/Widgets";

import imgbir from "../assets/img/imgbir.png";
import imgiki from "../assets/img/imgiki.png";
import imguc from "../assets/img/imguc.png";
import imgdort from "../assets/img/imgdort.png";
import imgbes from "../assets/img/imgbes.png";
import imgalti from "../assets/img/imgalti.png";
import imgyedi from "../assets/img/imgyedi.png";





function Dashboard() {
  const musicCard = [
    {
      id: 1,
      title: "4-2 Liste",
      subText: "Çalma Listesi Açıklaması",
      albumImg: imgbir,
    },
    {
      id: 2,
      title: "Arneo Tunes - Winter 2020",
      subText: "Çalma Listesi Açıklaması",
      albumImg: imgiki,
    },
    {
      id: 3,
      title: "deneme4 - 2",
      subText: "Çalma Listesi Açıklaması",
      albumImg: imguc,
    },
    {
      id: 4,
      title: "2019’un En İyileri",
      subText: "AdFab Open Space",
      albumImg: imgdort,
    },
    {
      id: 5,
      title: "Ed Banger Klasik",
      subText: "Çalma Listesi Açıklaması",
      albumImg: imgbes,
    },
    {
      id: 6,
      title: "2019’un En İyileri",
      subText: "AdFab Open Space",
      albumImg: imgalti,
    },
    {
      id: 7,
      title: "2019’un En İyileri",
      subText: "AdFab Open Space",
      albumImg: imgyedi,
    },
  ];

  return (
    <PageWrapper style={{ paddingLeft: 0, paddingTop: 0 }}>
      <TopNav>
        <div className="TopNavLeft">
          <div className="leftRight">
            <BackArrow />
            <NextArrow />
          </div>
          <Paper
            sx={{
              backgroundColor: "grey",
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              color: "grey",
            }}
          >
            <div className="playListSearch">
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <Search />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Ara"
                inputProps={{ "aria-label": "Ara" }}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </div>
          </Paper>
        </div>
        <div className="profileImage">
          <div className="imgBox">
            <img
              src="https://www.thispersondoesnotexist.com/image"
              alt="profile"
            />
          </div>
          <p>Arthur Guillermin Ha...</p>
        </div>
      </TopNav>
      <div class="FirstGrid">
        <div class="headerText">
            <h1>Yakında Çalanlar</h1>
            <CustomIconButton>
               <h5>Tümünü Gör</h5>
               <Arrow/>
            </CustomIconButton>
        </div>
        <Grid item lg={12} md={12} sm={12} xs={12} class="albumCard">
          {musicCard.map((item) => (
            <MusicCardWidgets musicData={item}></MusicCardWidgets>
          ))}
        </Grid>
      </div>
        <div class="SecondGrid">
          <div class="headerText">
            <h1>Tavsiye Edilenler</h1>
            <CustomIconButton>
               <h5>Tümünü Gör</h5>
               <Arrow/>
            </CustomIconButton>
          </div>
        <h2>Sevdiğin her şeyden biraz dinle.</h2>
        <Grid item lg={12} md={12} sm={12} xs={12} class="albumCard">
          {musicCard.map((item) => (
            <MusicCardWidgets musicData={item}></MusicCardWidgets>
          ))}
        </Grid>
      </div>
      <div class="FirstGrid">
        <div class="headerText">
            <h1>Yakında Çalanlar</h1>
            <CustomIconButton>
               <h5>Tümünü Gör</h5>
               <Arrow/>
            </CustomIconButton>
        </div>
        <Grid item lg={12} md={12} sm={12} xs={12} class="albumCard">
          {musicCard.map((item) => (
            <MusicCardWidgets musicData={item}></MusicCardWidgets>
          ))}
        </Grid>
      </div>
    </PageWrapper>
  );
}
export default Dashboard;
