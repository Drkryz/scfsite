// static
const width = window.screen.width;
// redirect desktop user
if (width >= 1280) {
    window.location.href = "https://github.com/drkryz"
    
}

function LinkTo(link)
{
    switch(link) {
        case "github":
            window.location.href = "https://github.com/drpidman"
        break;
        case "discord":
            window.location.href = "https://discord.com/invite/kmAuPQ6qNE"
        break;            
    }
}

let visible = false;

function OpenSide()
{
    const sideBar = document.getElementById("sidebar");
    if (visible) {
        sideBar.style.visibility = "hidden"
        visible = false;
    } else {
        sideBar.style.visibility = "visible";
        visible = true;
    }
}

function CloseSide()
{
    const sideBar = document.getElementById("sidebar");

    if (visible) sideBar.style.visibility = "hidden";
    visible = false;
}