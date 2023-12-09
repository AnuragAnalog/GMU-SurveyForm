// Importing the useState hook from React
import { useState } from "react"

// Importing a CSS file for styling
import "/src/App.css"

// Functional component named EditableInput, taking props as input
function EditableInput(props) {
    // Using the useState hook to manage state within the component
    const [isEditable, setIsEditable] = useState(false) // State to manage edit mode
    const [text, setText] = useState(props.survey[props.updateName]) // State to manage input value

    // Function triggered when the user double-clicks the element
    function handleDoubleClick() {
        setIsEditable(true) // Sets isEditable state to true, enabling input
    }

    // Function triggered when the input value changes
    function handleChange(event) {
        // Extracting the name and updated value from the event
        const updateName = event.target.name
        const updatedValue = event.target.value

        // Creating a new dictionary (copy of props.survey) to update the value
        var newDict = {...props.survey}
        newDict[updateName] = updatedValue

        // Calling the updateFunc passed via props to update the parent component's state
        props.updateFunc(newDict)
        setText(updatedValue)
    }

    // Function triggered when the input loses focus
    function onChangeBlur() {
        setIsEditable(false)
    }

    // Returning JSX: conditional rendering based on isEditable state
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

// Exporting the EditableInput component as default
export default EditableInput
