const namaSaya = "steven orlando";
let usia = 1;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if(usia > 10 && usia < 18) { 
       generasi = "generasi remaja";
    } 
    else if (usia > 18 && usia < 30) {
       generasi = "generasi dewasa";
    }
    else if (usia >= 30) {
       generasi = "generasi tua"
    }
    else if (usia < 10 && usia > 2) {
       generasi = "generasi bayi"
    }
    else {
       generasi = "generasi mars"
    }
     return biodata.innerHTML = generasi;
}

console.log(namaSaya);
console.log(usia);

generateBiodata();