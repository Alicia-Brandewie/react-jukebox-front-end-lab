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

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };

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

  


  return  (
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
  />
  </>
  )
};

export default App;