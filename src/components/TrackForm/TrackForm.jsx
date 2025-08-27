import { useState } from "react";

const TrackForm = (props) => {
    const initialState = {
        title: '',
        artist: '',
    }
    const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState
  ) // unlcear if this is working post update or not

const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
     if (props.selected) {
       props.handleUpdateTrack(formData, props.selected._id);
     } else {
        props.handleAddTrack(formData);
     }
    };  
    // unlcear if this is working post update or not


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"> Title </label>
                <input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="artist"> Artist </label>
                <input
                    id="artist"
                    name="artist"
                    value={formData.artist}
                    onChange={handleChange}
                    required
                />
                <button type='submit'> 
                    {props.selected ? 'Add New Track' : 'Update Track'}</button>
          {/* the terinary not doing anything currently */}
            </form>
        </div>

    );



};





export default TrackForm;
