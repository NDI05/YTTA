var countDownDate = new Date("March 28, 2023 00:00:00").getTime();
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = "~ "+ days + "D " + hours + "H "
    + minutes + "M " + seconds + "S " + "~";
    // If the count down is finished, write some text
    var url="./HomePage.html";
    if (distance < 0) {
        clearInterval(x);
        window.location.href = url;
    }
}, 1000);