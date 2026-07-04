let isAdmin = false;
checkEvenOdd(4);
CandidateCanVote(20);



function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
}

function cheackIsAdminOrNot(value) {
    if (value === 'admin') {
        console.log("User is an admin.");
    } else {
        console.log("Guest User.");
    }
}

function CandidateCanVote(age) {
    if (age >= 18 && age <= 100) {
        console.log("Candidate can vote.");
    } else {
        console.log("Candidate cannot vote.");
    }
}