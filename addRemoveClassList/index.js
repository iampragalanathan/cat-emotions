document.addEventListener("click", function (e) {
   document.getElementById(e.target.id).parentElement.classList.add("read")
    document.getElementById(e.target.id).parentElement.classList.remove("unread")
});
