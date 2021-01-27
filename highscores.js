let highScoresList = document.getElementById('highscoreslist');
let highScores = JSON.parse(localStorage.getItem('highscores')) || [];
// console.log(highScores)

//========================================================================================
highScoresList.innerHTML = highScores.map(score => {
    return '<li class="high-score">' + score.name + '-' + score.score + '</li>';
}).join('');

//========================================================================================