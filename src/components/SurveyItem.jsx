import { useState } from "react";

import "/src/App.css";

function SurveyItem(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    return <>
        <div className="survey-item">
            <p className="survey-item-element"> {props.survey.firstName} {props.survey.lastName} </p>
            <p className="survey-item-element"> {props.survey.dateOfSurvey} </p>
            <div className="survey-item-buttons">
                <button className="survey-item-btn" onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}>
                    {isExpanded ? "Hide Details" : "Show Details"}
                </button>
            </div>
            {isExpanded && <div className="survey-item-details">
                <h3 className="survey-item-heading"> Survey Details </h3>
                <p className="survey-item-element"> {props.survey.streetAddress} </p>
                <p className="survey-item-element"> {props.survey.city}, {props.survey.state} {props.survey.zipCode} </p>
                <p className="survey-item-element"> {props.survey.phoneNumber}, {props.survey.email} </p>
                <p className="survey-item-element"> {props.survey.campus} </p>
                <p className="survey-item-element"> {props.survey.interest} </p>
                <p className="survey-item-element"> {props.survey.recommend} </p>
                <p className="survey-item-element"> {props.survey.comments} </p>
            </div>}
        </div>
    </>
    // console.log(props.survey);
}

export default SurveyItem;