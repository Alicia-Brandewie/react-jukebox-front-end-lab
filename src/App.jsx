import { useState, useEffect } from 'react';
import * as trackService from './services/trackService';

import TrackList from './components/TrackList/TrackList';
import TrackForm from './components/TrackForm/TrackForm';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await trackService.index();
        if (fetchedTracks.err) {
          throw new Error(fetchedTracks.err);
        }
        setTracks(fetchedTracks);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTracks();
  }, []);

  const handleSelect = (track) => {
    setSelected(track);
    setIsFormOpen(false);
  };
  /////// add to create/Edit form

  const handleFormView = (track) => {
    if (!track._id) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };
  ///not happy about the null in the browser...

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData);
      setTracks([newTrack, ...tracks]);
      setIsFormOpen(false);
      console.log(newTrack);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateTrack = async (formData, trackId) => {
    try {
      const updatedTrack = await trackService.update(formData, trackId);
      if (updatedTrack.err) {
        throw new Error(updatedTrack.err);
      }

      const updatedTrackList = tracks.map((track) => (
        track._id !== updatedTrack._id ? track : updatedTrack
      ));
      setTracks(updatedTrackList);
      setSelected(updatedTrack);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      {isFormOpen ? (
        <TrackForm
          handleAddTrack={handleAddTrack} />
      ) : (
        <button onClick={handleFormView}
        >Add New Track</button>
      )
      }
      <TrackList
        tracks={tracks}
        handleFormView={handleFormView}
        handleSelect={handleSelect}
        handleUpdateTrack={handleUpdateTrack}
        selected={selected}
      />
    </>
  )
};

export default App;