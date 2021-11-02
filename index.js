// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers){
    let firstTwoDrivers = [drivers[0],drivers[1]]
    return firstTwoDrivers
}; 

const returnLastTwoDrivers = function(drivers){

    let lastTwoDrivers = [drivers[2],drivers[3]]
    return lastTwoDrivers 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){

    return function(){
        return fare = (fare * fare)
    }
}

function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare){
    return fare * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){

    return returnFirstTwoDrivers(drivers);
    }
