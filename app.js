const users = ["Shyam Patidar", "Rohit Patidar", "Sumit Patidar", "Jivan Patidar", "Ram Patidar", "Dheeraj Patidar", "Ravin Patidar", "Hariom Patidar"];  // Fixed array of users
const selectBtn = document.getElementById('selectBtn');
const result = document.getElementById('result');

selectBtn.addEventListener('click', () => {
  let counter = 0;
  const interval = setInterval(() => {
    // Simulate scrolling by showing different names
    const randomUser = users[Math.floor(Math.random() * users.length)];
    result.textContent = randomUser;
    counter++;

    // Stop after 20 seconds (20,000ms or 10 intervals with 2 seconds each)
    if (counter === 150) {
      clearInterval(interval);

      // Finally, display the selected user
      const finalUser = users[Math.floor(Math.random() * users.length)];
      result.textContent = `Congratulations, ${finalUser}!`;
    }
  }, 100);  // Scroll changes every 2 seconds
});

