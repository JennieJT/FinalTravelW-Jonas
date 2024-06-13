import { useCallback, useEffect, useMemo, useState } from "react"
import ProjectView from "./ProjectView"
import { calDuration, durationString, durationStringByDuration, projectDuration } from "./calDuration"
/**@type {JtProject []} */
let arrProject = [
    {
        projectId: "firstprject",
        name: "first prject",
        children: [
            {
                dutyId: 'firstduty',
                name: 'first duty',
                totalDuration: 110,
                state: "STOP",
                pId: 'firstprject'
            },
            {
                dutyId: 'secoundduty',
                name: 'secound duty',
                totalDuration: 220,
                state: "STOP",
                pId: 'firstprject'
            }
        ]

    }
]

const TimerView = () => {

    let curIntervalId = ''
    const [curTime, setCurTime] = useState(new Date())
    /**@type {[JtDuty]} */
    const [curDuty, setCurDuty] = useState()
    const [thisDuration, setThisDuration] = useState(0)
    /**@type {JtDuty} */
    let tmpDuty
    const [totalDuration, setTotalDuration] = useState()
    const [totalProjectDuration, setTotalProjectDuration] = useState()
    const calDutyTime = () => {
        setCurTime(new Date())
        if (tmpDuty && tmpDuty.startTime) {
            tmpDuty.totalDuration += calDuration(tmpDuty.startTime)
            const duration = durationString(tmpDuty.startTime)
            setThisDuration(duration)
            setTotalDuration(durationStringByDuration( tmpDuty.totalDuration))
            arrProject = arrProject.map((project) => {
                if (project.children) {
                    project.children = project.children.map((du) => du.dutyId == tmpDuty.dutyId ? tmpDuty : { ...du })
                }
                return project

            })
            setTotalProjectDuration(projectDuration(arrProject))

        }

    }
    useEffect(() => {
        curIntervalId = setInterval(calDutyTime, 1000)
    }, []);
    const changeDutyState = useCallback(({ project, duty }) => {
        arrProject = arrProject.map((project) => {
            if (project.children) {
                project.children = project.children.map((du) => du.dutyId == duty.dutyId ? duty : { ...du, state: 'STOP' })
            }
            return project

        })
        if (duty.state === "START") {
            tmpDuty = duty

            setCurDuty(tmpDuty)


        } else {

            tmpDuty = undefined
            setCurDuty()
        }

    }, [])

    const listProject = useMemo(() => <ProjectView project={arrProject} onChangeDutyState={changeDutyState} />, [arrProject])
    return (
        <div >
            <div>
                <p>
                    {curTime.toLocaleDateString() + "-" + curTime.toLocaleTimeString()}
                </p>

                {
                    !curDuty && <p> no duty start</p>
                }
                {
                    curDuty && curDuty.state == "START" && <>
                        <p>current duty {curDuty.name}</p>
                        <p>project total duration {totalProjectDuration}</p>
                        <p>total duty duration {totalDuration} </p>
                        <p>this time duration : {thisDuration}</p>
                    </>
                }
            </div>
            <div>
                {/* <ProjectView project={arrProject}/> */}
                {listProject}
            </div>

        </div>
    )


}

export default TimerView