function ibg() {
    let ibgs = document.querySelectorAll("._ibg");
    for (ibg of ibgs) {
        if (ibg.querySelector('img')) {
            ibg.style.backgroundImage = 'url(' + ibg.querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();