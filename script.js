// ==========================================
// 1. Smooth Scrolling for Navigation Links
// ==========================================
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent the default sudden jump
        e.preventDefault();

        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href');

        // Find the target element on the page
        const targetElement = document.querySelector(targetId);

        // If the element exists, scroll to it smoothly
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// 2. Countdown Timer
// ==========================================
// Set the wedding date and time (June 20, 2032 at 3:00 PM)
const countdownDate = new Date("Jun 20, 2032 15:00:00").getTime();

// Update the countdown every 1 second
const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format numbers to always show two digits (e.g., "09" instead of "9")
    const formatTime = (time) => time < 10 ? "0" + time : time;

    // Display the results in the HTML elements
    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);

    // If the countdown is finished, clear the timer and display a message
    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown-container").innerHTML = "<h2>Just Married!</h2>";
    }
}, 1000);

// ==========================================
// 3. Background Music Toggle & Autoplay Handler
// ==========================================
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-control');

// Attempt to start music on the very first click anywhere on the page (bypasses browser autoplay blocks)
window.addEventListener('click', function startAudio() {
    if (music.paused) {
        music.play().then(() => {
            musicBtn.classList.add('playing');
        }).catch(error => {
            console.log("Audio playback waiting for interaction.");
        });
    }
    // Remove listener after the first successful interaction so it doesn't fire repeatedly
    window.removeEventListener('click', startAudio);
}, { once: true });

// Toggle play/pause when clicking the floating button directly
musicBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevents triggering window click conflicts
    if (music.paused) {
        music.play();
        musicBtn.classList.add('playing');
    } else {
        music.pause();
        musicBtn.classList.remove('playing');
    }
});