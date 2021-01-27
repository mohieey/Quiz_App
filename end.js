let username = document.getElementById('username');
let saveScoreBtn = document.getElementById('savescorebtn');
let latestScore = localStorage.getItem('latestscore');
let finalScore = document.getElementById('finalscore');
let highScores = JSON.parse(localStorage.getItem('highscores')) || [];


finalScore.innerText = latestScore;
username.addEventListener('mouseout', function() {
    saveScoreBtn.disabled = (username.value == '');
});



function saveScore() {


    const fscore = {
        score: latestScore,
        name: username.value
    };
    highScores.push(fscore);
    //=================================================================
    highScores.sort((a, b) => b.score - a.score);
    //=================================================================
    highScores.splice(10);
    localStorage.setItem('highscores', JSON.stringify(highScores));
}