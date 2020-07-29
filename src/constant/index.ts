export const questions = [
  {
    id: "1",
    question: "Whats your name?",
    type: "input",
    options: [""],
  },
  {
    id: "2",
    question: "How often do you drink?",
    type: "single_choice",
    answer: null,
    options: [
      {
        id: 1,
        text: "once a week",
        points: 6,
      },
      {
        id: 2,
        text: "twice a week",
        points: 4,
      },
      {
        id: 3,
        text: "three times a week",
        points: 2,
      },
      {
        id: 4,
        text: "everyday",
        points: 0,
      },
    ],
  },
  {
    id: "3",
    question: "How much do you drink per week?",
    type: "single_choice",
    options: [
      {
        text: "1 unit",
        points: 6,
      },
      {
        text: "3 unit",
        points: 4,
      },
      {
        text: "6 unit",
        points: 2,
      },
      {
        text: "12 unit",
        points: 0,
      },
    ],
  },
  {
    id: "4",
    question: "How much do you spend on alcohol per week?",
    type: "single_choice",
    options: [
      {
        text: "10 pounds",
        points: 6,
      },
      {
        text: "20 pounds",
        points: 4,
      },
      {
        text: "30 pounds",
        points: 2,
      },
      {
        text: "50 pounds",
        points: 0,
      },
    ],
  },
  {
    id: "5",
    question: "Do you drink alone?",
    type: "single_choice",
    options: [
      {
        text: "never",
        points: 6,
      },
      {
        text: "most of the time",
        points: 4,
      },
      {
        text: "occasionally",
        points: 2,
      },
      {
        text: "always",
        points: 0,
      },
    ],
  },
];
