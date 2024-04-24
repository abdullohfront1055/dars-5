let ism = prompt("ismingizni kiriting: ");
let harf = prompt("Biror harf kiriting: ");
let orni = ism.indexOf(harf); // -1

if (orni === -1) {
    console.log(ism + "da  bu " + harf + " mavjud emas!");
} else {
    console.log(ism + "da  bu " + harf + " mavjud! ")
}

