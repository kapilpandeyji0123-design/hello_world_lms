export const categories = [
  { id: 'java', name: 'Java', count: 84, icon: 'Coffee' },
  { id: 'webdev', name: 'Web Development', count: 132, icon: 'Code2' },
  { id: 'datascience', name: 'Data Science', count: 67, icon: 'BarChart3' },
  { id: 'ai-ml', name: 'AI & Machine Learning', count: 58, icon: 'BrainCircuit' },
  { id: 'cloud', name: 'Cloud Computing', count: 49, icon: 'Cloud' },
  { id: 'cybersecurity', name: 'Cyber Security', count: 41, icon: 'ShieldCheck' },
];

const thumb = (seed, c1, c2) =>
  `linear-gradient(135deg, ${c1}, ${c2})`;

export const courses = [
  {
    id: 'java-fullstack',
    title: 'Java Full Stack Development with Spring Boot',
    instructor: 'Rohan Mehta',
    category: 'Java',
    level: 'Intermediate',
    rating: 4.8,
    reviews: 2140,
    students: 18400,
    duration: '42h',
    price: 2499,
    oldPrice: 4999,
    gradient: thumb(1, '#3F35C5', '#7C3AED'),
    description: 'Go from Java fundamentals to building and deploying production REST APIs with Spring Boot, JPA, Hibernate and MySQL.',
  },
  {
    id: 'react-advanced',
    title: 'Advanced React & Modern Frontend Architecture',
    instructor: 'Sara Khan',
    category: 'Web Development',
    level: 'Advanced',
    rating: 4.9,
    reviews: 3110,
    students: 24210,
    duration: '31h',
    price: 1999,
    oldPrice: 3999,
    gradient: thumb(2, '#FF8A3D', '#F5576C'),
    description: 'Master hooks, performance patterns, state architecture and testing for large-scale React applications.',
  },
  {
    id: 'python-datascience',
    title: 'Python for Data Science & Analytics',
    instructor: 'Ananya Rao',
    category: 'Data Science',
    level: 'Beginner',
    rating: 4.7,
    reviews: 1876,
    students: 15900,
    duration: '28h',
    price: 1799,
    oldPrice: 3499,
    gradient: thumb(3, '#16A34A', '#0EA5E9'),
    description: 'Learn pandas, NumPy, visualization and statistical analysis through real datasets and projects.',
  },
  {
    id: 'ml-foundations',
    title: 'Machine Learning Foundations with Python',
    instructor: 'Dr. Vikram Nair',
    category: 'AI & Machine Learning',
    level: 'Intermediate',
    rating: 4.8,
    reviews: 2680,
    students: 21200,
    duration: '38h',
    price: 2999,
    oldPrice: 5499,
    gradient: thumb(4, '#7C3AED', '#3F35C5'),
    description: 'Build a strong foundation in supervised and unsupervised learning, model evaluation and deployment.',
  },
  {
    id: 'aws-cloud',
    title: 'AWS Cloud Practitioner to Solutions Architect',
    instructor: 'Neha Verma',
    category: 'Cloud Computing',
    level: 'Beginner',
    rating: 4.6,
    reviews: 1490,
    students: 12800,
    duration: '35h',
    price: 2299,
    oldPrice: 4299,
    gradient: thumb(5, '#0EA5E9', '#16A34A'),
    description: 'A complete path from AWS fundamentals to designing scalable, fault-tolerant cloud architectures.',
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking & Penetration Testing',
    instructor: 'Arjun Malhotra',
    category: 'Cyber Security',
    level: 'Advanced',
    rating: 4.7,
    reviews: 980,
    students: 9400,
    duration: '33h',
    price: 2599,
    oldPrice: 4799,
    gradient: thumb(6, '#E1483F', '#FF8A3D'),
    description: 'Hands-on penetration testing, network security and vulnerability assessment for real-world systems.',
  },
  {
    id: 'js-modern',
    title: 'Modern JavaScript from Zero to Expert',
    instructor: 'Sara Khan',
    category: 'Web Development',
    level: 'Beginner',
    rating: 4.8,
    reviews: 4210,
    students: 32100,
    duration: '26h',
    price: 1499,
    oldPrice: 2999,
    gradient: thumb(7, '#F5576C', '#FF8A3D'),
    description: 'Everything from syntax basics to async programming, ES2023 features and browser APIs.',
  },
  {
    id: 'devops-docker',
    title: 'DevOps with Docker, Kubernetes & CI/CD',
    instructor: 'Karan Suri',
    category: 'Cloud Computing',
    level: 'Intermediate',
    rating: 4.7,
    reviews: 1330,
    students: 11200,
    duration: '30h',
    price: 2199,
    oldPrice: 3999,
    gradient: thumb(8, '#3F35C5', '#0EA5E9'),
    description: 'Containerize, orchestrate and automate deployment pipelines the way modern teams ship software.',
  },
];

export const courseCurriculum = [
  { title: 'Introduction', lessons: ['Welcome', 'Course Overview'] },
  { title: 'Java Basics', lessons: ['Variables', 'Data Types', 'Operators'] },
  { title: 'OOP Concepts', lessons: ['Classes', 'Objects', 'Inheritance'] },
  { title: 'Spring Boot', lessons: ['Spring Basics', 'REST APIs', 'Controllers', 'Services'] },
  { title: 'Database', lessons: ['MySQL', 'JPA', 'Hibernate'] },
];

export const testimonials = [
  { name: 'Priya Sharma', role: 'Backend Developer at Zestly', quote: 'SmartLearn\u2019s structured paths and the AI assistant made concepts click faster than any course I\u2019ve tried before.' },
  { name: 'Aditya Kulkarni', role: 'Final Year CSE Student', quote: 'The hands-on Spring Boot projects gave me exactly what I needed for my placement interviews.' },
  { name: 'Meera Iyer', role: 'Data Analyst at Finlytics', quote: 'I loved how the dashboard tracked my progress and recommended the next best course automatically.' },
];

export const enrolledCourses = [
  { id: 'java-fullstack', title: 'Java Full Stack Development with Spring Boot', progress: 68, lastLesson: 'REST Controllers', gradient: thumb(1, '#3F35C5', '#7C3AED') },
  { id: 'ml-foundations', title: 'Machine Learning Foundations with Python', progress: 32, lastLesson: 'Linear Regression', gradient: thumb(4, '#7C3AED', '#3F35C5') },
  { id: 'aws-cloud', title: 'AWS Cloud Practitioner to Solutions Architect', progress: 90, lastLesson: 'IAM Policies', gradient: thumb(5, '#0EA5E9', '#16A34A') },
  { id: 'js-modern', title: 'Modern JavaScript from Zero to Expert', progress: 12, lastLesson: 'Variables & Scope', gradient: thumb(7, '#F5576C', '#FF8A3D') },
];

export const weeklyHours = [
  { day: 'Mon', hours: 2.5 }, { day: 'Tue', hours: 1.2 }, { day: 'Wed', hours: 3.1 },
  { day: 'Thu', hours: 0.8 }, { day: 'Fri', hours: 2.0 }, { day: 'Sat', hours: 4.3 }, { day: 'Sun', hours: 1.6 },
];

export const assignments = [
  { id: 1, title: 'Build a REST API with Spring Boot', course: 'Java Full Stack Development', due: 'Aug 20, 2026', status: 'Pending' },
  { id: 2, title: 'Linear Regression Case Study', course: 'Machine Learning Foundations', due: 'Aug 22, 2026', status: 'Pending' },
  { id: 3, title: 'S3 Bucket Policy Design', course: 'AWS Cloud Practitioner', due: 'Aug 18, 2026', status: 'Submitted' },
];

export const submittedAssignments = [
  { id: 1, title: 'JVM & Memory Management Quiz Report', course: 'Java Full Stack Development', submitted: 'Aug 5, 2026', score: '18/20', feedback: 'Solid understanding, review garbage collection generations.' },
  { id: 2, title: 'Array & String DSA Set', course: 'Data Structures Basics', submitted: 'Jul 29, 2026', score: '15/20', feedback: 'Good logic, work on time-complexity write-ups.' },
];

export const certificates = [
  { id: 'CERT-SL-88213', course: 'Modern JavaScript from Zero to Expert', date: 'Jul 12, 2026' },
  { id: 'CERT-SL-77104', course: 'Python for Data Science & Analytics', date: 'May 30, 2026' },
];

export const notifications = [
  { id: 1, emoji: '🔔', text: 'New course available: DevOps with Docker, Kubernetes & CI/CD', time: '2h ago', unread: true },
  { id: 2, emoji: '📚', text: 'Assignment "Build a REST API with Spring Boot" is due tomorrow', time: '5h ago', unread: true },
  { id: 3, emoji: '🏆', text: 'Congratulations! You completed Java Basics module.', time: '1d ago', unread: false },
  { id: 4, emoji: '🎯', text: 'New course recommended for you: Microservices with Java', time: '2d ago', unread: false },
  { id: 5, emoji: '💬', text: 'Instructor Rohan Mehta replied to your question in Q&A', time: '3d ago', unread: false },
];

export const quizQuestions = [
  { q: 'What is the main purpose of Spring Boot?', options: ['To style web pages', 'To simplify building production-ready Java applications', 'To manage databases only', 'To replace HTML'], answer: 1 },
  { q: 'Which annotation marks a class as a REST controller?', options: ['@Service', '@Entity', '@RestController', '@Repository'], answer: 2 },
  { q: 'What does JPA stand for?', options: ['Java Persistence API', 'Java Program Analyzer', 'Java Package Assembly', 'Java Process Automation'], answer: 0 },
  { q: 'Which HTTP method is typically used to create a resource?', options: ['GET', 'POST', 'DELETE', 'OPTIONS'], answer: 1 },
  { q: 'What is dependency injection primarily used for?', options: ['Styling components', 'Managing object creation and wiring', 'Compressing files', 'Routing URLs'], answer: 1 },
];

export const instructorCourses = [
  { id: 1, title: 'Java Full Stack Development with Spring Boot', students: 18400, rating: 4.8, revenue: '₹18,40,200', status: 'Published' },
  { id: 2, title: 'Advanced Spring Security', students: 4200, rating: 4.6, revenue: '₹5,20,800', status: 'Published' },
  { id: 3, title: 'Microservices with Java (New)', students: 0, rating: 0, revenue: '₹0', status: 'Draft' },
];

export const studentPerformance = [
  { name: 'Ishaan Gupta', email: 'ishaan.g@mail.com', course: 'Java Full Stack', progress: 82, quiz: '17/20', assignment: '9/10', status: 'On Track' },
  { name: 'Ritika Malhotra', email: 'ritika.m@mail.com', course: 'Java Full Stack', progress: 45, quiz: '12/20', assignment: '6/10', status: 'Behind' },
  { name: 'Farhan Ali', email: 'farhan.a@mail.com', course: 'Advanced Spring Security', progress: 95, quiz: '19/20', assignment: '10/10', status: 'On Track' },
  { name: 'Divya Nair', email: 'divya.n@mail.com', course: 'Java Full Stack', progress: 30, quiz: '9/20', assignment: '4/10', status: 'Behind' },
];

export const adminStudents = [
  { name: 'Ishaan Gupta', email: 'ishaan.g@mail.com', courses: 4, status: 'Active', joined: 'Jan 12, 2026' },
  { name: 'Ritika Malhotra', email: 'ritika.m@mail.com', courses: 2, status: 'Active', joined: 'Feb 3, 2026' },
  { name: 'Farhan Ali', email: 'farhan.a@mail.com', courses: 6, status: 'Suspended', joined: 'Nov 18, 2025' },
  { name: 'Divya Nair', email: 'divya.n@mail.com', courses: 1, status: 'Active', joined: 'Jun 21, 2026' },
];

export const adminInstructors = [
  { name: 'Rohan Mehta', email: 'rohan.m@mail.com', courses: 3, students: 22600, rating: 4.8, status: 'Active' },
  { name: 'Sara Khan', email: 'sara.k@mail.com', courses: 2, students: 56310, rating: 4.85, status: 'Active' },
  { name: 'Dr. Vikram Nair', email: 'vikram.n@mail.com', courses: 4, students: 21200, rating: 4.75, status: 'Pending' },
];

export const adminCourses = [
  { title: 'Java Full Stack Development', instructor: 'Rohan Mehta', category: 'Java', students: 18400, rating: 4.8, status: 'Approved', created: 'Jan 2026' },
  { title: 'Advanced React & Frontend Architecture', instructor: 'Sara Khan', category: 'Web Dev', students: 24210, rating: 4.9, status: 'Approved', created: 'Feb 2026' },
  { title: 'Microservices with Java', instructor: 'Rohan Mehta', category: 'Java', students: 0, rating: 0, status: 'Pending Review', created: 'Aug 2026' },
  { title: 'Intro to Blockchain', instructor: 'Karan Suri', category: 'Web Dev', students: 1200, rating: 4.2, status: 'Rejected', created: 'Jul 2026' },
];
