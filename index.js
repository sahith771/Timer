var Time = {
    totalSeconds: 0,
    start: function () {
      if (!this.interval) {
          var self = this;
          function pad(val) { return val > 9 ? val : "0" + val; }
          this.interval = setInterval(function () {
            self.totalSeconds += 1;
            document.getElementById("hrs").innerHTML = pad(Math.floor(self.totalSeconds/(60*60)%60))
            document.getElementById("min").innerHTML = pad(Math.floor(self.totalSeconds / 60 % 60));
            document.getElementById("sec").innerHTML = pad(parseInt(self.totalSeconds % 60));
          }, 1000);
      }
    },
  
    reset: function () {
      Time.totalSeconds = null; 
      clearInterval(this.interval);
      document.getElementById("hrs").innerHtml = "00";
      document.getElementById("min").innerHTML = "00";
      document.getElementById("sec").innerHTML = "00";
      delete this.interval;
    },
    pause: function () {
      clearInterval(this.interval);
      delete this.interval;
    },
    restart: function () {
       this.reset();
       Time.start();
    }
  };
  
  
  document.getElementById("start").addEventListener("click", function () { Time.start(); });
  document.getElementById("pause").addEventListener("click", function () { Time.pause(); });
  document.getElementById("restart").addEventListener("click", function () { Time.restart(); });
