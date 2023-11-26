import { useState } from "react"

import "/src/App.css"

function EditableInput(props) {
    const [isEditable, setIsEditable] = useState(false)
    const [text, setText] = useState(props.survey[props.updateName])

    function handleDoubleClick() {
        setIsEditable(true)
    }

    function handleChange(event) {
        const updateName = event.target.name
        const updatedValue = event.target.value
        var newDict = {...props.survey}
        newDict[updateName] = updatedValue

        props.updateFunc(newDict)
        setText(updatedValue)
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
                        name={props.updateName}
                        onChange={handleChange}
                        onBlur={onChangeBlur}>
                    </input>) : (<span> {text} </span>)}
            </div>
        </>
    )
}

export default EditableInput

// <EditableInput 
// survey={props.survey}
// updateFunc={setData}
// updateName="firstName"
// updateType="text" /> 