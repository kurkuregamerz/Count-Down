
let count_till = new Date("Aug 23, 2026 06:30:00").getTime()
const interval_set = setInterval(() => {
    

    function count_down() {
        let current_time = new Date().getTime();
        let difference = count_till - current_time
        if (difference < 0) {
            clearInterval(interval_set)
            return
        }
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));

        let hours =Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        if (days <= 0) {
            document.getElementById("days").style.display = "none";
        }
       
        document.getElementById("days").innerHTML = String(days).padStart("2",0);
        document.getElementById("hours").innerHTML = String(hours).padStart("2",0);
        document.getElementById("minutes").innerHTML = String(minutes).padStart("2",0);
        document.getElementById("seconds").innerHTML = String(seconds).padStart("2",0);
    }
    count_down()
}, 1000);