$(document).ready(function() {
  $("#furnitureForm").submit(function(event){
    var favoriteColor = $("#color").val();
    favoriteColor = favoriteColor.slice(1);
    favoriteColor = parseInt(favoriteColor, 16);

    c


    console.log(favoriteColor);
    event.preventDefault();
  });
});
