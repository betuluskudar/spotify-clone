import {
  Button, IconButton, TextField,
} from '@material-ui/core';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from './statics';
import { hexToRgbA } from '../commons/utils';

export const CustomIconButton = styled(IconButton)`
  h5 {
    font-size: 14px;
    color: ${Colors.White};
    margin: 5px;
  }
  svg {
    color: ${Colors.White}
     
  }
  &:hover {
   * {
      color: ${Colors.green}
    }
    svg path{
      fill:${Colors.green}
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    /* overflow: overlay; */
  }
  * {
    outline: none!important;
    margin: 0;
    padding: 0;
    font-family: 'Mulish', sans-serif;
    /* font-family: 'Inter', sans-serif; */
    box-sizing: border-box;
    font-weight: normal;
    line-height: 1;
  }
  a, a:hover {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  img {
    width: 100%;
  }
  svg {
    /* min-width: fit-content;
    width: intrinsic;           /* Safari/WebKit uses a non-standard name */
    /* min-width: -moz-fit-content;    Firefox/Gecko */
    /* min-width: -webkit-fit-content; Chrome */
  }
  ::-webkit-scrollbar{
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb{
    background: ${Colors.greyBorder};
    border-radius: 0px;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: ${Colors.gold};
  }
  ::-webkit-scrollbar-track{
    background:  ${Colors.lightGrey};
    border-radius: 10px;
    box-shadow: inset 0px 0px 0px 0px  ${Colors.lightGrey};
  }
  .MuiOutlinedInput-root {
    border-radius: 0px;
  }
  .MuiPickersDay-daySelected {
    color: ${Colors.dark};
    font-weight: 500;
    background-color: ${Colors.yellow};
    :hover {
      background-color: ${Colors.gold};
    }
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline { // input border
    border-color: ${Colors.gold};
    border-radius: 8px;
  }
  .MuiOutlinedInput-notchedOutline {
    border-radius: 8px;
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${Colors.brown};
  }
  .MuiInput-underline:after, .MuiInput-underline.Mui-focused:after {
    border-color: ${Colors.gold};
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-color: ${Colors.dark};
  }
  #greyThemeSelect {
    &.MuiSelect-outlined.MuiSelect-outlined {
      color: ${Colors.grey};
      padding: 10px 30px 10px 10px;
    }
  }
  #mobileMoreMenu {
    * {
      color: ${Colors.blueBlack2};
    }
    li.MuiButtonBase-root.MuiListItem-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiListItem-gutters.MuiListItem-button {
      color: ${Colors.lightBlack};
      font-weight: 600;
      opacity: 1;
      &.Mui-disabled {
        color: ${Colors.dark};
        opacity: 0.6;
      }
    }
  }
  #tableButton {
    display: flex;
    height: 45px;
    width: 43px; // temp
    > * {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      /* z-index: 1; */
      /* width: 24px; */
      width: inherit;
      /* height: 30px; */
      /* height: inherit; */
      height: 55px;
      right: 1px;
      background-color: ${Colors.white};
      border-left: 1px solid ${Colors.lightGrey};
      /* border-bottom: 1px solid ${Colors.lightGrey}; */
      border-radius: 0;
      transform: translate(0, -5px);
    }
  }
  .MuiRadio-colorSecondary.Mui-checked {
    color: ${Colors.dark};
  }
  .MuiCheckbox-colorSecondary.Mui-checked {
    color: ${Colors.dark};
  }
  span.MuiTypography-root.MuiFormControlLabel-label {
    user-select: none;
  }
`;

export const MainWrapper = styled.div`
  
    overflow: auto;
    background-color: ${Colors.background};
  /* flex: 1; */
  width: ${props => (props.activeUser ? (!props.sidebarStatu ? 'calc(100% - 200px)' : 'calc(100% - 55px)') : '100%')};
  max-width: ${props => (props.activeUser ? (!props.sidebarStatu ? 'calc(100% - 200px)' : 'calc(100% - 55px)') : '100%')};
  margin-left: auto;
  transition: all 0.5s ease;
  /* float: left; */
  /* @media (max-width: 1500px) {
    width: calc(100% - 60px);
  } */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const MusicList = styled(Link)`
  display: flex;
  align-items: left;
  overflow: auto;
   span {
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
    // padding-left: 15px;
    color: ${Colors.White};
    opacity: 0.6;
    padding-bottom: 15px;
 }
`;

export const SidebarItem = styled(Link)`
  display: flex;
  top: 0;
  align-items: center;
  height: 40px;
  margin-bottom: 10px;
  user-select: none;
  width: 100%;
  // padding: 23px 30px;
  span {
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
    padding-left: 15px;
    color: ${Colors.White};
    opacity: 0.5;
    transition: all 0.5s ease;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  svg {
    /* margin-right: 15px; */
    path {
      fill: ${Colors.white};
    }
  }
  ${props => props.active && `
    span {
      opacity: 1;
      color: ${Colors.white};
    }
    svg path {
      fill: ${Colors.white};
    }
  `}
`;

export const SidebarWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  min-width: ${props => (props.open ? 55 : 250)}px;
  max-width: ${props => (props.open ? 55 : 250)}px;
  height: 100vh;
  z-index: 9;
  // background-color: ${Colors.SpaceGrey};
  transition: all 0.5s ease;

  .MuiPaper-elevation1 {
    color: ${Colors.grey};
    background-color: ${Colors.grey};
    border-radius: 30px;
    margin-bottom: 15px;
    .playListSearch {
    color: ${Colors.grey};
    display: flex;
    align-items: center;   
    } 
    .MuiInputBase-input {
      color: ${Colors.White};
    }
  }
  .LeftScroll {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    width: ${props => (props.open ? 55 : 250)}px;
    padding: 40px 25px 40px 25px;
    height: 100vh;
    transition: all 0.5s ease;
    background-color: ${Colors.SpaceGrey};
    overflow: hidden;
    .logo {
      width: 100%;
      text-align: left;
      /* display: ${props => (props.open && 'none')}; */
      margin-bottom: 40px;
      padding-top: 10px;
      img {
        /* width: 80%; */
        /* height: 65px; */
       // padding: 5px;
      }
    }
    .navigator {   
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      flex: 1;
      position: relative;
      .sidebarActive {
        color: ${Colors.white};
        opacity: 1;
      }
      .playList {
        overflow: auto;
        padding-top: 80px;
        padding-bottom:15px;
        h2 {
          color: ${Colors.White};
          opacity: 0.6;
          text-transform: uppercase; 
          font-size: 12px;
          font-weight: 400;
          align-items: left;
        }
      }
      .chosen {
        position: absolute;
        background-color: ${Colors.green};
        //box-shadow: 0px 10px 30px rgb(244 67 54 / 15%);
        transition: all 0.5s ease 0s;
        left: -25px;
        width: 5px;
        height: 40px;
        z-index: -1;
      }
      .musicList {
        display: block;
        height: 400px;
        overflow: auto;
        flex-direction: column;
      }
    }
    }
    .newSuggestion {
      padding-bottom: 50px;
      * {
        transition: all 0.5s ease;
      }
    }
    .footer {
      height: 95px;
      p {
        font-size: 12px;
        line-height: 15px;
        color: ${Colors.grey};
        padding-bottom: 10px;
        white-space: nowrap;
        transition: all 0.5s ease;
        :last-of-type {
          padding-bottom: 0;
          padding-top: 30px;
        }
      }
    }
  }
  /* @media (max-width : 1499px) {
    min-width: 60px;
    max-width: 60px;
  } */
  @media (max-width : 768px) {
    min-width: 0px;
    max-width: 0px;
    .leftFixed {
      width: ${props => (props.open ? 0 : 200)}px;
      padding: ${props => (props.open ? 0 : '10px 20px 50px')}!important;
      .logo {
        margin-bottom: 0px;
        padding-top: 0px;
      }
    }
  }
  ${props => (props.open && `
    ${SidebarItem} {
      span {
        display: none;
        font-size: 0;
        padding-left: 0px;
        color: $ {Colors.white}
      }
    }
    .leftFixed {
      padding: 10px 15px 50px;
      .logo {
        img {
          // width: 100%;
          position: absolute;
          transform: translate(-50%, 0%);
          width: 44px;
          height: 44px;
        }
      }
      .navigator {
        .chosen {
          left: -15px;
        }
      }
      .footer {
        p {
          font-size: 0;
          overflow: hidden;
        }
        svg {
          min-width: 0;
          width: 0;
        }
      }
    }
    .newSuggestion {
      max-width: 30px;
      button {
        padding: 10px 0;
        max-width: 26px;
        min-width: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          margin: 0;
          padding: 0;
        }
      }
    }
  `)}
`;
export const CustomButton = styled(Button)`
  background-color: ${Colors.blue};
  color: ${Colors.white};
  text-transform: none;
  padding: 10px 30px;
  height: 35px;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 6px;
  :hover {
    background-color: ${props => (props.light ? Colors.blueLight : props.white ? Colors.White : hexToRgbA(Colors.blue, 0.7))};
    color: ${props => (props.light ? Colors.blue : Colors.white)};
  }
  ${(props => props.disabled && `
    .MuiButton-label {
      color: ${Colors.white};
    }
  `)}
  ${(props => props.simple && `
    background-color: transparent;
    color: ${Colors.lightBlack};
    :hover {
      background-color: transparent;
      color: ${Colors.lightBlack};
    }
  `)}
  ${(props => props.lined && `
    background-color: transparent;
    color: ${Colors.lightBlack};
    border: 1px solid ${Colors.lightBlack};
    :hover {
      background-color: transparent;
      color: ${Colors.lightBlack};
    }
  `)}
  ${(props => props.lightBlack && `
    background-color: ${hexToRgbA(Colors.lightBlack, 0.9)};
    color: ${Colors.white};
    // font-size: 18px;
    // line-height: 20px;
    :hover {
      background-color: ${Colors.lightBlack};
      color: ${Colors.white};
    }
  `)}
  ${(props => props.dark && `
    background-color: ${hexToRgbA(Colors.dark, 0.9)};
    color: ${Colors.white};
    // font-size: 18px;
    // line-height: 20px;
    :hover {
      background-color: ${Colors.dark};
      color: ${Colors.white};
    }
  `)}
  ${(props => props.lightBlue && `
    background-color: ${hexToRgbA(Colors.blueLight, 0.5)};
    color: ${Colors.blue};
    :hover {
      background-color: ${Colors.blueLight};
      color: ${Colors.blue};
    }
  `)}
   ${(props => props.darkGrey && `
    background-color: ${hexToRgbA(Colors.grey, 1)};
    color: ${Colors.white};
    :hover {
      background-color: ${Colors.lightBlack};
      color: ${Colors.white};
    }
  `)}
  ${(props => props.green && `
    background-color: ${Colors.green};
    color: ${Colors.lightBlack};
    :hover {
      background-color: ${Colors.green};
      color: ${Colors.lightBlack};
    }
  `)}
  ${(props => props.orange && `
    background-color: ${Colors.lightOrange};
    color: ${Colors.lightBlack};
    :hover {
      background-color: ${Colors.lightOrange};
      color: ${Colors.lightBlack};
    }
  `)}
  ${(props => props.red && `
    background-color: ${Colors.burgundy};
    color: ${Colors.white};
    :hover {
      background-color: ${Colors.burgundy};
      color: ${Colors.white};
    }
  `)}
  ${(props => props.grey && `
    background-color: ${Colors.lightGrey};
    color: ${Colors.lightBlack};
    &.MuiButton-root.Mui-disabled {
      color: ${hexToRgbA(Colors.lightBlack, 0.8)};
    }
    :hover {
      background-color: ${Colors.lightGrey};
      color: ${Colors.lightBlack};
    }
  `)}
  ${(props => props.semiLightGrey && `
    background-color: ${hexToRgbA(Colors.semiLightGrey, 0.1)};
    color: ${Colors.lightBlack};
    :hover {
      background-color: ${Colors.lightGrey};
      color: ${Colors.lightBlack};
    }
  `)}
  ${(props => props.pink && `
    background-color: ${hexToRgbA(Colors.pink, 0.5)};
    color: ${Colors.burgundy};
    :hover {
      background-color: ${hexToRgbA(Colors.pink, 0.5)};
      color: ${Colors.burgundy};
    }
  `)}
  ${(props => props.white && `
    background-color: ${Colors.white};
    color: ${Colors.lightBlack};
    border: 1px solid ${Colors.lightBlack};
    :hover {
      background-color: ${Colors.white};
      color: ${Colors.lightBlack};
    }
  `)}
  ${(props => props.yellow && `
    background-color: ${Colors.yellow};
    color: ${Colors.lightBlack};
    :hover {
      background-color: ${Colors.yellow};
      color: ${Colors.lightBlack};
    }
  `)}
  ${(props => props.trans && `
    background: #294262;
    border-radius: 18px;
  `)}
  ${(props => props.large && `
    height: unset;
    padding: 20px 40px;
    border-radius: 14px;
  `)}
`;


export const CustomFileText = styled(TextField)`
  ${props => props.disabled && `
    .MuiOutlinedInput-notchedOutline {
      border-color: rgba(184, 200, 219, .6);
      border-width: 1px;
      border-style: solid;
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: rgba(184, 200, 219, .6);
    }
    .MuiOutlinedInput-root.Mui-focused, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: rgba(184, 200, 219, .6);
    }
    .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
      border-color: rgba(184, 200, 219, .6);
    }
  `}
`;


export const Simplelink = styled(Link)`
  display: inline-block;
  color: ${Colors.white};
  transition: all 0.3s ease;
  user-select: none;
  font-weight: 600;
  :hover {
    color: ${Colors.dark};
  }
`;

export const TopNav = styled (Link)`
 display: flex;
 color: ${Colors.white};
 width: 100%;
 padding: 30px 30px;
 justify-content: space-between;

 .profileImage {
   display: flex;
   align-items: center;
   background-color: ${Colors.grey};
   border-radius: 20px;
   padding: 5px 10px;
   img {
     height: 24px;
     border-radius: 10px; 
     align-items: center;
    }
    p {
      font-size: 14px;
      align: left;
      color: ${Colors.White};
      padding-left: 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

    }
   
 }

 .leftRight {
   svg{
    margin-inline-end: 10px;
   }
 }
 .TopNavLeft {
  display: flex;
  align-items: center;
 }
 .MuiPaper-elevation1 {
    color: ${Colors.grey};
    background-color: ${Colors.grey};
    border-radius: 30px;
    margin-left: 30px;
    .playListSearch {
    color: ${Colors.grey};
    display: flex;
    align-items: center;   
    } 
    .MuiInputBase-input {
      color: ${Colors.White};
    }
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  padding: 30px 30px;
 .FirstGrid {
  width: 100%;
  display: grid;
  padding: 30px 30px;
  overflow: auto;
  .headerText {
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
   h1 {
     font-size: 28px;
     font-weight: 700;
      align: left;
      color: ${Colors.White};
      padding: 0 0 25px 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
   }
   .albumCard {
     display: flex;
     justify-content: space-between;
     overflow: auto;

   }
 }
 .SecondGrid {
  width: 100%;
  display: grid;
  padding: 30px 30px;
  overflow: auto !important;
  .headerText {
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
   h1 {
      font-size: 28px;
      font-weight: 700;
      align: left;
      color: ${Colors.White};
      padding: 0 0 10px 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
   }
    h2 {
      font-size: 14px;
      font-weight: 500;
      align: left;
      color: ${Colors.White};
      padding: 0 0 25px 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      opacity: 0.6;
   }
   .albumCard {
     display: flex;
     justify-content: space-between;
     overflow: auto;

   }

 }
`;

export const MusicCard = styled.div`
  // width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Colors.grey};
  border-radius: 10px;
  padding: 15px 15px;
  position: relative;
  margin: 8px;
  width: max-content;
  :hover {
    .playIcon {
      visibility: visible;
      opacity: 1;
      right: 15px;
      bottom: 15px;
    }
  }

  img {
    width: 100%;

  }
  h5{
    color: ${Colors.White};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    font-weight: 500;
    padding-top: 15px;

  }
  p{
    color: ${Colors.White};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;
    opacity: 0.6;
    padding: 5px 0 15px 0;
  }
  .playIcon {
    background-color: ${Colors.green};
    border-radius: 30px;
    width: fit-content;
    padding: 15px;
    position: absolute;
    display: grid;
    bottom: 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
    transition: all 0.5s ease;
    visibility: hidden;
    right: -5px;
    opacity: 0;
  }
`;  


export const FooterArea = styled.div` 
  position: fixed;
  display: column;
  background-color: ${Colors.grey};
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 100px;
  overflow: hidden;
  .mainContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-between;
  }

  .leftSide {
    display: flex;
    align-items: center;
    height: 100px;
  
  }
  .upIcon {
    display: grid;
    align-items: center;
    justify-content: center;
    .statu {
      background-color: ${Colors.White};
      border-radius: 10px;
      width: 496px;
      height: 6px;
      z-index: 1;
      margin-bottom: 20px;
    }
    .statuicon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .likeicon {
    display: flex;
  }
  svg {
    margin-right: 10px;
  }
  img {
    width: 100%;
    padding-right: 15px;
    padding: 0 15px 0 25px;
  }
 .songName {
   align-items: center;
    h5{
      color: ${Colors.White};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 14px;
      font-weight: 500;
      padding-right: 25px;

    }
    p{
      color: ${Colors.White};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 12px;
      opacity: 0.6;
      padding: 5px 0 15px 0;
  }
}
`;