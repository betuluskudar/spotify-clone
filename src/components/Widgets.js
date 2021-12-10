import React from 'react';
import {
    MusicCard,
} from '../assets/styled';
import {
  Play,
} from "../assets/icons";

function MusicCardWidgets(props) {
 const {musicData}=props
 console.log(musicData)
  return (
    <div style={{ height: '100%'}}>
            <MusicCard theme={props.theme}>
                <div>
                        {
                          musicData && musicData.albumImg && (
                            <div className="imgBox">
                              <img src={musicData.albumImg} alt={musicData.name} />
                            </div>
                          )
                        } 
                    <h5>{musicData.title}</h5>
                    <p>{musicData.subText}</p>
                </div>
            <div className="playIcon">  
                <Play /> 
            </div>
            </MusicCard>
  </div>
  );
}

export default MusicCardWidgets;
