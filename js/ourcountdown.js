// Set the date we're counting down to
var countDownDate = new Date("June 22, 2024 17:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the circles
    document.getElementById("days").innerHTML = days + "<p class='countdown-text'>Days</p>";
    document.getElementById("hours").innerHTML = hours + "<p class='countdown-text'>Hours</p>";
    document.getElementById("minutes").innerHTML = minutes + "<p class='countdown-text'>Minutes</p>";
    document.getElementById("seconds").innerHTML = seconds + "<p class='countdown-text' >Seconds</p>";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-container").innerHTML = "<p>EXPIRED</p>";
    }
}, 1000);