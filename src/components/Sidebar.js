import React, { useState } from "react";
import { Home, Search, Library, Filter } from "../assets/icons";
import {
  CustomButton,
  SidebarItem,
  SidebarWrapper,
  Simplelink,
  MusicList,
} from "../assets/styled";
import {
  Paper,
  InputBase,
  Divider,
  IconButton,
  // MenuIcon,
  // SearchIcon,
  // DirectionsIcon,
} from "@material-ui/core";

// import PlaceholderImage from "../assets/img/Search";
import Logo from "../assets/img/logo.png";

function Sidebar() {
  const [auth] = useState(true);
  const [active, setActive] = useState(
    parseInt(localStorage.getItem("sidebarActive"), 10)
  );
  
  const [searchVal, setSearchVal] = useState("");

  const sideBarList = [
    { icon: <Home />, text: "Giriş", hash: "/" },
    // { icon: <Home />, text: '(auth && { icon: <Home />, text: 'Giriş', hash: '/MainHome' }),
    auth && { icon: <Search />, text: "Gözat", hash: "/Search" },
    auth && { icon: <Library />, text: "Kitaplık", hash: "/Library" },
  ].filter(Boolean);
  const location = (active - 1) * 50;

  const musicList = [
    { id: 1, name: "Rock Save the Queen" },
    { id: 2, name: "AdFab Open Space" },
    { id: 3, name: "Hareketli Müzik", id: 4, nameList: "Klasik Müzik Listem", },
    { id: 5, name: "Bandes Originales & Pop C" },
    { id: 6, name: "Shazamladıkların", id: 7, name: "2019 Favori Listesi" },
    { id: 8, name: "Rock Akustik" },
    { id: 9, name: "Pop çalma listesi", id: 10, name: "Radyo Favorilerin" },
    { id: 11, name: "Nova Like - Le Grand Mix" },
    { id: 1, name: "Rock Save the Queen" },
    { id: 2, name: "AdFab Open Space" },
    { id: 3, name: "Hareketli Müzik", id: 4, name: "Klasik Müzik Listem" },
    { id: 5, name: "Bandes Originales & Pop C" },
    { id: 6, name: "Shazamladıkların", id: 7, name: "2019 Favori Listesi" },
    { id: 8, name: "Rock Akustik" },
    { id: 9, name: "Pop çalma listesi", id: 10, name: "Radyo Favorilerin" },
    {
      id: 11,
      name: "Nova Like - Le Grand Mix",
      id: 12,
      name: "Radyo Favorilerin",
    },
    { id: 13, name: "Nova Like - Le Grand Mix" },
  ];

  return (
    <SidebarWrapper>
      <div className="LeftScroll">
        <div className="logo">
          <Simplelink to="/">
            <img src={Logo} alt="Spotify" />
          </Simplelink>
        </div>
        <div className="navigator">
          {sideBarList.map((item, i) => (
            <SidebarItem
              active={active === i + 1}
              to={item.hash}
              onClick={() => {
                setActive(i + 1);
                localStorage.setItem("sidebarActive", i + 1);
              }}
            >
              {item.icon}
              <span>{item.text}</span>
            </SidebarItem>
          ))}
          <div className="chosen" asd={active} style={{ top: location }} />
          <div className="playList">
            <h2>Çalma Listelerin</h2>
          </div>
          <Paper
          //sx={{ backgroundColor: 'grey', p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, color: 'grey'}}
          >
            <div className="playListSearch">
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <Search />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Ara"
                inputProps={{ "aria-label": "Ara" }}
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton sx={{ p: "10px" }} aria-label="directions">
                <Filter />
              </IconButton>
            </div>
          </Paper>
          <div className="musicList">
            {musicList
              .filter((item) =>
                searchVal === ""
                  ? item
                  : item.name
                      .toLowerCase()
                      .includes(searchVal.toLowerCase())
              )
              .map((item) => (
                <MusicList>
                  <span>{item.name}</span>
                </MusicList>
              ))}
          </div>
        </div>
      </div>
    </SidebarWrapper>
  );
}

export default Sidebar;
