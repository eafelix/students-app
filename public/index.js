$(document).ready(function(){
    $('.btn').click(function(){
        $.ajax({
          type: 'GET',
          url: '/getData',
          success: function(data){
            console.log(data);
            console.log(data.nombre);
          }


        });
    });

    $('.btn2').click(function(){
        $.ajax({
          type: 'POST',
          url: '/postData',
          data: JSON.stringify({ name: "John", location: "Boston" }),
          success: function(data){

            console.log("sale un john");
            console.log(data);
          },
          headers: {
        'Content-Type': 'application/json'
      }
        });
    });
});
