import { durationStringByDuration } from "./calDuration"

import Button from "../../../ui/Button"
import styled from "styled-components";


const DivContainer = styled.div`
    background-color: red;
    display: flex;
`

const FlexContainer = styled(DivContainer)`
display:flex`
/**
 * 
 * @param { {duty:JtDuty}} 
 * @returns 
 */
const DutyView = ({ project, duty, onSetDuty }) => {

    const disable = duty.state === "START" ? true : false
    /**
     * 
     * @param {MouseEvent} e 
     */
    const onClickStart = function (e) {
        e.stopPropagation()
        e.preventDefault()
        if (duty.state !== "START") {
            const tmp = { ...duty, state: "START" }
            duty.state = "START"
            duty.startTime = new Date()
            //setStartDisable("disabled")
            // setStopDisable()
            onSetDuty({ project, duty })
        }

    }

    /**
     * 
     * @param {MouseEvent} e 
     */
    const onClickStop = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (duty.state === "START") {
            const tmp = { ...duty, state: "STOP" }
            duty.state = "STOP"
            //setStartDisable()
            //setStopDisable("disabled")
            onSetDuty({ project, duty })
        }

    }
    const buttonSize = "small"
    const buttonvariation = 'secondary'
    return (

        <li
            key={duty.dutyId}
            className="tw-pl-4">
            <div className="tw-flex tw-w-full" >
                <div className="tw-w-1/2">
                    {duty.name}
                </div>
                <div className="tw-w-1/4">
                    {durationStringByDuration(duty.totalDuration)}
                </div>
                <button
                    className="tw-bg-blue-600 tw-p-1 tw-mx-2 tw-mb-2 tw-text-base tw-text-white tw-rounded-md  disabled:tw-bg-gray-500 tw-w-1/8"
                    onClick={onClickStart}
                    disabled={disable}
                >
                    START
                </button>
                <button
                    className="tw-bg-blue-600 tw-p-1 tw-mx-2 tw-mb-2 tw-text-base tw-text-white tw-rounded-md  disabled:tw-bg-gray-500 tw-w-1/8"
                    onClick={onClickStop}
                    disabled={!disable}
                >
                    STOP
                </button>

            </div>
        </li >
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
                                onSetDuty={onChangeDutyState}
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