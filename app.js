const users = ["Shyam Patidar", "Sumit Patidar", "Jivan Patidar", "Ram Patidar", "Dheeraj Patidar", "Ravin Patidar", "Hariom Patidar", "a", "b"];
const selectBtn = document.getElementById('selectBtn');
const result = document.getElementById('result');

// selectBtn.addEventListener('click', () => {
//   let counter = 0;
//   const interval = setInterval(() => {
//     const randomUser = users[Math.floor(Math.random() * users.length)];
//     result.textContent = randomUser;
//     counter++;
//     if (counter === 50) {
//       clearInterval(interval);
//       const finalUser = users[Math.floor(Math.random() * users.length)];
//       result.textContent = `Congratulations, ${finalUser}!`;
//     }
//   }, 100);
// });


// // this code for a single winner 
// const winner = "Rohit Patidar";
// selectBtn.addEventListener('click', () => {
//   let counter = 0;
//   const interval = setInterval(() => {
//     const randomUser = users[Math.floor(Math.random() * users.length)];
//     result.textContent = randomUser;
//     counter++;
//     if (counter === 70) {
//       clearInterval(interval);
//       result.textContent = `Congratulations, ${winner}!`;
//     }
//   }, 100);
// });

// every fourth click winner is rohit patidar
// let usedFinalUsers = new Set();  // To track already selected final users
// let clickCount = 0;  // To track number of clicks

// selectBtn.addEventListener('click', () => {
//   let counter = 0;
//   clickCount++;  // Increment click count
//   const interval = setInterval(() => {
//     const randomUser = users[Math.floor(Math.random() * users.length)];
//     result.textContent = randomUser;
//     counter++;

//     if (counter === 40) {
//       clearInterval(interval);

//       // Determine the final user
//       let finalUser;
//       if (clickCount === 4) {
//         finalUser = "Rohit Patidar";  // Fixed winner
//       } else {
//         // Select a new final user
//         do {
//           finalUser = users[Math.floor(Math.random() * users.length)];
//         } while (usedFinalUsers.has(finalUser));  // Ensure it's not already used
//       }

//       usedFinalUsers.add(finalUser);  // Add to used set
//       result.textContent = `Congratulations, ${finalUser}!`;  // Display the final user
//     }
//   }, 100);
// });


let usedFinalUsers = JSON.parse(localStorage.getItem('usedFinalUsers')) || [];
let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
console.log("click Count", clickCount)
selectBtn.addEventListener('click', () => {
  let counter = 0;
  clickCount++;
  localStorage.setItem('clickCount', clickCount);
  const interval = setInterval(() => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    result.textContent = randomUser;
    counter++;
    if (counter === 50) {
      clearInterval(interval);
      let finalUser;
      if (clickCount === 4) {
        finalUser = "Rohit Patidar";
      } else {
        const availableUsers = users.filter(user => !usedFinalUsers.includes(user));
        finalUser = availableUsers[Math.floor(Math.random() * availableUsers.length)];
      }
      usedFinalUsers.push(finalUser);
      localStorage.setItem('usedFinalUsers', JSON.stringify(usedFinalUsers));
      result.textContent = `Congratulations, ${finalUser}!`;
    }
  }, 100);
});
