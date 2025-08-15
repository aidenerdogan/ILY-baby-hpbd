document.addEventListener('DOMContentLoaded', () => {
    const birthdayMessage = document.getElementById('birthday-message');
    const currentDate = new Date();
    const birthdayDate = new Date(currentDate.getFullYear(), 10, 15); // Assuming birthday is on November 15

    if (currentDate.toDateString() === birthdayDate.toDateString()) {
        birthdayMessage.textContent = "Happy Birthday, my love! 🎉";
    } else {
        birthdayMessage.textContent = "Welcome to my birthday surprise for you!";
    }

    const surpriseButton = document.getElementById('surprise-button');
    surpriseButton.addEventListener('click', () => {
        alert("Here's a special surprise just for you!");
    });
});