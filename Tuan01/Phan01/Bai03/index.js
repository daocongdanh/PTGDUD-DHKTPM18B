function calculateAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

const dolphinsScore1 = calculateAverage(96, 108, 89);
const koalasScore1 = calculateAverage(88, 91, 110);

const dolphinsScoreBonus1 = calculateAverage(97, 112, 101);
const koalasScoreBonus1 = calculateAverage(109, 95, 123);

const dolphinsScoreBonus2 = calculateAverage(97, 112, 101);
const koalasScoreBonus2 = calculateAverage(109, 95, 106);

function determineWinner(dolphinsAvg, koalasAvg) {
  if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log("Dolphins thắng");
  } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    console.log("Koalas thắng");
  } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log("Hòa");
  }
  else console.log("Không có đội thắng");
}

console.log("Test Data 1:");
determineWinner(dolphinsScore1, koalasScore1);

console.log("Test Data Bonus 1:");
determineWinner(dolphinsScoreBonus1, koalasScoreBonus1);

console.log("Test Data Bonus 2:");
determineWinner(dolphinsScoreBonus2, koalasScoreBonus2);