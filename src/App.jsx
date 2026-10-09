import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';

import StudentDashboard from './pages/student/Dashboard';
import MyLearning from './pages/student/MyLearning';
import Learn from './pages/student/Learn';
import Assignments from './pages/student/Assignments';
import Quizzes from './pages/student/Quizzes';
import QuizPage from './pages/student/QuizPage';
import Certificates from './pages/student/Certificates';
import Wishlist from './pages/student/Wishlist';
import AIAssistant from './pages/student/AIAssistant';
import Recommendations from './pages/student/Recommendations';
import Profile from './pages/student/Profile';
import Settings from './pages/student/Settings';
import Notifications from './pages/student/Notifications';

import InstructorDashboard from './pages/instructor/Dashboard';
import InstructorCourses from './pages/instructor/Courses';
import CreateCourse from './pages/instructor/CreateCourse';
import InstructorStudents from './pages/instructor/Students';
import InstructorAnalytics from './pages/instructor/Analytics';

import AdminDashboard from './pages/admin/Dashboard';
import AdminStudents from './pages/admin/Students';
import AdminInstructors from './pages/admin/Instructors';
import AdminCourses from './pages/admin/Courses';
import AdminCategories from './pages/admin/Categories';
import AdminReports from './pages/admin/Reports';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Student */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/my-learning" element={<MyLearning />} />
        <Route path="/student/course/:id/learn" element={<Learn />} />
        <Route path="/student/assignments" element={<Assignments />} />
        <Route path="/student/quizzes" element={<Quizzes />} />
        <Route path="/student/quiz/:id" element={<QuizPage />} />
        <Route path="/student/certificates" element={<Certificates />} />
        <Route path="/student/wishlist" element={<Wishlist />} />
        <Route path="/student/ai-assistant" element={<AIAssistant />} />
        <Route path="/student/recommendations" element={<Recommendations />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/settings" element={<Settings />} />
        <Route path="/student/notifications" element={<Notifications />} />

        {/* Instructor */}
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor/courses" element={<InstructorCourses />} />
        <Route path="/instructor/create-course" element={<CreateCourse />} />
        <Route path="/instructor/students" element={<InstructorStudents />} />
        <Route path="/instructor/analytics" element={<InstructorAnalytics />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<AdminStudents />} />
        <Route path="/admin/instructors" element={<AdminInstructors />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/categories" element={<AdminCategories />} />
        <Route path="/admin/reports" element={<AdminReports />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
