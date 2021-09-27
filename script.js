// static
const width = window.screen.width;
// redirect desktop user
if (width >= 1280) {
    window.location.href = "https://github.com/drkryz"
    
}

function LinkTo(link) {
    switch(link) {
        case "github":
            window.location.href = "https://github.com/drpidman"
        break;
        case "discord":
            window.location.href = "https://discord.com/invite/kmAuPQ6qNE"
        break;
        case "facebook":
            window.location.href = "https://facebook.com/cainhoag"
        break;            
    }
}