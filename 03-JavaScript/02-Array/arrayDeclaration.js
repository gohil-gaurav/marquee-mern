const students = [
  {
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    year: 1,
    course: 'BCA',
    phone: '9876543210',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 82 },
      { subject: 'HTML', marks: 91 },
      { subject: 'JavaScript', marks: 88 },
    ],
  },
  {
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    year: 2,
    course: 'BSc IT',
    phone: '9876543211',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 75 },
      { subject: 'HTML', marks: 89 },
      { subject: 'JavaScript', marks: 84 },
    ],
  },
  {
    name: 'Rahul Verma',
    email: 'rahul.verma@example.com',
    year: 3,
    course: 'B.Tech',
    phone: '9876543212',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 92 },
      { subject: 'HTML', marks: 87 },
      { subject: 'JavaScript', marks: 95 },
    ],
  },
  {
    name: 'Sneha Joshi',
    email: 'sneha.joshi@example.com',
    year: 4,
    course: 'B.E.',
    phone: '9876543213',
    isGraduated: true,
    examScore: [
      { subject: 'Java', marks: 85 },
      { subject: 'HTML', marks: 93 },
      { subject: 'JavaScript', marks: 90 },
    ],
  },
  {
    name: 'Karan Mehta',
    email: 'karan.mehta@example.com',
    year: 3,
    course: 'B.Com',
    phone: '9876543214',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 70 },
      { subject: 'HTML', marks: 78 },
      { subject: 'JavaScript', marks: 81 },
    ],
  },
  {
    name: 'Ananya Singh',
    email: 'ananya.singh@example.com',
    year: 4,
    course: 'BBA',
    phone: '9876543215',
    isGraduated: true,
    examScore: [
      { subject: 'Java', marks: 95 },
      { subject: 'HTML', marks: 96 },
      { subject: 'JavaScript', marks: 94 },
    ],
  },
  {
    name: 'Rohan Desai',
    email: 'rohan.desai@example.com',
    year: 2,
    course: 'BCA',
    phone: '9876543216',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 68 },
      { subject: 'HTML', marks: 74 },
      { subject: 'JavaScript', marks: 80 },
    ],
  },
  {
    name: 'Meera Nair',
    email: 'meera.nair@example.com',
    year: 1,
    course: 'BSc CS',
    phone: '9876543217',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 88 },
      { subject: 'HTML', marks: 85 },
      { subject: 'JavaScript', marks: 90 },
    ],
  },
  {
    name: 'Vikram Rao',
    email: 'vikram.rao@example.com',
    year: 4,
    course: 'MBA',
    phone: '9876543218',
    isGraduated: true,
    examScore: [
      { subject: 'Java', marks: 79 },
      { subject: 'HTML', marks: 82 },
      { subject: 'JavaScript', marks: 77 },
    ],
  },
  {
    name: 'Neha Kapoor',
    email: 'neha.kapoor@example.com',
    year: 2,
    course: 'B.Tech',
    phone: '9876543219',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 91 },
      { subject: 'HTML', marks: 88 },
      { subject: 'JavaScript', marks: 93 },
    ],
  },
];

const cart = [
  { name: 'Laptop', quantity: 1, price: 55000 },
  { name: 'Mouse', quantity: 2, price: 700 },
  { name: 'Keyboard', quantity: 1, price: 1500 },
  { name: 'Monitor', quantity: 2, price: 12000 },
  { name: 'Headphones', quantity: 1, price: 2500 },
  { name: 'USB Cable', quantity: 3, price: 250 },
  { name: 'Webcam', quantity: 1, price: 3200 },
  { name: 'External Hard Drive', quantity: 1, price: 4800 },
  { name: 'Laptop Stand', quantity: 2, price: 900 },
];
const marks = [10, 20, 30, 20, 50];
console.log(marks.filter((el) => el === 20));

// 4. Return the highest examscore from students Array >>>
const topper = students.reduce((highest, student) => {
  const totalMarks = student.examScore.reduce(
    (sum, subject) => sum + subject.marks,
    0
  );

  if (totalMarks > highest.totalMarks) {
    return {
      name: student.name,
      totalMarks: totalMarks,
      course: student.course,
    };
  }

  return highest;
}, { name: "", totalMarks: 0, course: "" });

console.log(topper);