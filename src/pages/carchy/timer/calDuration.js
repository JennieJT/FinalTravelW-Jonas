const yearDuration = 365 * 24 * 60 * 60
const monthDuration = 30 * 24 * 60 * 60
const dayDuration = 24 * 60 * 60
const hourDuration = 60 * 60
const minuteDuration = 60
/**
 * 
 * @param {Date} startTime 
 * @param {Date} endTime 
 * @returns {Number}
 */
const calDuration = (startTime, endTime) => {
    !endTime && (endTime = new Date());
    const total = endTime.getTime() - startTime.getTime();
    return Math.floor(total/1000)

}
/**
 * 
 * @param {JtProject[]} project 
 */
const projectDuration = (project) => {
    let total = 0
    project.forEach(element => {
        if (element.children) {
            element.children.forEach(ele => {
                if (ele.totalDuration) {
                    total += ele.totalDuration
                }

            });
        }
    });
    return durationStringByDuration(total)

}
/**
 * 
 * @param {Date} startTime 
 * @param {Date} endTime 
 * @returns {String}
 */
const durationString = (startTime, endTime) => {
    const diff = calDuration(startTime, endTime);
    return durationStringByDuration(diff)
}
const durationStringByDuration = (diff) => {
    let hours = Math.floor(diff / 3600);
    hours = hours.toString().padStart(2, '0')
    let  minutes = Math.floor((diff % 3600) / 60).toString().padStart(2, '0');
    const seconds = Math.floor(((diff % 3600) % 60) ).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
export { durationString, calDuration, projectDuration ,durationStringByDuration}