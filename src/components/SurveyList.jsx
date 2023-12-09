// Importing a CSS file for styling (assuming it contains styles for this component)
import "/src/App.css"

// Importing the SurveyItem component from a specific location
import SurveyItem from "/src/components/SurveyItem";

// Functional component named SurveyList, taking props as input
function SurveyList(props) {
    // Destructuring surveys from the props
    const surveys = props.surveys

    // Initializing a variable to hold the survey list content
    var surveyList = "No Surveys to display"

    // Checking if there are surveys available
    if (surveys.length !== 0) {
        // If surveys exist, map through each survey to create SurveyItem components
        surveyList = surveys.map((survey) => 
            // Rendering SurveyItem component for each survey, passing survey data and setSurveys function
            <SurveyItem survey={survey} setSurveys={props.setSurveys}/>
        )
    }

    // Returning JSX: displaying the list of surveys and a back button
    return (
        <>
            {surveyList} {/* Rendering the list of SurveyItem components */}
            {/* Back button to return to the home view, onClick triggers setIsSurvey */}
            <button className="back-btn" onClick={() => props.setIsSurvey("welcome")}> Back to Home </button>
        </>
    )
}

// Exporting the SurveyList component as default
export default SurveyList;