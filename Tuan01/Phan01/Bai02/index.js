function calculateBMI(mass, height) {
  return mass / (height ** 2);
}
// Hàm so sánh BMI và in ra thông điệp
function compareBMIWithMessage(markMass, markHeight, johnMass, johnHeight) {
  const markBMI = calculateBMI(markMass, markHeight);
  const johnBMI = calculateBMI(johnMass, johnHeight);

  if (markBMI > johnBMI) {
      console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`);
  } else if (johnBMI > markBMI) {
      console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`);
  } else {
      console.log(`Mark and John have the same BMI (${markBMI.toFixed(2)})!`);
  }
}

console.log("Data 1:");
compareBMIWithMessage(78, 1.69, 92, 1.95);

console.log("\nData 2:");
compareBMIWithMessage(95, 1.88, 85, 1.76);