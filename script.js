const width = window.screen.width;
// redirect desktop user
if (width >= 1280) {
    window.location.href = "https://github.com/drkryz"
    
}

let base = "https://api.github.com/repos/Drkryz/drkryz.github.io/releases";

window.onload = function() {

  fetch(base).then(res => res.json()).then(data => {
    document.getElementById("link").setAttribute("href", data[0].assets[0].browser_download_url)
  });
}

let isOpen = false;
function OpenSide() {
    if (isOpen) {
      $("#sidebar").css("animation-name", "s-closing");

      setTimeout(() => {
        $("#sidebar").css("display", "none");
        isOpen = false;
      }, 500);
    } else {
      $("#sidebar").css("animation-name", "s-opening");
      $("#sidebar").show();

      isOpen = true;
    }
}

window.onload = function() {
  console.log(window.location.hash.slice(1))

  const fragment = new URLSearchParams(window.location.hash.slice(1));
  const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

}
