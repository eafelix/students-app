$(document).ready(function() {
  $(".btn-list").click(function() {
    $.ajax({
      type: "GET",
      url: "/getData",

      success: function(data) {
        var dataArr = JSON.parse(data);
        console.log(data);
        $(".character-list").empty();
        dataArr.forEach(function(user, index) {
          var itemList = $("<li></li>");
          var userInfo =
            " " + "Name: " + user.name + " " + "Age: " + user.age;
          var btnData = $("<button>Edit</button>").addClass(user.name);

          itemList.text(userInfo);
          itemList.append(btnData);
          $(".character-list").append(itemList);
        });
      }
    });
  });

  $(".btn2").click(function() {
    var input1 = $("#input1").val();
    $.ajax({
      type: "POST",
      url: "/postData",
      data: JSON.stringify({ name: input1, location: "Boston" }),
      success: function(data) {
        console.log("User Created");
        console.log(data);
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
  });
});
