import {
  LayoutDashboard, BookOpen, Compass, Heart, ClipboardList, HelpCircle,
  Award, Bot, Bell, User, Settings, Sparkles,
  PlusCircle, Users, BarChart3, Star, ShieldCheck, Layers, FileBarChart, GraduationCap,
} from 'lucide-react';

export const studentNav = [
  { to: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/student/my-learning', label: 'My Learning', icon: BookOpen },
  { to: '/courses', label: 'Browse Courses', icon: Compass },
  { to: '/student/wishlist', label: 'Wishlist', icon: Heart },
  { to: '/student/assignments', label: 'Assignments', icon: ClipboardList },
  { to: '/student/quizzes', label: 'Quizzes', icon: HelpCircle },
  { to: '/student/certificates', label: 'Certificates', icon: Award },
  { to: '/student/ai-assistant', label: 'AI Assistant', icon: Bot },
  { to: '/student/recommendations', label: 'Recommendations', icon: Sparkles },
  { to: '/student/notifications', label: 'Notifications', icon: Bell },
  { to: '/student/profile', label: 'Profile', icon: User },
  { to: '/student/settings', label: 'Settings', icon: Settings },
];

export const instructorNav = [
  { to: '/instructor/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/instructor/courses', label: 'My Courses', icon: BookOpen },
  { to: '/instructor/create-course', label: 'Create Course', icon: PlusCircle },
  { to: '/instructor/students', label: 'Students', icon: Users },
  { to: '/instructor/analytics', label: 'Analytics', icon: BarChart3 },
];

export const adminNav = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/students', label: 'Students', icon: Users },
  { to: '/admin/instructors', label: 'Instructors', icon: GraduationCap },
  { to: '/admin/courses', label: 'Courses', icon: Layers },
  { to: '/admin/categories', label: 'Categories', icon: Star },
  { to: '/admin/reports', label: 'Reports', icon: FileBarChart },
];
