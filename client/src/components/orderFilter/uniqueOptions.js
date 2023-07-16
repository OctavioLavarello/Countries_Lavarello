function uniqueOptions (activities, option) {
    const activitiesNames = activities.reduce((uniqueArr, activity) => {
        const index = uniqueArr.findIndex(a => a.name === activity.name);
        if (index === -1) {
            uniqueArr.push(activity);
        }
        return uniqueArr;
    }, []);
    const activitiesDifficulty = activities.reduce((uniqueArr, activity) => {
        const index = uniqueArr.findIndex(a => a.difficulty === activity.difficulty);
        if (index === -1) {
            uniqueArr.push(activity);
        }
        return uniqueArr;
    }, []);
    const activitiesDuration = activities.reduce((uniqueArr, activity) => {
        const index = uniqueArr.findIndex(a => a.duration === activity.duration);
        if (index === -1) {
            uniqueArr.push(activity);
        }
        return uniqueArr;
    }, []);
    const activitiesSeason = activities.reduce((uniqueArr, activity) => {
        const index = uniqueArr.findIndex(a => a.season === activity.season);
        if (index === -1) {
            uniqueArr.push(activity);
        }
        return uniqueArr;
    }, []);
    if (option === "Name"){
        return activitiesNames
    }
    if (option === "Difficulty"){
        return activitiesDifficulty
    }
    if (option === "Duration"){
        return activitiesDuration
    }
    if (option === "Season"){
        return activitiesSeason
    }
}

export default uniqueOptions