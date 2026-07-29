const marks = [95, 78, 90, 78, 59];

const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const percentage = (totalMarks / (marks.length * 100)) * 100;

console.log('Total Marks:', totalMarks);
console.log('Percentage:', percentage.toFixed(2) + '%');