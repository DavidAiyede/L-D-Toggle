const dark = document.getElementById("dark")


function toggleOn() {
     document.body.classList.toggle("darkTheme")
     dark.classList.toggle("dark")
     var x = document.getElementById("lightmode")
      if (x.innerHTML === "Light Mode"){
            x.innerHTML = "Dark Mode";
      } else {
            x.innerHTML = "Light Mode";
      }
}