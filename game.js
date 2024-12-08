document.addEventListener('DOMContentLoaded', (event) => {
    const questions = [
        {
            question: "What's the best way to approach a dog you don't know?",
            answers: {
                a: "Run towards it",
                b: "Move slowly and let it come to you",
                c: "Ignore it completely"
            },
            correctAnswer: "b"
        },
        {
            question: "If a dog barks at you, what should you do?",
            answers: {
                a: "Yell at it to stop",
                b: "Remain calm and avoid eye contact",
                c: "Bark back at the dog"
            },
            correctAnswer: "b"
        },
        {
            question: "What should you do if you feel like a dog might bite you?",
            answers: {
                a: "Stand still and avoid eye contact",
                b: "Run away as fast as you can",
                c: "Try to scare the dog"
            },
            correctAnswer: "a"
        },
        {
            question: "How often should you take your dog to the vet for check-ups?",
            answers: {
                a: "Once a month",
                b: "Once a year",
                c: "Only when it's sick"
            },
            correctAnswer: "b"
        },
        {
            question: "How often should you walk your dog?",
            answers: {
                a: "Once a week",
                b: "Once a day",
                c: "Twice a day"
            },
            correctAnswer: "c"
        },
        {
            question: "What should you do if your dog starts eating something dangerous?",
            answers: {
                a: "Try to pull the item out of its mouth",
                b: "Call your dog and offer a treat to get its attention",
                c: "Panic and yell at the dog"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of the following is a sign of a healthy dog?",
            answers: {
                a: "Shiny coat",
                b: "Lethargy",
                c: "Runny nose"
            },
            correctAnswer: "a"
        },
        {
            question: "How can you tell if your dog is overweight?",
            answers: {
                a: "Feel its ribs without pressing too hard",
                b: "Weigh it every day",
                c: "Judge by the amount of food it eats"
            },
            correctAnswer: "a"
        },
        {
            question: "What should you do if your dog is scared during a thunderstorm?",
            answers: {
                a: "Ignore it",
                b: "Comfort it and provide a safe space",
                c: "Take it outside"
            },
            correctAnswer: "b"
        },
        {
            question: "How should you introduce a new dog to your current dog?",
            answers: {
                a: "Immediately let them play together",
                b: "Allow them to meet in a neutral location first",
                c: "Keep them separated forever"
            },
            correctAnswer: "b"
        },
        {
            question: "What is a sign that your dog may need more exercise?",
            answers: {
                a: "Chewing on furniture",
                b: "Sleeping all the time",
                c: "Refusing to eat"
            },
            correctAnswer: "a"
        },
        {
            question: "When is it important to socialize your dog with other dogs and people?",
            answers: {
                a: "Only when it's fully grown",
                b: "As a puppy",
                c: "Never, it's not important"
            },
            correctAnswer: "b"
        },
        {
            question: "What's the best way to clean your dog's ears?",
            answers: {
                a: "Use a cotton swab",
                b: "Use a dog-safe ear cleaner and cotton ball",
                c: "Pour water directly into the ear"
            },
            correctAnswer: "b"
        },
        {
            question: "What should you do if your dog swallows a foreign object?",
            answers: {
                a: "Wait and see if it passes naturally",
                b: "Induce vomiting immediately",
                c: "Call your vet right away"
            },
            correctAnswer: "c"
        },
        {
            question: "What's the best way to keep your dog from chewing on your furniture?",
            answers: {
                a: "Give it plenty of toys to chew on",
                b: "Spray the furniture with water",
                c: "Yell at it whenever it chews"
            },
            correctAnswer: "a"
        },
        {
            question: "How often should you brush your dog's teeth?",
            answers: {
                a: "Once a year",
                b: "Once a month",
                c: "A few times a week"
            },
            correctAnswer: "c"
        },
        {
            question: "What is an important factor in choosing the right dog food?",
            answers: {
                a: "Price",
                b: "Nutritional value",
                c: "Packaging"
            },
            correctAnswer: "b"
        },
        {
            question: "How can you help your dog lose weight if it's overweight?",
            answers: {
                a: "Increase its daily exercise",
                b: "Feed it more treats",
                c: "Reduce the amount of water it drinks"
            },
            correctAnswer: "a"
        },
        {
            question: "What should you do if your dog has fleas?",
            answers: {
                a: "Ignore it and hope they go away",
                b: "Use flea medication and regularly wash its bedding",
                c: "Shave all its fur off"
            },
            correctAnswer: "b"
        },
        {
            question: "How should you react if a dog growls at you?",
            answers: {
                a: "Retreat slowly and give it space",
                b: "Approach it to show dominance",
                c: "Yell at it to stop"
            },
            correctAnswer: "a"
        },
    ];

    function startGame() {
        const gameContainer = document.getElementById('game');
        const output = [];
        questions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        });
        gameContainer.innerHTML = output.join('');
        const button = document.createElement('button');
        button.textContent = 'Submit';
        button.onclick = showResults;
        gameContainer.appendChild(button);
    }

    function showResults() {
        const answerContainers = document.querySelectorAll('.answers');
        let numCorrect = 0;
        questions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });
        document.getElementById('results').innerHTML = `${numCorrect} out of ${questions.length} correct`;
    }

    document.querySelector('button[onclick="startGame()"]').addEventListener('click', startGame);
});
