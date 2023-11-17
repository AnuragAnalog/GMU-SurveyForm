import "/src/App.css"

import SurveyItem from "/src/components/SurveyItem";

function SurveyList(props) {
    const surveys = JSON.parse(localStorage.getItem("survey"))
    const surveyList = surveys.map((survey) => 
        <SurveyItem survey={survey} />
    )
    
    return <>
        {surveyList}
        <button className="back-btn" onClick={() => props.setIsSurvey("welcome")}> Back </button>
    </>
}

export default SurveyList;