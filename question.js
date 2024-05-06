function getQuestions(topic) {
  const scienceQuestions = [
    {
      question: "What is the chemical symbol for water?",
      options: {
        1: "H2O",
        2: "CO2",
        3: "O2",
        4: "NaCl",
      },
      correct: 1,
    },
    {
      question: "Who is known as the father of modern physics?",
      options: {
        1: "Isaac Newton",
        2: "Albert Einstein",
        3: "Galileo Galilei",
        4: "Niels Bohr",
      },
      correct: 2,
    },
    {
      question: "What is the process by which plants make their own food?",
      options: {
        1: "Photosynthesis",
        2: "Respiration",
        3: "Fermentation",
        4: "Oxidation",
      },
      correct: 1,
    },
    {
      question: "What is the smallest bone in the human body?",
      options: {
        1: "Stapes",
        2: "Femur",
        3: "Radius",
        4: "Tibia",
      },
      correct: 1,
    },
    {
      question: "What is the powerhouse of the cell?",
      options: {
        1: "Nucleus",
        2: "Mitochondria",
        3: "Endoplasmic reticulum",
        4: "Golgi apparatus",
      },
      correct: 2,
    },
    {
      question: "What is the Earth's primary source of energy?",
      options: {
        1: "Nuclear energy",
        2: "Wind energy",
        3: "Solar energy",
        4: "Geothermal energy",
      },
      correct: 3,
    },
    {
      question: "What is the freezing point of water in Celsius?",
      options: {
        1: "0°C",
        2: "100°C",
        3: "-273.15°C",
        4: "37°C",
      },
      correct: 1,
    },
    {
      question: "What is the chemical symbol for iron?",
      options: {
        1: "Ir",
        2: "Fe",
        3: "Au",
        4: "Pb",
      },
      correct: 2,
    },
    {
      question: "What is the largest organ in the human body?",
      options: {
        1: "Brain",
        2: "Liver",
        3: "Skin",
        4: "Heart",
      },
      correct: 3,
    },
    {
      question: "What is the chemical formula for table salt?",
      options: {
        1: "NaCl",
        2: "H2O",
        3: "CO2",
        4: "C6H12O6",
      },
      correct: 1,
    },
  ];

  const generalKnowledgeQuestions = [
    {
      question: "What is the capital of France?",
      options: {
        1: "Paris",
        2: "London",
        3: "Berlin",
        4: "Rome",
      },
      correct: 1,
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: {
        1: "Harper Lee",
        2: "Mark Twain",
        3: "Charles Dickens",
        4: "Jane Austen",
      },
      correct: 1,
    },
    {
      question: "What is the chemical symbol for gold?",
      options: {
        1: "Au",
        2: "Ag",
        3: "Fe",
        4: "Cu",
      },
      correct: 1,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: {
        1: "Leonardo da Vinci",
        2: "Vincent van Gogh",
        3: "Pablo Picasso",
        4: "Michelangelo",
      },
      correct: 1,
    },
    {
      question: "How many continents are there?",
      options: {
        1: "7",
        2: "5",
        3: "6",
        4: "8",
      },
      correct: 1,
    },
    {
      question: "What is the largest planet in our solar system?",
      options: {
        1: "Jupiter",
        2: "Saturn",
        3: "Neptune",
        4: "Earth",
      },
      correct: 1,
    },
    {
      question: "Who was the first person to step on the moon?",
      options: {
        1: "Neil Armstrong",
        2: "Buzz Aldrin",
        3: "Michael Collins",
        4: "Yuri Gagarin",
      },
      correct: 1,
    },
    {
      question: "What is the currency of Japan?",
      options: {
        1: "Yen",
        2: "Dollar",
        3: "Euro",
        4: "Pound",
      },
      correct: 1,
    },
    {
      question: "In what year did World War II end?",
      options: {
        1: "1945",
        2: "1918",
        3: "1939",
        4: "1941",
      },
      correct: 1,
    },
    {
      question: "Who is the current President of the United States?",
      options: {
        1: "Joe Biden",
        2: "Donald Trump",
        3: "Barack Obama",
        4: "George W. Bush",
      },
      correct: 1,
    },
  ];
  const historyQuestions = [
    {
      question: "When did the American Civil War end?",
      options: {
        1: "1865",
        2: "1776",
        3: "1812",
        4: "1918",
      },
      correct: 1,
    },
    {
      question: "Who was the first President of the United States?",
      options: {
        1: "George Washington",
        2: "Thomas Jefferson",
        3: "Abraham Lincoln",
        4: "John Adams",
      },
      correct: 1,
    },
    {
      question: "What year did the Titanic sink?",
      options: {
        1: "1912",
        2: "1908",
        3: "1920",
        4: "1930",
      },
      correct: 1,
    },
    {
      question: "Who was the leader of the Soviet Union during World War II?",
      options: {
        1: "Joseph Stalin",
        2: "Vladimir Lenin",
        3: "Leon Trotsky",
        4: "Nikita Khrushchev",
      },
      correct: 1,
    },
    {
      question: "What year did the Berlin Wall fall?",
      options: {
        1: "1989",
        2: "1975",
        3: "1991",
        4: "1985",
      },
      correct: 1,
    },
    {
      question:
        "Who was the last Queen of France before the French Revolution?",
      options: {
        1: "Marie Antoinette",
        2: "Catherine de' Medici",
        3: "Isabella of Bavaria",
        4: "Anne of Austria",
      },
      correct: 1,
    },
    {
      question:
        "Who was the first female Prime Minister of the United Kingdom?",
      options: {
        1: "Margaret Thatcher",
        2: "Theresa May",
        3: "Indira Gandhi",
        4: "Angela Merkel",
      },
      correct: 1,
    },
    {
      question: "What event marked the beginning of World War I?",
      options: {
        1: "Assassination of Archduke Franz Ferdinand",
        2: "Bombing of Pearl Harbor",
        3: "Treaty of Versailles",
        4: "Battle of the Bulge",
      },
      correct: 1,
    },
    {
      question: "Who was the first emperor of Rome?",
      options: {
        1: "Augustus",
        2: "Julius Caesar",
        3: "Nero",
        4: "Caligula",
      },
      correct: 1,
    },
    {
      question: "Who wrote 'The Communist Manifesto'?",
      options: {
        1: "Karl Marx and Friedrich Engels",
        2: "Vladimir Lenin",
        3: "Joseph Stalin",
        4: "Mao Zedong",
      },
      correct: 1,
    },
  ];

  const geographyQuestions = [
    {
      question: "What is the longest river in the world?",
      options: {
        1: "Nile",
        2: "Amazon",
        3: "Yangtze",
        4: "Mississippi",
      },
      correct: 2,
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: {
        1: "China",
        2: "Japan",
        3: "India",
        4: "Korea",
      },
      correct: 2,
    },
    {
      question: "What is the highest mountain in Africa?",
      options: {
        1: "Mount Kilimanjaro",
        2: "Mount Everest",
        3: "Mount McKinley",
        4: "Mount Elbrus",
      },
      correct: 1,
    },
    {
      question: "Which continent is the largest by land area?",
      options: {
        1: "Asia",
        2: "Africa",
        3: "North America",
        4: "Europe",
      },
      correct: 1,
    },
    {
      question: "What is the capital of Australia?",
      options: {
        1: "Canberra",
        2: "Sydney",
        3: "Melbourne",
        4: "Perth",
      },
      correct: 1,
    },
    {
      question: "In which country is the Great Barrier Reef located?",
      options: {
        1: "Australia",
        2: "Indonesia",
        3: "Brazil",
        4: "Mexico",
      },
      correct: 1,
    },
    {
      question: "What is the smallest country in the world by land area?",
      options: {
        1: "Vatican City",
        2: "Monaco",
        3: "Nauru",
        4: "San Marino",
      },
      correct: 1,
    },
    {
      question: "What is the northernmost capital city in the world?",
      options: {
        1: "Reykjavik",
        2: "Oslo",
        3: "Helsinki",
        4: "Stockholm",
      },
      correct: 1,
    },
    {
      question: "Which desert is the largest in the world?",
      options: {
        1: "Sahara",
        2: "Gobi",
        3: "Arabian",
        4: "Antarctic",
      },
      correct: 1,
    },
    {
      question: "Which ocean is the largest by surface area?",
      options: {
        1: "Pacific Ocean",
        2: "Atlantic Ocean",
        3: "Indian Ocean",
        4: "Southern Ocean",
      },
      correct: 1,
    },
  ];

  const technologyQuestions = [
    {
      question: "Who is the founder of Apple Inc.?",
      options: {
        1: "Steve Jobs",
        2: "Bill Gates",
        3: "Mark Zuckerberg",
        4: "Larry Page",
      },
      correct: 1,
    },
    {
      question: "What does 'www' stand for in a website address?",
      options: {
        1: "World Wide Web",
        2: "Web Wide World",
        3: "Wide Web World",
        4: "World Web Wide",
      },
      correct: 1,
    },
    {
      question: "What is the programming language used to build web pages?",
      options: {
        1: "HTML",
        2: "CSS",
        3: "JavaScript",
        4: "Python",
      },
      correct: 1,
    },
    {
      question: "Which company developed the Android operating system?",
      options: {
        1: "Google",
        2: "Apple",
        3: "Microsoft",
        4: "Samsung",
      },
      correct: 1,
    },
    {
      question: "What does CPU stand for?",
      options: {
        1: "Central Processing Unit",
        2: "Computer Processing Unit",
        3: "Central Processor Unit",
        4: "Computer Processor Unit",
      },
      correct: 1,
    },
    {
      question:
        "Which social media platform is known for its character limit per tweet?",
      options: {
        1: "Twitter",
        2: "Facebook",
        3: "Instagram",
        4: "LinkedIn",
      },
      correct: 1,
    },
    {
      question: "What is the main function of a firewall in computer networks?",
      options: {
        1: "To block unauthorized access",
        2: "To speed up internet connection",
        3: "To store data securely",
        4: "To increase battery life",
      },
      correct: 1,
    },
    {
      question: "What does USB stand for?",
      options: {
        1: "Universal Serial Bus",
        2: "Unified System Board",
        3: "User System Backup",
        4: "Underground Service Bunker",
      },
      correct: 1,
    },
    {
      question: "What is the name of the first computer virus?",
      options: {
        1: "Creeper",
        2: "ILOVEYOU",
        3: "Melissa",
        4: "Brain",
      },
      correct: 1,
    },
    {
      question: "What does HTML stand for?",
      options: {
        1: "Hypertext Markup Language",
        2: "Hyperlink and Text Markup Language",
        3: "Highly Technical Markup Language",
        4: "Hypertext Markup Leveler",
      },
      correct: 1,
    },
  ];

  const foodAndDrinkQuestions = [
    {
      question: "What is the main ingredient in guacamole?",
      options: {
        1: "Avocado",
        2: "Tomato",
        3: "Onion",
        4: "Lemon",
      },
      correct: 1,
    },
    {
      question: "What is the primary ingredient in hummus?",
      options: {
        1: "Chickpeas",
        2: "Lentils",
        3: "Black beans",
        4: "Quinoa",
      },
      correct: 1,
    },
    {
      question: "What type of food is sushi?",
      options: {
        1: "Japanese",
        2: "Chinese",
        3: "Korean",
        4: "Thai",
      },
      correct: 1,
    },
    {
      question: "What is the national dish of Spain?",
      options: {
        1: "Paella",
        2: "Tacos",
        3: "Sushi",
        4: "Curry",
      },
      correct: 1,
    },
    {
      question: "Which country is famous for its pasta dishes?",
      options: {
        1: "Italy",
        2: "France",
        3: "Greece",
        4: "China",
      },
      correct: 1,
    },
    {
      question: "What is the main ingredient in risotto?",
      options: {
        1: "Rice",
        2: "Pasta",
        3: "Barley",
        4: "Quinoa",
      },
      correct: 1,
    },
    {
      question: "What is the traditional meat used in a BLT sandwich?",
      options: {
        1: "Bacon",
        2: "Beef",
        3: "Chicken",
        4: "Turkey",
      },
      correct: 1,
    },
    {
      question: "Which alcoholic beverage is made from fermented grapes?",
      options: {
        1: "Wine",
        2: "Beer",
        3: "Whiskey",
        4: "Vodka",
      },
      correct: 1,
    },
    {
      question: "What is the main ingredient in a margarita cocktail?",
      options: {
        1: "Tequila",
        2: "Rum",
        3: "Vodka",
        4: "Gin",
      },
      correct: 1,
    },
    {
      question:
        "Which type of tea is known for its strong flavor and dark color?",
      options: {
        1: "Black tea",
        2: "Green tea",
        3: "White tea",
        4: "Herbal tea",
      },
      correct: 1,
    },
  ];

  const environmentQuestions = [
    {
      question: "What is the main cause of global warming?",
      options: {
        1: "Greenhouse gas emissions",
        2: "Deforestation",
        3: "Pollution",
        4: "Overpopulation",
      },
      correct: 1,
    },
    {
      question:
        "What is the process by which carbon dioxide is removed from the atmosphere?",
      options: {
        1: "Photosynthesis",
        2: "Respiration",
        3: "Decomposition",
        4: "Combustion",
      },
      correct: 1,
    },
    {
      question: "Which of the following is a renewable energy source?",
      options: {
        1: "Solar",
        2: "Coal",
        3: "Natural gas",
        4: "Oil",
      },
      correct: 1,
    },
    {
      question:
        "What is the term for the gradual increase in the Earth's average temperature?",
      options: {
        1: "Global warming",
        2: "Climate change",
        3: "Ozone depletion",
        4: "Greenhouse effect",
      },
      correct: 1,
    },
    {
      question: "Which gas is primarily responsible for ozone depletion?",
      options: {
        1: "Chlorofluorocarbons (CFCs)",
        2: "Carbon dioxide (CO2)",
        3: "Methane (CH4)",
        4: "Nitrous oxide (N2O)",
      },
      correct: 1,
    },
    {
      question: "What is the term for the loss of species from an ecosystem?",
      options: {
        1: "Extinction",
        2: "Deforestation",
        3: "Pollution",
        4: "Erosion",
      },
      correct: 1,
    },
    {
      question: "Which of the following is a greenhouse gas?",
      options: {
        1: "Carbon dioxide",
        2: "Oxygen",
        3: "Nitrogen",
        4: "Argon",
      },
      correct: 1,
    },
    {
      question: "What is the primary cause of ocean acidification?",
      options: {
        1: "Increased carbon dioxide levels",
        2: "Industrial pollution",
        3: "Deforestation",
        4: "Overfishing",
      },
      correct: 1,
    },
    {
      question:
        "What is the term for the destruction of forests for agricultural purposes?",
      options: {
        1: "Deforestation",
        2: "Reforestation",
        3: "Afforestation",
        4: "Desertification",
      },
      correct: 1,
    },
    {
      question: "What is the main cause of ocean pollution?",
      options: {
        1: "Plastic waste",
        2: "Industrial runoff",
        3: "Oil spills",
        4: "Sewage discharge",
      },
      correct: 1,
    },
  ];

  switch (topic) {
    case "science":
      return scienceQuestions;
    case "general":
      return generalKnowledgeQuestions;
    case "history":
      return historyQuestions;
    case "geography":
      return geographyQuestions;
    case "technology":
      return technologyQuestions;
    case "food":
      return foodAndDrinkQuestions;
    case "environment":
      return environmentQuestions;
    default:
      break;
  }
}

export default getQuestions;
