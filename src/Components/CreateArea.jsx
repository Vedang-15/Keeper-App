import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [inputText, setInputText] = useState({ title: "", info: "" });
    function textChange(event) {
        const newValue = event.target.value;
        if (event.target.name === "title") {
            setInputText({ title: newValue, info: inputText.info });
        }
        else {
            setInputText({ title: inputText.title, info: newValue });
        }

    }

    const [isExpanded, setIsExpanded] = useState(false);
    function expandArea() {
        setIsExpanded(true);
    }


    return (
        <div>
            <form class="create-note" onSubmit={function (event) {
                props.addFunction(inputText);
                setInputText({ title: "", info: "" });
                event.preventDefault();    // to prevent form from refreshing itself
            }}>

                {isExpanded && <input
                    onChange={textChange}
                    name="title" placeholder="Title"
                    value={inputText.title} />
                }  {/*writing value and passing inputText.title to it is mandatory otherwise when you will try to clear input space after pressing on add button, it wont get cleared as there was no provision to change value of text(to blank) if this value element is not added here.*/}

                <textarea
                    onChange={textChange}
                    onClick={expandArea}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}  //even if you use "3" and "1" in place of 3 and 1, as if you use 3 only after simplifying it will become {3}, and js object is valid
                    value={inputText.info} />

                <Zoom in={isExpanded ? true : false}>
                    <Fab type="submit">
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;