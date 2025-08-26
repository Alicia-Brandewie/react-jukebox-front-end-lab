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
        props.handleAddTrack(formData);
    };

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
                    {props.selected ? 'Update Track' : 'Add New Track'}</button>
          {/* the terinary not doing anything currently */}
            </form>
        </div>

    );



};





export default TrackForm;
