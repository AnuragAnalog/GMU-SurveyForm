import { useState } from "react";

import "/src/App.css";

function EditableInput(props) {
    const [isEditable, setIsEditable] = useState(false);
    const [text, setText] = useState(props.text)

    function handleDoubleClick() {
        setIsEditable(true)
    }

    function handleChange(event) {
        const updatedText = event.target.value

        props.updateText(updatedText)
        setText(updatedText)
    }

    function onChangeBlur() {
        setIsEditable(false)
    }

    return (
        <>
            <div className="editable" onDoubleClick={handleDoubleClick}>
                {isEditable ? (
                    <input
                        type={props.updateType}
                        value={text}
                        onChange={handleChange}
                        onBlur={onChangeBlur}>
                    </input>) : (<span> {text} </span>)}
            </div>
        </>
    )
}

export default EditableInput