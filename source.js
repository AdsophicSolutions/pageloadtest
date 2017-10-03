$(function(){
  $("#startCall").click(
    function(){
        $("#status").text("Starting AJAX download...");
        $.ajax({url: "http://www.pomeeno.com/download/medium.txt", success: function(result){
            $("#status").text("Completed AJAX download");
        }});

        checkForRequests(performTask);
    });
});

function performTask() {
  $("#status_task").text("Completed");
};

// function checkForRequests(callback) {
//       if ($.active > 0) {
//           $("#status_ajax").text("Running...");
//           window.setTimeout(checkForRequests, 1000, callback);
//       }
//       else {
//         $("#status_ajax").text("Completed");
//         callback();
//       }
// };
