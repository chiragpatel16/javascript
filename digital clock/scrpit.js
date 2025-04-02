$(function() {
    function Clock() {

        let now = new Date();
        let time = now.toLocaleTimeString();
        let date = now.toLocaleDateString();
        $('#digitalClock').text(time);
        $('#currentdate').text(date);
        
    }
    
    setInterval(Clock, 1000);
    Clock();
});

