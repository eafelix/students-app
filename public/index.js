$(document).ready(function(){
    $('.btnLista').click(function(){
        $.ajax({
          type: 'GET',
          url: '/getData',

          success: function(data){
            var dataArr = JSON.parse(data);
            console.log(data);
            $('.character-list').empty();
            dataArr.forEach(function(usuario, index){
              var itemList = $("<li></li>");
              var infoUsuario = " " + "nombre: " + usuario.nombre + " " +
              "edad: " +  usuario.edad;
              var btnData = $('<button>Editar</button>').addClass(usuario.nombre);

              itemList.text(infoUsuario);
              itemList.append(btnData);
              $('.character-list').append(itemList);
            })
          }


        });
    });

    $('.btn2').click(function(){
      var input1 = $('#input1').val();
        $.ajax({
          type: 'POST',
          url: '/postData',
          data: JSON.stringify({ name: input1, location: "Boston" }),
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
