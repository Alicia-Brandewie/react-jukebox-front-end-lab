const NowPlaying = (props) => {
    return (
        <>
            <h2>Now Playing ▶</h2>
            <h3>Title {props.playing.title}</h3>
        </>
    )
};

export default NowPlaying;
