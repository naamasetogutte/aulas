const questions = [
    {
        image: 'https://static.vecteezy.com/ti/fotos-gratis/p2/4294092-maca-sobre-fundo-branco-foto.jpg',
        options: ['Apple', 'Banana', 'Orange', 'Grapes'],
        correct: 'Apple'
    },
    {
        image: 'https://thumbs.dreamstime.com/b/gatinho-pequeno-do-gato-no-fundo-branco-isolado-118231952.jpg',
        options: ['Dog', 'Cat', 'Mouse', 'Bird'],
        correct: 'Cat'
    },
    {
        image: 'https://cdn5.colorir.com/desenhos/color/201212/automovel-moderno-veiculos-carros-pintado-por-lili7-1009113.jpg',
        options: ['Bike', 'Car', 'Bus', 'Train'],
        correct: 'Car'
    },
    {
        image: 'https://img.freepik.com/fotos-premium/um-cachorro-com-fundo-branco-e-rosto-marrom-e-preto_771335-53096.jpg',
        options: ['Dog', 'Cat', 'Horse', 'Sheep'],
        correct: 'Dog'
    },
    {
        image: 'https://img.freepik.com/fotos-premium/banana-no-fundo-branco_88281-24.jpg',
        options: ['Apple', 'Banana', 'Orange', 'Grapes'],
        correct: 'Banana'
    },
    {
        image: 'https://static.vecteezy.com/ti/vetor-gratis/p3/16754513-casa-em-fundo-branco-gratis-vetor.jpg',
        options: ['Apartment', 'House', 'Tent', 'Cabin'],
        correct: 'House'
    },
    {
        image: 'https://img.freepik.com/vetores-premium/bola-de-futebol-no-fundo-branco-001_34645-1409.jpg',
        options: ['Bat', 'Ball', 'Racket', 'Glove'],
        correct: 'Ball'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpbnc6tG50FV8E7OxkNP17tURvkh6gKoWNw&s',
        options: ['Notebook', 'Tablet', 'Book', 'Magazine'],
        correct: 'Book'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXSG45__dPDixL2CiW_3KLIUy5RyI9U02kw&s',
        options: ['Flower', 'Tree', 'Bush', 'Grass'],
        correct: 'Tree'
    },
    {
        image: 'https://img.freepik.com/vetores-premium/uma-linha-continua-de-flor-arte-de-desenho-de-linha-unica-folhas-tropicais-planta-botanica-isolada_190024-1813.jpg',
        options: ['Tree', 'Flower', 'Bush', 'Grass'],
        correct: 'Flower'
    },
    {
        image: 'https://img.freepik.com/vetores-premium/desenho-de-bicicleta_119631-231.jpg',
        options: ['Car', 'Bike', 'Bus', 'Train'],
        correct: 'Bike'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHYIChA9UDQULPj5mmerhU577Oa1fXzcOVg&s',
        options: ['Car', 'Boat', 'Plane', 'Helicopter'],
        correct: 'Plane'
    }
];

// Função para embaralhar as opções de uma pergunta
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
}

// Função para embaralhar as questões
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Embaralhar as questões antes de iniciar o jogo
shuffleQuestions(questions);

// Variáveis de controle do jogo
let currentQuestionIndex = 0;
let attempts = 3;
let score = 0; // Variável para armazenar a pontuação

// Event listeners para os botões do menu
document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('credits').addEventListener('click', showCredits);
document.getElementById('back-to-menu').addEventListener('click', backToMenu);
document.getElementById('back-to-menu-from-final-score').addEventListener('click', backToMenu);

// Função para iniciar o jogo
function startGame() {
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    currentQuestionIndex = 0;
    score = 0; // Resetar a pontuação no início do jogo
    loadQuestion();
}

// Função para carregar uma nova pergunta
function loadQuestion() {
    attempts = 3;
    document.getElementById('result-message').textContent = ''; // Limpar mensagem de resultado anterior
    const question = questions[currentQuestionIndex];
    document.getElementById('object-image').src = question.image;
    const options = [...question.options];
    shuffleOptions(options); // Embaralhar as opções
    document.getElementById('option1').textContent = options[0];
    document.getElementById('option2').textContent = options[1];
    document.getElementById('option3').textContent = options[2];
    document.getElementById('option4').textContent = options[3];
    document.querySelectorAll('.option').forEach(button => {
        button.onclick = () => checkAnswer(button.textContent, question.correct);
    });
}

// Função para verificar a resposta do usuário
function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++; // Incrementar pontuação
        document.getElementById('result-message').textContent = 'Correto!';
        document.getElementById('object-image').classList.add('correct');
        setTimeout(() => {
            document.getElementById('object-image').classList.remove('correct');
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                showFinalScore();
            }
        }, 1000);
    } else {
        attempts--;
        if (attempts > 0) {
            document.getElementById('result-message').textContent = `Incorreto! Você tem mais ${attempts} tentativa(s).`;
        } else {
            showGameOver();
        }
    }
}

// Função para exibir a pontuação final
function showFinalScore() {
    document.getElementById('game-container').style.display = 'none';
    const finalScoreContainer = document.getElementById('final-score-container');
    finalScoreContainer.style.display = 'block';
    document.getElementById('final-score-message').textContent = `Você completou o jogo! Sua pontuação: ${score}`;
}

// Função para exibir a mensagem de "Você perdeu"
function showGameOver() {
    document.getElementById('game-container').style.display = 'none';
    const gameOverContainer = document.getElementById('game-over-container');
    gameOverContainer.style.display = 'block';
    document.getElementById('game-over-message').textContent = 'Você perdeu! Você será redirecionado para a tela de início. Em 1...2...3... Segundos';
    setTimeout(backToMenu, 3000); // Redirecionar para o menu após 3 segundos
}

// Função para mostrar a tela de créditos
function showCredits() {
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('credits-container').style.display = 'block';
}

// Função para voltar ao menu inicial
function backToMenu() {
    document.getElementById('credits-container').style.display = 'none';
    document.getElementById('game-over-container').style.display = 'none';
    document.getElementById('final-score-container').style.display = 'none'; // Esconder o contêiner de pontuação final
    document.getElementById('menu-container').style.display = 'block';
}
