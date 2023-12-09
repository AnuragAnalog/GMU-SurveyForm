// Importing a CSS file for styling (assuming it contains styles for this component)
import "/src/App.css"

// Functional component named Welcome, taking props as input
function Welcome(props) {
    // Returning JSX: displaying a welcome message, team information, and buttons
    return (
        <>
            {/* Div container with a class name 'welcome' */}
            <div className="welcome">
                {/* Heading */}
                <h1 className="heading"> George Mason University - Survey Form </h1>

                {/* Unordered list with class name 'team-list' */}
                <ul className="team-list">
                    {/* List items displaying team member names and IDs */}
                    <li className="team-member"> Anurag Peddi - G01394826 </li>
                    <li className="team-member"> Akash Ponnam - G01378189 </li>
                    <li className="team-member"> Manideep Akula - G01380182 </li>
                    <li className="team-member"> Naga Shiva Sai Myneni - G01399349 </li>
                </ul>

                {/* Button to navigate to the Survey view, onClick triggers setIsSurvey */}
                <button className="survey-btn" onClick={() => props.setIsSurvey("survey")}> Survey Link </button>
                
                {/* Button to navigate to the Survey List view, onClick triggers setIsSurvey */}
                <button className="surveylist-btn" onClick={() => props.setIsSurvey("surveylist")}> Survey List </button>
            </div>
        </>
    )
}

// Exporting the Welcome component as default
export default Welcome;
