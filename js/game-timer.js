app.gameTimer = function(e){
  var timer = $('.timer');

  function updateTime(){
    var myTime = timer.html();
    var ss = myTime.split(':');
    var dt = new Date();
    dt.setHours(ss[0]);
    dt.setMinutes(ss[1]);
    dt.setSeconds(ss[2]);

    var dt2 = new Date(dt.valueOf() + 1000);
    var ts = dt2.toTimeString().split(" ")[0];
    timer.html(ts);
    setTimeout(updateTime, 1000);
  };

  setTimeout(updateTime, 1000);
};
