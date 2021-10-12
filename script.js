// static
const width = window.screen.width;

let gitbase_Releases = "https://api.github.com/repos/Drkryz/drkryz.github.io/releases";

// redirect desktop user
if (width >= 1280) {
    window.location.href = "https://github.com/drkryz"
    
}



window.onload = async function() {
    let releases = await getReleases();
    console.log(releases);
    
    
    document.getElementById("version-tag").textContent=releases[0].tag_name;
    document.getElementById("version-url").setAttribute("href", releases[0].assets[0].browser_download_url);
}

async function getReleases() {
    const data = await fetch(gitbase_Releases);
    const res = await data.json();

    return res;
}


function LinkTo(link)
{
    switch(link) {
        case "github":
            window.location.href = "https://github.com/drpidman";
        break;
        case "discord":
            window.location.href = "https://discord.com/invite/kmAuPQ6qNE";
        break;
        case "website":
            window.location.href = "https://drkryz.xyz";
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