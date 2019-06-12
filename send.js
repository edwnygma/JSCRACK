function sendData() {
   var $form = $('form[name="DATA_FORM"]'),
       url   = location.protocol + '//' + location.host + $form.attr('action'), 
       $data = $form.serialize();
            
   $.ajax({
      type: "POST",
      url: url,
      data: $data,
      //send again in 5 minutes
      success: function() { setTimeout(sendData, 5 * 60 * 1000); }
   });
}  