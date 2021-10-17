let gitbase_Releases = "https://api.github.com/repos/Drkryz/drkryz.github.io/releases";


window.onload = async function () {

    const root = document.getElementById("releases-i");

    const Items = await getReleases();
    console.log(Items[0]);


    Items.map(
        /** 
         * @param {{ name: string, body: string, html_url: string, tag_name: string }} index - fetched items
         */
        (index) => {

            const FBody = index.body.replace(/\n/g, '<br><br>')
            let htmlItem =
                `<div class="re-card">
                <div class="re-top">
                    <span>${index.name}</span>
                </div>
                <div class="re-body">
                    <span id="re-description">${FBody}</span>
                </div>
                <div class="re-bottom">
                    <div class="re-bottom-item">
                        <a href='${index.html_url}'>
                            <button>visualizar</button>
                        </a>
                    </div>
                    <div class="re-bottom-item">
                        <a href='https://github.com/Drkryz/drkryz.github.io/releases/download/${index.tag_name}/music-${index.tag_name}.apk'>
                            <button>baixar</button>
                        </a>
                    </div>
                </div>
            </div>
            `
            
    

            root.innerHTML += htmlItem;
        })
}

async function getReleases() {
    const data = await fetch(gitbase_Releases);
    const res = await data.json();

    return res;
}