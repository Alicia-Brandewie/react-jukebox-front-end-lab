const TrackList = (props) => {
    // console.log(props);

    return (
        <section>
            <div>
                <h1>Track List</h1>
                {!props.tracks.length ? (
                    <h2>No Tracks Yet!</h2>
                ) : (
                    <ul>
                        {props.tracks.map((track) => (
                            <li key={track._id}>{track.title}

                                <button
                                onClick={() => props.handleSelectPlay(track)}
                                >▶ Play</button>

                                <button 
                                // onClick={() => props.handleFormView(track._id)}
                                onClick={() => props.handleSelect(track)}
                                >Edit Track</button>

                                <button
                                onClick={() =>props.handleDeleteTrack(track._id)}>
                                Delete Track</button>

                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>

    );

}

export default TrackList;

