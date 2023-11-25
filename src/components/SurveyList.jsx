import "/src/App.css"

import SurveyItem from "/src/components/SurveyItem";

function SurveyList(props) {
    const surveys = props.surveys
    var surveyList = "No Surveys to display"

    if (surveys.length != 0) {
        surveyList = surveys.map((survey) => 
            <SurveyItem survey={survey}
                        setSurveyId={props.setSurveyId}
                        setSurveyOper={props.setSurveyOper}/>
        )
    }

    return <>
        {surveyList}
        <button className="back-btn" onClick={() => props.setIsSurvey("welcome")}> Back to Home </button>
    </>
}

export default SurveyList;