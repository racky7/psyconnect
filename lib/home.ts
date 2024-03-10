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
