var productContainer = document.getElementsByClassName("collection1")[0];
var searchInput = document.getElementsByClassName("searchInput")[0];
var productlist = productContainer.querySelectorAll("div");

searchInput.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();
    for (var count = 0; count < productlist.length; count++) {
        var h1Elem = productlist[count].querySelector("h1");
        var productName = h1Elem ? h1Elem.textContent.toUpperCase() : "";
        if (productName.indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});