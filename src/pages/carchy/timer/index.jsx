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

    },
    {
        projectId: "thirdprject",
        name: "third prject",
        children: [
            {
                dutyId: 'thirdduty',
                name: 'first duty',
                totalDuration: 112,
                state: "STOP",
                pId: 'thirdtprject'
            },
            {
                dutyId: 'secounddutyd',
                name: 'secound duty',
                totalDuration: 220,
                state: "STOP",
                pId: 'thirdprject'
            }
        ]
    },
    {
        projectId: "scondprject",
        name: "second prject",
        children: [
            {
                dutyId: 'scondduty',
                name: 'first duty',
                totalDuration: 112,
                state: "STOP",
                pId: 'thirdtprject'
            },
            {
                dutyId: 'secounddutyd',
                name: 'secound duty',
                totalDuration: 220,
                state: "STOP",
                pId: 'thirdprject'
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
    let tmpDuty, tmpDutyStartTotal;
    const [totalDuration, setTotalDuration] = useState()
    const [totalProjectDuration, setTotalProjectDuration] = useState()
    const calDutyTime = () => {
        setCurTime(new Date())
        if (tmpDuty && tmpDuty.startTime) {

            const duration = durationString(tmpDuty.startTime)

            tmpDuty.totalDuration = tmpDutyStartTotal + calDuration(tmpDuty.startTime)

            arrProject = arrProject.map((project) => {
                if (project.children) {
                    project.children = project.children.map((du) => du.dutyId === tmpDuty.dutyId ? tmpDuty : { ...du })
                }
                return project

            })
            setTotalProjectDuration(projectDuration(arrProject))
            setTotalDuration(durationStringByDuration(tmpDuty.totalDuration))
            setThisDuration(duration)

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
            tmpDutyStartTotal = tmpDuty.totalDuration

            setCurDuty(tmpDuty)


        } else {

            tmpDuty = undefined
            setCurDuty()
        }

    }, [])

    const listProject = useMemo(() => <ProjectView project={arrProject} onChangeDutyState={changeDutyState} />, [arrProject])
    return (
        <div className="tw-flex lg:tw-w-1/2 tw-h-full 
         tw-m-auto tw-flex-col tw-items-center dark:tw-bg-black"  >
            <div className=" tw-w-full lg:tw-py-12 lg:tw-px-40  sm:tw-px-20  tw-h-72">
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
            <div className=" tw-w-full tw-px-20">
                {/* <ProjectView project={arrProject}/> */}
                {listProject}
            </div>

        </div>
    )


}

export default TimerView