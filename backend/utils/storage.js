const { v4: uuidv4 } = require('uuid');

// In-memory storage for users, jobs, internships, applications, and mentors
exports.users = [];
exports.jobs = [
  {
    id: uuidv4(),
    title: 'Software Engineer',
    description: 'We are looking for a Software Engineer with expertise in Node.js and React.',
    hrId: uuidv4(), // Sample HR ID
  },
  {
    id: uuidv4(),
    title: 'Data Scientist',
    description: 'Hiring a Data Scientist skilled in Python, Machine Learning, and Data Analysis.',
    hrId: uuidv4(), // Sample HR ID
  }
];
exports.internships = [
  {
    id: uuidv4(),
    title: 'Web Development Intern',
    description: 'Looking for a web development intern with skills in HTML, CSS, and JavaScript.',
    hrId: uuidv4(), // Sample HR ID
  },
  {
    id: uuidv4(),
    title: 'AI Research Intern',
    description: 'Join us as an AI research intern. Familiarity with deep learning frameworks required.',
    hrId: uuidv4(), // Sample HR ID
  }
];
exports.applications = [];
exports.mentors = [];
