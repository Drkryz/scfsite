let gitReleasesUrl = "https://api.github.com/repos/Drkryz/drkryz.github.io/releases";




async function load() {
    const root = document.getElementById("releases-card");
    const releases = await getReleases();
    console.log(releases);

    releases.map(release => {
        let htmlTemplate = `
        <div class="card">
            <div class="card-top">
                <h1>${release.name}</h1>
            </div>
            <div class="card-body">
                <span>${release.body}</span>
            </div>
            <div class="card-bottom">
                <a class="link-button" href=${release.assets[0].browser_download_url}>
                    <i class="fas fa-download"></i>
                    <span>Download</span>
                </a>
                <a class="link-button" href=${release.html_url}>
                    <i class="fas fa-info-circle"></i>
                    <span>Informações</span>
                </a>
            </div>
        </div>
        `;


        root.innerHTML += htmlTemplate;
    });

}

window.addEventListener ?
    window.addEventListener("load", load, false) :
    window.attachEvent && window.attachEvent("onload", load);

async function getReleases() {
    const data = await fetch(gitReleasesUrl);
    const json = await data.json();
    return json;
}

console.log(getReleases());