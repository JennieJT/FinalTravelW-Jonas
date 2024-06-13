import { durationStringByDuration } from "./calDuration"

import Button  from "../../../ui/Button"
import styled from "styled-components";


const DivContainer  = styled.div`
    background-color: red;
    display: flex;
`

const FlexContainer =styled(DivContainer)`
display:flex`
/**
 * 
 * @param { {duty:JtDuty}} 
 * @returns 
 */
const DutyView = ({ project, duty, onSetDuty }) => {

    const disable = duty.state === "START"? true:false
    /**
     * 
     * @param {MouseEvent} e 
     */
    const onClickStart = function(e){
        e.stopPropagation()
        e.preventDefault()
        if (duty.state !== "START"){
            const tmp = {...duty,state:"START"}
            duty.state = "START"
            duty.startTime = new Date()
            //setStartDisable("disabled")
           // setStopDisable()
            onSetDuty({project,duty})
        }

    }
        
    /**
     * 
     * @param {MouseEvent} e 
     */
    const onClickStop =(e) =>{
        e.stopPropagation()
        e.preventDefault()
        if (duty.state === "START"){
            const tmp = {...duty,state:"STOP"}
            duty.state = "STOP"
            //setStartDisable()
            //setStopDisable("disabled")
            onSetDuty({project,duty})
        }
        
    }
    const buttonSize = "small"
    const buttonvariation = 'secondary'
    return (

        <li key={duty.dutyId}>
            <FlexContainer >
                <div>{duty.name}</div>
                <div>{durationStringByDuration(  duty.totalDuration)}</div>
                <div><Button onClick={onClickStart} disabled={disable} size={buttonSize} variation={buttonvariation}>START</Button></div>
                <div><Button onClick={onClickStop} disabled={!disable} size={buttonSize} variation={buttonvariation}>STOP</Button></div>
                {/* <div><button onClick={onClickPause}> PAUSE</button></div> */}
            </FlexContainer></li>
    )
}

/**
 * 
 * @param {{ project :JtProject []}} param0 
 * @returns 
 */
const ProjectView = ({ project, onChangeDutyState }) => {
    return (<>
        {
            project.map((value) => {
                return <ul key={value.projectId}>

                    {value.name}

                    {value.children &&

                        value.children.map((duty) =>
                            <DutyView
                                project={value}
                                duty={duty}
                                onSetDuty ={onChangeDutyState}
                            />
                        )

                    }
                </ul>

            })
        }

    </>)

}
export default ProjectView

export { DutyView }