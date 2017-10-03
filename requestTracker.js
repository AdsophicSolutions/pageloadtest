$(function(){
  (function() {
      var original_open = XMLHttpRequest.prototype.open;
      window.ad_tracker_openHTTPs = 0;
      XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
        window.ad_tracker_openHTTPs++;
        this.addEventListener("readystatechange", function() {
            if(this.readyState == 4) {
              window.ad_tracker_openHTTPs--;
            }
          }, false);
        original_open.call(this, method, url, async, user, pass);
      }
    })();
});

function checkForRequests(callback) {
      if (window.ad_tracker_openHTTPs > 0) {
          $("#status_ajax").text("Running...");
          window.setTimeout(checkForRequests, 1000, callback);
      }
      else {
        $("#status_ajax").text("Completed");
        callback();
      }
};
