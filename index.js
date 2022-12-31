// Code your solution in this file!
const hqLocation = 43
const blockFeetLong = 264
function distanceFromHqInBlocks(hqLocation){
    let final = hqLocation - 42;
    final=Math.abs(final);
return final;
}
function distanceFromHqInFeet(hqLocation){
    let final = distanceFromHqInBlocks(hqLocation);
    final = final *264;
    return final;
}
function distanceTravelledInFeet(num1 , num2){
    let finall= num2-num1;
    finall=Math.abs(finall);
    finall=finall*264;
    return finall;
}
function calculatesFarePrice(start, destination){
    const numOfFeet = distanceTravelledInFeet(start ,destination)
    if (numOfFeet < 400){
        return 0;
    }
    else if (numOfFeet >= 400 && numOfFeet <  2000){
    let  fees = ((numOfFeet - 400)*0.02)
    return fees;
    }
    else if (numOfFeet >= 2000 && numOfFeet <= 2500) {
        return 25;
    }
    else if (numOfFeet > 2500){
        return "cannot travel that far";
    }
}
