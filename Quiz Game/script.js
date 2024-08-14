let currentStep = 0;
let currentPersonality = 0;
let showingFinalImage = false;

const personalities = [
    {
        name: "Alan Turing",
        images: ["ATfull.jpg", "ATquat.jpg", "AThalf.jpg", "ATclear.jpg"],
        quizData: [
            {
                question: "This individual is known for breaking which wartime code?",
                options: ["Morse Code", "Caesar Cipher", "Enigma Code"],
                correctAnswer: 2
            },
            {
                question: "The Father of Morden Computer Science",
                options: ["Alan Turing", "Charles Babbage", "Ada Lovelace"],
                correctAnswer: 0
            },
            {
                question: "This person laid the groundwork for which computing concept?",
                options: ["Machine Learning", "Theory of Computation", "Cloud Computing"],
                correctAnswer: 1
            }
           
           
        ]
    },
    {
        name: "Abdul Kalam",
        images: ["AKfull.jpg", "AKquat.jpg", "AKhalf.jpg", "AKclear.jpg"],
        quizData: [
            {
                question: "Who was the principal architect of India's civilian space program and military missile development efforts?",
                options: ["Vikram Sarabhai", "Homi J. Bhabha", "Dr. APJ Abdul Kalam"],
                correctAnswer: 2
            },
            {
                question: "He also Known as",
                options: ["Dad of indian Aerospace", "Inspiration of Youths", "Missile Man of India"],
                correctAnswer: 2
            },
            {
                question: "In which year India's Porkhran-II nuclear tests happened",
                options: ["1999", "1998", "1997"],
                correctAnswer: 1
            }
        ]
    },
    {
        name: "Elon Musk",
        images: ["EMfull.jpg", "EMquat.jpg", "EMhalf.jpg", "EMclear.jpg"],
        quizData: [
            {
                question: "Which company was co-founded by this entrepreneur?",
                options: ["Amazon", "Tesla", "Google"],
                correctAnswer: 1
            },
            {
                question: "This entrepreneur is the CEO of which space exploration company?",
                options: ["Blue Origin", "NASA", "SpaceX"],
                correctAnswer: 2
            },
            {
                question: "Which of the following companies is also founded by this entrepreneur?",
                options: ["Neuralink", "IBM", "Facebook"],
                correctAnswer: 0
            }
        ]
    },
    {
        name: "Ratan Tata",
        images: ["RTfull.jpg", "RTquat.jpg", "RThalf.jpg", "RTclear.jpg"],
        quizData: [
            {
                question: "This Company has donated Rs.829,734 crore",
                options: ["Reliance", "Tata Group", "Aditya Birla Group"],
                correctAnswer: 1
            },
            {
                question: "This industrialist is known for his contributions to which field?",
                options: ["Automobile Industry", "Pharmaceuticals", "Fashion"],
                correctAnswer: 0
            },
            
            {
                question: "Which car brand was launched under this leader's guidance?",
                options: ["Suzuki", "Nano", "Honda"],
                correctAnswer: 1
            },
           
        ]
    },
    {
        name: "Mark Zuckerberg",
        images: ["MZfull.jpg", "MZquat.jpg", "MZhalf.jpg", "MZclear.jpg"],
        quizData: [
            {
                question: "This individual is the founder of which Facebook platform?",
                options: ["Reid Hoffmen", "Mark Zuckerberg", "Elon Musk"],
                correctAnswer: 1
            },
            {
                question: "What is the name of this company's parent organization?",
                options: ["Alphabet", "Meta", "Apple"],
                correctAnswer: 1
            },
            {
                question: "This person was a student at which university?",
                options: ["Stanford", "MIT", "Harvard"],
                correctAnswer: 2
            }
        ]
    },
    {
        name: "Mahatma Gandhi",
        images: ["MGfull.jpg", "MGquat.jpg", "MGhalf.jpg", "MGclear.jpg"],
        quizData: [
            {
                question: "This individual is known as the father of which nation?",
                options: ["South Africa", "India", "USA"],
                correctAnswer: 1
            },
            {
                question: "Which philosophy is most associated with this person?",
                options: ["Non-violence", "Communism", "Capitalism"],
                correctAnswer: 0
            },
            {
                question: "Which movement did this person lead?",
                options: ["Civil Rights Movement", "Independence Movement in India", "The Renaissance"],
                correctAnswer: 1
            }
        ]
    },
    {
        name: "Sachin Tendulkar",
        images: ["Sfull.jpg","Squat.jpg","Shalf.jpg","Sclear.jpg"],
            quizData: [
             {
        question: "This batsman was affected by tennis elbow injury because of his bat weight, 'What is the bat weight of that batsman'",
        options: ["2KG", "1.47KG", "1.20KG"],
        correctAnswer: 1  
    },
    {
        question: "He is the first cricketer to score 100 centuries in the world",
        options: ["Virat Kholi", "Don Bradman", "Sachin Tendulkar"],
        correctAnswer: 2
    },
    {
        question: "The nickname of this person",
        options: ["God Of Cricket", "Master Blaster", "Sachu"],
        correctAnswer: 1
    }
        ]
    },
    {
        name: "Actor Vijay",
        images: ["VJfull.jpg", "VJquat.jpg", "VJhalf.jpg", "Vclear.jpg"],
        quizData: [
            {
                question: "How South indian film industry is called?",
                options: ["Bollywood", "Tollywood", "Kollywood"],
                correctAnswer: 2
            },
            {
                question: "This actor starred in which blockbuster movie?",
                options: ["Baahubali", "Mersal", "Dangal"],
                correctAnswer: 1
            },
            {
                question: "This person is often referred to by what nickname by his fans?",
                options: ["Thala", "Thalapathy", "Superstar"],
                correctAnswer: 1
            }
        ]
    },
    {
        name: "Lionel Messi",
        images: ["LMfull.jpg", "LMquat.jpg", "LMhalf.jpg", "LMclear.jpg"],
        quizData: [
            {
                question: "Which sport has a leauge team name as PSG?",
                options: ["Basketball", "Cricket", "Football"],
                correctAnswer: 2
            },
            {
                question: "This athlete has won the 7 Ballon d'Or how many times?",
                options: ["Christiano Ronaldo", "Lionel Messi", "Diago Maradona"],
                correctAnswer: 1
            },
            {
                question: "This person played for which famous football club?",
                options: ["Real Madrid", "FC Barcelona", "Manchester United"],
                correctAnswer: 1
            }
        ]
    },
    {
        name: "Leonardo da Vinci",
        images: ["DAfull.jpg", "DAquat.jpg", "DAhalf.jpg", "DAclear.jpg"],
        quizData: [
            {
                question: "This person is famous for painting which iconic artwork?",
                options: ["The Starry Night", "The Scream", "Mona Lisa"],
                correctAnswer: 2
            },
            {
                question: "This individual was a polymath in which historical period?",
                options: ["Renaissance", "Baroque", "Modern Era"],
                correctAnswer: 0
            },
            {
                question: "Which of the following was a contribution made by this figure?",
                options: ["Theory of Relativity", "Vitruvian Man", "E=mc²"],
               correctAnswer: 1
            }
        ]
    },
    {
        name: "Charles Babbage",
        images: ["CHfull.jpg", "CHquat.jpg", "CHhalf.jpg", "CHclear.jpg"],
        quizData: [
            {
                question: "This individual is often referred to as the 'father' of which field?",
                options: ["Modern Physics", "Artificial Intelligence", "Computing"],
                correctAnswer: 2
            },
            {
                question: "This person designed which early mechanical computer?",
                options: ["Analytical Engine", "ENIAC", "Turing Machine"],
                correctAnswer: 0
            },
            {
                question: "Which concept is most associated with this figure's work?",
                options: ["Quantum Mechanics", "Binary Code", "Programmable Computers"],
                correctAnswer: 2
            }
        ]
    }
];

function checkAnswer(selectedIndex) {
    const quizData = personalities[currentPersonality].quizData;
    const correctIndex = quizData[currentStep].correctAnswer;

    if (selectedIndex === correctIndex) {
        currentStep++;
        if (currentStep === quizData.length) {
            showingFinalImage = true;
            updateImage();
            document.getElementById("options").style.display = "none";
            document.getElementById("next-button").style.display = "block";
        } else {
            updateImage();
            updateQuestion();
        }
    } else {
        alert("Wrong answer, try again!");
    }
}

function updateImage() {
    const images = personalities[currentPersonality].images;
    if (showingFinalImage) {
        document.getElementById("quiz-image").src = images[images.length - 1];
    } else {
        document.getElementById("quiz-image").src = images[currentStep];
    }
}

function updateQuestion() {
    const quizData = personalities[currentPersonality].quizData;
    if (currentStep < quizData.length) {
        document.getElementById("question-text").textContent = quizData[currentStep].question;
        const buttons = document.querySelectorAll("#options button");
        buttons.forEach((button, index) => {
            button.textContent = quizData[currentStep].options[index];
            button.onclick = () => checkAnswer(index); // Attach event listener with index
        });
    }
}

function nextPersonality() {
    currentStep = 0;
    currentPersonality++;

    if (currentPersonality < personalities.length) {
        showingFinalImage = false;
        updateImage();
        updateQuestion();
        document.getElementById("options").style.display = "block";
        document.getElementById("next-button").style.display = "none";
    } else {
        document.getElementById("question-text").textContent = "Congratulations! You've revealed all the images!";
        document.getElementById("options").style.display = "none";
        document.getElementById("next-button").style.display = "none";
    }
}

window.onload = function() {
    updateImage();
    updateQuestion();
};