// Set the date we're counting down to
const weddingDate = new Date("Oct 24, 2027 16:00:00").getTime();

// Update the countdown every 1 second
const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h until the big day!";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Just Married!";
    }
}, 1000);

// RSVP Button action
document.getElementById("rsvp-btn").addEventListener("click", function () {
    alert("This will eventually link to a Google Form or RSVP system!");
});