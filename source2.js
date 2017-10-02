$(function(){
    $("#startIFrameCall").click(
      function(){
          $("#status").text("Starting AJAX download...");
          $.ajax({url: "http://www.pomeeno.com/download/medium.txt", success: function(result){
              $("#status").text("Completed AJAX download");
          }});
      });
});
