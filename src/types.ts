export type TabType = 
  | 'student-hub'
  | 'faculty-console'
  | 'courses-and-materials'
  | 'attendance-and-grades'
  | 'identity-id-photo'
  | 'login';

export type UserRole = 'student' | 'faculty' | 'admin';

export interface Lecture {
  code: string;
  title: string;
  time: string;
  room: string;
  instructor: string;
  type: 'Lecture' | 'Lab Session' | 'Seminar';
  status?: 'In Progress' | 'Upcoming' | 'Completed';
  section?: string;
  enrolled?: number;
  beaconStatus?: string;
}

export interface StudentRequest {
  id: string;
  studentName: string;
  rollNo: string;
  avatar: string;
  type: 'Sick Leave' | 'Athletic On-Duty Exemption' | 'Conference Attendance';
  course: string;
  details: string;
  dateRange: string;
  documentNote: string;
  status: 'pending' | 'approved' | 'declined';
}

export interface RosterStudent {
  id: string;
  number: string;
  name: string;
  rollNo: string;
  attendancePercent: number;
  status: 'P' | 'L' | 'A';
}

export interface CourseMaterial {
  id: string;
  title: string;
  courseCode: string;
  fileSize: string;
  date: string;
  fileType: 'pdf' | 'zip' | 'doc';
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'academic' | 'urgent' | 'system';
  read: boolean;
}
