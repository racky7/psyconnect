type DOCTOR_DATA_TYPE = {
  name: string;
  degree: string;
  specialization: string[];
  image?: string;
};

export const DOCTOR_DATA: DOCTOR_DATA_TYPE[] = [
  {
    name: "Srimoyee Roy",
    degree: "Masters in Psychology",
    specialization: [
      "Sleep Issues",
      "Phobia",
      "Sexual Issues",
      "Depression",
      "Anxiety",
      "Stress",
    ],
    image: "psyconnect/psyconnect/c2rddjbo9yu3t6usilsc",
  },
  {
    name: "Aarav Patel",
    degree: "Bachelor in Psychology",
    specialization: ["Depression", "Anxiety", "Stress"],
    image: "psyconnect/psyconnect/dc4yvzxcc6o4y0bwlapu",
  },
  {
    name: "Ishaan Gupta",
    degree: "Doctorate in Clinical Psychology",
    specialization: ["Phobia", "Depression", "Anxiety"],
    image: "psyconnect/psyconnect/g72tneh0o8pvtm8hl5vk",
  },
  {
    name: "Ananya Singh",
    degree: "Masters in Counseling Psychology",
    specialization: ["Depression", "Anxiety", "Stress"],
    image: "psyconnect/psyconnect/davmwzk0hkv2raqqnzdl",
  },
  {
    name: "Aarohi Sharma",
    degree: "Bachelor in Psychology",
    specialization: ["Sleep Issues", "Depression", "Anxiety"],
    image: "psyconnect/psyconnect/fjolzmys8dsxdfmoaotv",
  },
  {
    name: "Rohan Deshmukh",
    degree: "Masters in Counseling Psychology",
    specialization: ["Depression", "Anxiety", "Stress"],
    image: "psyconnect/psyconnect/hca624uz5ah7lbl8mgmh",
  },
  {
    name: "Aditi Joshi",
    degree: "Doctorate in Clinical Psychology",
    specialization: ["Phobia", "Depression", "Anxiety"],
  },
  {
    name: "Priya Mishra",
    degree: "Doctorate in Clinical Psychology",
    specialization: ["Phobia", "Depression", "Anxiety"],
    image: "psyconnect/psyconnect/jg4yzp3p7bhofo3ukosx",
  },
  {
    name: "Aryan Khanna",
    degree: "Bachelor in Psychology",
    specialization: ["Depression", "Anxiety", "Stress"],
    image: "psyconnect/psyconnect/vvo2tace5swhhqjs0x9q",
  },
  {
    name: "Diya Reddy",
    degree: "Masters in Counseling Psychology",
    specialization: ["Sleep Issues", "Depression", "Anxiety"],
    image: "psyconnect/psyconnect/wyikidn0fql4dzqxaxji",
  },
];

export const CLOUDINARY_BASE_URL =
  "https://res.cloudinary.com/digf8dtoq/image/upload/v1710101031";

export type Reply = {
  reply: string;
  repliedBy: string;
  date: string;
  image: string;
};

export type Question = {
  question: string;
  description: string;
  postedBy: string;
  date: string;
  image: string;
  replies: Reply[];
};

export type QnaData = Question[];

export const QNA_DATA: QnaData = [
  {
    question: "How can I manage anxiety attacks?",
    description:
      "I often find myself overwhelmed by anxiety attacks. Can someone suggest effective coping mechanisms?",
    postedBy: "Concerned Soul",
    date: "2 days ago",
    image: "male_user",
    replies: [
      {
        reply:
          "Practicing deep breathing exercises has helped me during anxiety attacks. It's important to focus on your breath and try to stay grounded.",
        repliedBy: "CalmMind",
        date: "1 day ago",
        image: "therapist",
      },
      {
        reply:
          "I've found journaling to be really helpful. Writing down my thoughts during an attack helps me understand and manage them better.",
        repliedBy: "InkedDreams",
        date: "1 day ago",
        image: "female_user",
      },
    ],
  },
  {
    question: "Is it normal to feel guilty after seeking help for depression?",
    description:
      "I finally sought help for my depression, but now I can't shake this feeling of guilt. Is this normal?",
    postedBy: "SeekingSolace",
    date: "1 week ago",
    image: "female_user",
    replies: [
      {
        reply:
          "Absolutely normal! It's common to feel guilty for taking care of ourselves, especially when we've been struggling for so long. Remember, seeking help is a brave step towards healing.",
        repliedBy: "EmpatheticSoul",
        date: "6 days ago",
        image: "therapist",
      },
      {
        reply:
          "I felt the same way when I started therapy. But over time, I realized that prioritizing my mental health was essential for my well-being. Be kind to yourself, you deserve support.",
        repliedBy: "HealingHeart",
        date: "5 days ago",
        image: "male_user",
      },
    ],
  },
  {
    question: "How do I deal with intrusive thoughts?",
    description:
      "Intrusive thoughts are taking over my mind, and I don't know how to deal with them. Any advice?",
    postedBy: "LostMind",
    date: "3 weeks ago",
    image: "female_user",
    replies: [
      {
        reply:
          "I've struggled with intrusive thoughts for years. Therapy has helped me learn to recognize them for what they are and not let them control me. Remember, you are not your thoughts.",
        repliedBy: "MindfulSoul",
        date: "2 weeks ago",
        image: "therapist",
      },
      {
        reply:
          "Distraction techniques work well for me. When intrusive thoughts arise, I try to shift my focus to something engaging, like a hobby or a favorite activity.",
        repliedBy: "DistractedMind",
        date: "2 weeks ago",
        image: "male_user",
      },
    ],
  },
];
