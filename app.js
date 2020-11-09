function mySearchFunction() {
    let search = document.getElementById("myInput");
    let country = document.getElementById("country");
    let li = country.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        if (li[i].innerText.indexOf(search.value) === -1) {
            li[i].style.display = "none";
        } else {
            li[i].style.display = "";
        }
    }
}

