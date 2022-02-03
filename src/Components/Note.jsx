import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title_name}</h1>
            <p>{props.content_info}</p>
            <button onClick={function(){
                props.deleteFunction(props.id);
            }}><DeleteIcon /></button>

        </div>
    );
}

export default Note;





