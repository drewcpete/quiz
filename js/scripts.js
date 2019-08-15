$(document).ready(function() {
  // $("#nameSelect").change(console.log(this.val()));

  $("#furnitureForm").submit(function(event){
    var favoriteColor = $("#color").val();
    favoriteColor = favoriteColor.slice(1);
    favoriteColor = parseInt(favoriteColor, 16);
    var name = $("#nameSelect").val();
    var furnitureInput = $("input:radio[name=flavor]:checked").val();

    var result = (favoriteColor + name + furnitureInput) % 3;

    if (result === 0){
      $("#friendModal").show();
    } else if (result === 1) {
      $("#boatModal").show();
    } else {
      $("#tjModal").show();
    }

    $(".close").click(function() {
      $(".modal").hide();
    });



    console.log(favoriteColor);
    event.preventDefault();
  });
});
