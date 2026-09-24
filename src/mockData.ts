import { CourseMaterial, Lecture, NotificationItem, RosterStudent, StudentRequest } from './types';

export const ASSETS = {
  // Institutional Crest Logos
  universityCrest: 'https://lh3.googleusercontent.com/aida/AEtjO1VQs0GA7G5A0q1Gf27lIut4zdr8pYmaIKV_-qPz_cQeJAYK27qdwzw282OXUSjHdDmVXpPcrWaCMHbZk1qQJrlkFwb2BTnoAYZDud4XaMcqPzF-tQpHJ6bHaWoB4PZ-_nmd4goZqivYr3nUtEG-NYMqa_lj78uQEFRBw7dDq09N5ff9gzd3Kqfi8ANM8Pici3QZAOdMuGX-oUXGpgpqZHeWje_G1_r6j0EPb139r3cQwZbCXEoytSMbEg',
  crestSeal: 'https://lh3.googleusercontent.com/aida/AEtjO1U4TTnCXRkZzB5KoTJkfTubLjwLIms1RMSpDjSax4J6E8ujhgvFMidrD2zz7RC21BImazpI-gGX6VltHAHVg4j8PyPEjBta0--vCqC9Jr8qKOklmRHBQ6tJT7a0S6YCvi4YhJ5CF-BNcacUSIfs946twKpb5Ajf2i-z2RRQXwSpI_Bq87AWMnufWeU8abZLKMoUEnqUGBAINfxqCHmqC8XKHfX1WT9mMZpUv99DJhrb1O9_8JA0kDiLMgk',
  badgeCrest: 'https://lh3.googleusercontent.com/aida/AEtjO1W7BWfcbppgiApAgXrQbEt10ZxJRItt-a_kG4xye5yFKS-1bp0Sd2nvJVKEl9pUfcT8-_QDWdScS-naJUGmqoHxbxFPIGv95dOrPQjYqt2ge7Bja6hexOEab9dEU7dwO1DaMm_AVslP4jfMs9zjM8dr7c-StfPvLpfGy4wewaosqksbWdJRsSsnUXRbb9uswcvCas6O2_gOfKHNoTxe3A_LG404ZaFFPAIo7GW2VIudMkuUWq-RvoutFg',

  // People portraits
  sarahAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrQvT7HZSDFE_1rqz9WGDKzfQ4pASFFkkujkRwg4y35X28RLwpFakbGxG-2rLUGtxv96NHIOBbxTfZkafqYctXCSWkwrO5wF8MhIt9-7Hrofe7fu9a1b7WWAx7p_jpNBIEEbVW0StMr3y_Hy4dH6xQkgLal3Jc1v93WTahezKvr5CuSqLfRldo6n-211ZIpH6VkmPVK7HCYTH6ThAbnaSXxXqR6HjvBb0wbuapVZEMeMSkrofaWN1s',
  sarahHubAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTb4tKW7utStIDUTfBXU6CHf26_tfBtG9qVnDVmAGdhmukMZuUwlaLCi_TiJwEaGkc1Hw6iH7JSjm365H3FatSGn20TD3PCwlRY9W_LIA_XcwZq4FiFQ8lvrZ5nKj59kXwj6fELDHguMrhLJo4u5quImmNEqFn9VaBgCsctZvfdFkBI01yLWjz06HSkbfwWI4s57cCn7zcA09F4LapyrbrFfhkOHS9osAWviu717LEwGdb9A-ZOng8',
  sarahBadgePhoto: 'https://lh3.googleusercontent.com/aida/AEtjO1UM_BpA-oQXiDNpszW6-P_7DurJuwbTbgpNx8mwgijTMGLpOFoZ71NFTVSkipI8fzMyaQBF9BSeaJtLsIpdSqOHE6SE5gTaqg1O6Lg7TwOqP0at5UfJpwEuk7hhMWoBF-6xYrLVkpfjOoioVwHOh2eFIvZN-Y9vCod8ZqZ7rqjRsOFghBvz3DJYnWlpNfhyjoyb2hYyp9znCyatC9_-Aw7zbDugRGD3nfASH8eJhwaBE40c5RdlacFwq8I',
  julianVance: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQtjo3iMsNaZWDkZkcuaiYGIf9n8iLFuRQXlFcPEXXYN6ynlaIjtNAIdNESa_VBSVeL7ILK8BwEbY1URFQ9Np0akorY4j6JUlHl6nTaZvCr20wjUaRTDTVw-7QeUlhrJDZXNGV7rYTxsSjze8qcBVN-lybNfTdsolVF0WRYgPgOy2MCip5vupFJSnEX2YAVSLfJHqJeKWo_qyQc9W-nWk9uLle8a5yEFXTO2JVZDulZSB2mMVq6_tX',
  marcusVance: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUGgDEYiZ-93M4zROq3dC4wvIdct-kOlAibTE9mRP3KthZ1R9QUyibEHn4CsKEVFyiLMSMCYFBc0SypO2lSz_GkQuomlPO8cRa8D1pFgnnvNIZHBz0mY_gFxLXKwmIYn4pKbp2HOQeaouZHUxTebx074BqrICWWKKR1tk0lO58HBN5LExc_0pIsFbmUHXNlHfwksg0BeSwuMf8BW4XCSoVtFAkOAT_hbLzaesdWQk0HRXdufu3QCUo',
  emilyClarke: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCT0csmkmEjMIteHbPXNM6ENcEjZ3tq_XbteWlQ0f9KfPS2NuvUGg0TwRK5d5mMxPFEVxiUSVF00W8kOcaGuOmd8ruxA0Rpw_3KZyyfFQC-toYsFY4cinp5FcTdAiRMu_XpmIgjPaOPlb-_yYtYB3TThgVzOhoan4Ya14F77RQTMfB3Ur5-IOqX-fI2CNKLhvP1HeUMKtYLtNETGtdcZ5UGu1Mjj7pkajy99YoQ6PVWw__SzM1oDwLe',
  alexRivera: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaxOZQec2AH9Tl52VdYV3Tq-fKqdr0nTpwt7swyZtxrw2Iu_7ZLUS8oBwIigL5Nvjn-tKHqm39VOKhqv6kgV981JGsY3Oh5cfkOpPwg6JB3bQbFfSCzZIg-UnnP3I54NxczpxlTqV471TGjLX605YHjnVX450f7ISEm46tWyd682SyR2dlNLW7C5agveHvjFEti6TqkFMTrsrytEg6U4ak_TRpKaNGd0IWLDXhBeSm85vFuX0UjzW0',
  mayaChen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFbhfjUI9G9LTgYtC8v7eZCdGc9Wt66UAHgMJ-sYdvmev5Z1RijXHYDigYbUmpZ0TdIZgzzZjkfd55sF7B_26vMmR8dLhubR6R8wbyAsTL3B94SbXKoC2D5AP4Zcs9MvsiZ8hXBNAlCAigL_rQ5i6ksd67KGtA9qKs0yn2XyVALdMJYCKZFYCfxSl5Pc7N5fs5o0NCU34QOjA-x8mj35SxprwFeeCNcOW-HMHYyVd5gBMp_wvVzO1W',
};

export const INITIAL_STUDENT_SCHEDULE: Lecture[] = [
  {
    code: 'CS301',
    title: 'Distributed Systems',
    time: '09:30 AM – 11:00 AM',
    room: 'Hall 402',
    instructor: 'Prof. Arthur Vance',
    type: 'Lecture',
    status: 'In Progress',
  },
  {
    code: 'AI304',
    title: 'Deep Learning Foundations',
    time: '11:30 AM – 01:00 PM',
    room: 'Hardware Lab 2',
    instructor: 'Dr. Marcus Thorne',
    type: 'Lab Session',
    status: 'Upcoming',
  },
  {
    code: 'MAT204',
    title: 'Probability & Stochastic Processes',
    time: '02:00 PM – 03:30 PM',
    room: 'Room 208',
    instructor: 'Prof. Evelyn Chen',
    type: 'Lecture',
    status: 'Upcoming',
  },
];

export const INITIAL_LEAVE_REQUESTS: StudentRequest[] = [
  {
    id: 'req-1',
    studentName: 'Marcus Vance',
    rollNo: '22BCS041',
    avatar: ASSETS.marcusVance,
    type: 'Sick Leave',
    course: 'CS301 Distributed Systems',
    details: 'Severe viral flu & fever symptoms under physician care.',
    dateRange: '2 Days (Oct 24 - Oct 25)',
    documentNote: 'Clinic note signed by University Health Centre',
    status: 'pending',
  },
  {
    id: 'req-2',
    studentName: 'Emily Clarke',
    rollNo: '22BCS019',
    avatar: ASSETS.emilyClarke,
    type: 'Athletic On-Duty Exemption',
    course: 'CS301 Distributed Systems',
    details: 'Representing Oxford Collegiate in the National Rowing Regatta finals.',
    dateRange: 'Varsity Rowing Regatta',
    documentNote: 'Sports Council Athletic Certificate Attached',
    status: 'pending',
  },
];

export const INITIAL_ROSTER: RosterStudent[] = [
  { id: '1', number: '01', name: 'Aaron Mitchell', rollNo: '22BCS001', attendancePercent: 92, status: 'P' },
  { id: '2', number: '02', name: 'Bethany Zhao', rollNo: '22BCS002', attendancePercent: 84, status: 'P' },
  { id: '3', number: '03', name: 'Daniel K. Evans', rollNo: '22BCS003', attendancePercent: 68, status: 'A' },
  { id: '4', number: '04', name: 'Elena Rostova', rollNo: '22BCS004', attendancePercent: 95, status: 'P' },
  { id: '5', number: '05', name: 'Farhan Siddiqui', rollNo: '22BCS005', attendancePercent: 78, status: 'L' },
  { id: '6', number: '06', name: 'Sarah J. Adams', rollNo: 'CS21B042', attendancePercent: 88, status: 'P' },
];

export const COURSE_MATERIALS: CourseMaterial[] = [
  {
    id: 'm1',
    title: 'Lecture 18 - Distributed Key-Value Stores.pdf',
    courseCode: 'CS301',
    fileSize: '4.2 MB',
    date: 'Oct 24',
    fileType: 'pdf',
  },
  {
    id: 'm2',
    title: 'Assignment 4 Starter Repository & Guidelines.zip',
    courseCode: 'AI304',
    fileSize: '12.0 MB',
    date: 'Oct 22',
    fileType: 'zip',
  },
  {
    id: 'm3',
    title: 'Midterm Practice Exam & Solutions.pdf',
    courseCode: 'MAT204',
    fileSize: '1.8 MB',
    date: 'Oct 19',
    fileType: 'pdf',
  },
  {
    id: 'm4',
    title: 'B+ Tree Indexing & Buffer Manager Notes.pdf',
    courseCode: 'CS308',
    fileSize: '3.4 MB',
    date: 'Oct 15',
    fileType: 'pdf',
  },
];

export const NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'n1',
    title: 'Classroom Beacon Active',
    message: 'Geo-fence verified for CS301 in Hall 402. Tap to mark attendance.',
    time: '5m ago',
    type: 'academic',
    read: false,
  },
  {
    id: 'n2',
    title: 'Registrar Announcement',
    message: 'Autumn term examination roster published for B.Tech Semester 6.',
    time: '25m ago',
    type: 'urgent',
    read: false,
  },
  {
    id: 'n3',
    title: 'Grading Milestone Posted',
    message: 'Assignment 3 grades for RPC & Message Queues have been updated.',
    time: '2h ago',
    type: 'academic',
    read: true,
  },
  {
    id: 'n4',
    title: 'Bodleian Library Notice',
    message: 'Your hold for "Designing Data-Intensive Applications" is ready.',
    time: 'Yesterday',
    type: 'system',
    read: true,
  },
];
