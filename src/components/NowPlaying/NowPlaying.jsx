import { useState } from "react";

const NowPlaying = (props) => {
    
    return (
        <>
       <h1>Now Playing:</h1>
       <p>{props.playing}</p>
</>
    )
    
};


export default NowPlaying;
