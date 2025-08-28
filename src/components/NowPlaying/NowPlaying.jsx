import { useState } from "react";

const NowPlaying = (props) => {
    
    console.log(props.playing)
    return (
        <>
       <h2>Now Playing ▶</h2>
       <h3>Title {props.playing.title}</h3>
</>
    )
    
};


export default NowPlaying;
