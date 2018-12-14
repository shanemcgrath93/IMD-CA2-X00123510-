// Get the modal
 $(function(){
  var $header = $("#myModal .modal-header"),
  $body = $("#myModal .modal-body"),
  $footer = $("#myModal .modal-footer");
  
  $("#arnottsbtn").click(function() {
    var headerContent = $("#arnottsinfo .modalHeader").html();
    $header.html(headerContent);
	var bodyContent = $("#arnottsinfo .modalBody").html();
    $body.html(bodyContent);
	var footerContent = $("#arnottsinfo .modalFooter").html();
    $footer.html(footerContent);
	
  });
  
    $("#gamestopbtn").click(function(){
    var headerContent = $("#gamestopinfo .modalHeader").html();
    $header.html(headerContent);
	var bodyContent = $("#gamestopinfo .modalBody").html();
    $body.html(bodyContent);
	var footerContent = $("#gamestopinfo .modalFooter").html();
    $footer.html(footerContent);
   });
   

   
     $("#hsebtn").click(function(){
    var headerContent = $("#hseinfo .modalHeader").html();
    $header.html(headerContent);
	var bodyContent = $("#hseinfo .modalBody").html();
    $body.html(bodyContent);
	var footerContent = $("#hseinfo .modalFooter").html();
    $footer.html(footerContent);
	
	 });
	  });










