function trocarDisplay() {
    const nav = document.getElementById("lateral-list");

    if(nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "block";
    }else {
        nav.style.display = "none";
    }
}