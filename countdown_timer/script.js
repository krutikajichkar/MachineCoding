(function () {
    var hour = document.querySelector(".hour");
    var minutes = document.querySelector(".minutes");
    var seconds = document.querySelector(".seconds");

    var stop = document.querySelector(".stop");
    var start = document.querySelector(".start");
    var reset = document.querySelector(".reset");

    var countdownTimer = null;

    start.addEventListener('click',() => {
        if(hour.value == 0 && minutes.value == 0 && seconds.value == 0){
            return;
        }

        const startInterval = () => {
            start.style.display = "none";
            stop.style.display = "block";
            countdownTimer = setInterval(() =>{
               timer();
            } , 1000)
        }

        startInterval();
    })

    stop.addEventListener('click' , () => {
        stop.style.display="none";
        start.style.display="block";
        stopInterval();
    })

    reset.addEventListener('click',() => {
        stopInterval();
        hour.value="";
        minutes.value="";
        seconds.value="";
        stop.style.display="none";
        start.style.display="block";
    })

    const stopInterval = () => {
        clearInterval(countdownTimer)
    }
    const timer = () => {
        if(seconds.value > 60){
            minutes.value++;
            seconds.value = parseInt(seconds.value) - 59 ;
        }
        else if(minutes.value > 60){
            hour.value++;
            minutes.value = parseInt(minutes.value) - 59 ;
        }
        minutes.value = minutes.value > 60 ? 60 : minutes.value;
        
        if(hour.value == 0 && minutes.value==0 && seconds.value==0 ){
            hour.value = "";
            minutes.value = "";
            seconds.value = "";
            stopInterval();
        }
        else if(seconds.value!=0){
            seconds.value = `${seconds.value <= 10 ? '0' : ""}${seconds.value-1}`;
        }
        else if(minutes.value!=0 && seconds.value==0){
            seconds.value =59;
            minutes.value = `${minutes.value <= 10 ? '0' : ""}${minutes.value-1}`
        }
        else if(hour.value!=0 && minutes.value==0){
            minutes.value = 60;
            hour.value = `${hour.value <= 10 ? '0' : ""}${hour.value-1}`
        }
    }

} ) ();