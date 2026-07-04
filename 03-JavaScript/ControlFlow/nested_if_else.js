// Check use can drive or not
let age = 1;
let hasLicense = true;

checkDrivingEligibility(age, hasLicense);

function checkDrivingEligibility(age, license) {


    if (age >= 18) {
        if (license === true) {
            console.log("User can drive.");
        } else {
            console.log("User cannot drive without a license.");
        }
    } else {
        console.log("User is too young to drive.");
    }

}
