var time = 0;
var timer = setInterval(function(){
    time +=2 ;
    console.log(time + " have passed");
        if (time >7){
            clearInterval(timer);
        }
}, 2000);


// this program will execute for only 4 times, 
//once the condition is reached it will close