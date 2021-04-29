function getPilihanComp() {
    const comp = Math.random();
    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return "orang";
    return "semut";
}

function getHasil(comp, player) {
    if (player == comp) return "SERI!";
    if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
    if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
    if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
}


function acak() {
    const imgComp = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return
        }
        imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) {
            i = 0; 
        }
        // -> if (i == gambar.length) i = 0;
    }, 100)
}


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComp = getPilihanComp();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComp, pilihanPlayer);

        acak();

        setTimeout(function() {
            const imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');
    
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);
    });
});


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComp, pilihanPlayer);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComp, pilihanPlayer);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComp, pilihanPlayer);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });