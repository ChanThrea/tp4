//$(".img").on("click", function () {
// $(this).css("width", "20px");
//});

// image voiture header
$("img[title='.voiture']").on("click", function () {
  $(this).css("fontSize", "30px");
});

//$(".h1").on("click", function () {
// $(this).css("fontFamily", "Helvetica");
//});

$(this).on("click", function () {
  $("h1").css("color", "green");
});

let monID = $("#btnGroupDrop1");
console.log(monID);
$(monID).css("color", "red");

//$(#monImage).attr(src, img_02.png);
//$("footer").css("width", "100px");

//let footer = document.querySelectorAll("footer");
//console.log("footer");
//for (let j = 0; j < footer.length; j++) {
//footer[j].style.width = "50px";
//}

$("footer img").on("click", function () {
  $("footer img").css("width", "50px");
});
