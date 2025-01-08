
function calculateBMI(mass, height) {
  return mass / (height ** 2);
}

function compareBMI(markMass, markHeight, johnMass, johnHeight) {
  const markBMI = calculateBMI(markMass, markHeight);
  const johnBMI = calculateBMI(johnMass, johnHeight);
  const markHigherBMI = markBMI > johnBMI;

  console.log(`Mark's BMI: ${markBMI.toFixed(2)}`);
  console.log(`John's BMI: ${johnBMI.toFixed(2)}`);
  console.log(`Does Mark have a higher BMI? ${markHigherBMI}`);
  console.log('----------------------------------');
}

console.log("Data 1:");
compareBMI(78, 1.69, 92, 1.95);

console.log("Data 2:");
compareBMI(95, 1.88, 85, 1.76);