$(document).ready(function(){
  
  $('#more_detail').click(function(){
    $('.detail').toggle("slow");
  });	

  $("#show_all_records").click(function(e) {
    debugger
    e.preventDefault();
    var path = '/users/index';
    $.ajax({ type: "GET", url: path });
  });

  // $('body').on("click", "#show_all_records" , function(){
  //   debugger
  //   var path = '/users/index';
  //   $.ajax({ type: "GET", url: path });
  // });

// $("#ajax").click(function(){
//     $.ajax({url: "", success: function(result){
//      $("#div1").html(result);
//     }});

});