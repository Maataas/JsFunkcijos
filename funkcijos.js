console.log("=======Lengvesni 1 užd.==========");
// Sukurkite funkciją kuri priimtų du kintamuosius, juos sudaugintų ir atspausdintų sandaugą į konsolę.

function sandauga(num1,num2) {
    console.log(num1 * num2);
}

sandauga(5,4);

console.log("=======Lengvesni 2 užd.==========");
// Sukurkite funkciją kuri priimtų vieną kintamąjį, vardą. Ir konsolėje išspausdintų “labas “ ir tą paduotą vardą.

function vardas(vard) {
    console.log("Labas " + vard);
}
vardas("Matai");

console.log("=======Lengvesni 3 užd.==========");
// Sukurkite funkciją  kuri priimtų vieną kintamąjį, tekstą. Ir konsolėje išspausdintų kiek simbolių yra tame tekste.

function simboliuSk(text) {
    console.log(text);
    console.log(text.length);
}
simboliuSk("Mano vardas Matas");

console.log("=======Lengvesni 4 užd.==========");
// Sukurkite funkciją kuri priimtų 2 kintamuosius tekstus, vardą, pavardę ir atspausdintų inicialus. T.y vardo ir pavardės pirmąsias raides DIDŽIOSIOMIS raidėmis.

function inicialai(vardas, pavarde) {
    console.log(vardas.charAt(0) + pavarde.charAt(0));
}
inicialai("Matas","Mačiulis");

console.log("=======Lengvesni 5 užd.==========");
// Sukurkite HTML div’ą su id “numberPlace”. Parašykite funkciją kuri priimtų kintamąjį, skaičių ir jį atspausdintų tame HTML elemente.

function skaicius(sk) {
    document.getElementById("numberPlace").innerHTML = sk;
}
skaicius(10000);

console.log("=======Lengvesni 7 užd.==========");
// Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 ir atspausdintų konsolėje vienoje eilutėje atskirtus kableliais. Po paskutinio skaičiaus kablelio neturi būti.

function random() {
    
let row = "";
for (let i = 0; i < 3; i++) {
    let num = Math.round(Math.random() * 5);
    row += num + ",";
    }
    console.log(row.substring(0, row.length -1));
}
random();

console.log("=======Lengvesni 8 užd.==========");
// Parašykite funkciją kuri priimtų du kintamuosius “nuo” ir “iki”. Funkcija turi sugeneruoti random skaičių tame intervale ir jį GRAŽINTI.

function tarpinis(nuo, iki) {
    return nuo + Math.round(Math.random() * (iki - nuo));
}
let randomnumber = tarpinis(10,20);
console.log(randomnumber);

console.log("=======Lengvesni 9 užd.==========");
// Sukurkite HTML div’ą su id “sequence”. Parašykite funkciją kuri sugeneruotų 10 p tagų su skaičiais juose nuo 1 iki 10 ir atiduotų į tą HTML elementą. Rezultate HTML’e turi matytis 10 p tagų su skaičiais. Šie TURI BŪTI SUGENERUOTI JAVASCRIPTU.

function taguskai() {
    for (let i = 1; i < 11; i++) {
        document.getElementById("sequence").innerHTML += "<p>" + i + "</p>"; 
    }
}

console.log("=======Vidutiniai 1 užd.==========");
// Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, ir gražintų reikšmę (paduodate du parametrus, skaičių ir laipsnį) NENAUDOTI jau esamų js funkcijų! Nenaudoti ** operatoriaus! Galima naudoti for, if, kintamuosius.

function customPow(num, pow) {
    let result = 1;
    for (let i = 0; i < pow; i++) {
        result *= num;
        
    }
    return result;
}
let res = customPow(3,4);
console.log(res);

console.log("=======Vidutiniai 2 užd.==========");
// Sukurkite funkciją kuri priims tris parametrus. skaičių, laipsnį ir HTML elemento id. Ši funkcija naudos pirmają funkciją ir jos rezultatą gražins į HTML elementą.

function funwith3(num, pow, id) {
    // console.log(customPow(num, pow));
    document.getElementById("forPow").innerHTML = "<h1>" + customPow(num, pow) + "</h1>";

}
funwith3(5,4,"forPow");

console.log("=======Sunkesni 1 užd.==========");
// Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą;

function tekstas(text) {
    console.log("<h1>" + text + "</h1>");
}
tekstas("Sveiki, kaip gyvenate");

console.log("=======Sunkesni 2 užd.==========");
// Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas į h tagą, o antrasis tago numeris (1-6). Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

function tagai(text, tag) {
    console.log("<h" + tag + ">" + text + "</h" + tag + ">");
}
tagai("Labas", 6);


console.log("=======Sunkesni 3 užd.==========");
// Sugeneruokite atsitiktinį stringą iš raidžių ir skaičių. Visus skaitmenis stringe įdėkite į h1 tagą. Raides palikite. Jeigu iš eilės eina keli skaitmenys, juos į tagą reikią dėti kartu (h1 atsidaro prieš pirmą ir užsidaro po paskutinio) Keitimui naudokite pirmo patobulintą (jeigu reikia) uždavinio funkciją.

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

console.log(makeid(5));

function rndStrToH1(str) {
    console.log(str);
    let HTML = "";
    let nums = "";
    for (let i = 0; i < str.length; i++) {
        
        if(str[i] * 0 == 0) {
            nums += str[i];
        }else{
            if(nums != ""){
                console.log("<h1>" + nums + "</h1>");
                HTML += "<h1>" + nums + "</h1>";
                nums = "";
            }
            console.log("<p>" + str[i] + "</p>");
            HTML += "<p>" + str[i] + "</p>";
        }
    }

    if(nums != ""){
        console.log("<h1>" + nums + "</h1>");
        HTML += "<h1>" + nums + "</h1>";
    }
    console.log(HTML);
    document.getElementById("sun3").innerHTML = HTML;
}
rndStrToH1(makeid(10));

console.log("=======Sunkesni 4 užd.==========");
// Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)

function sveikieji(skc){
    count=0;
    for (i=2; i < skc ; i++) { 
        if (skc % i ==0) {
            count++;
         }
    }
    console.log(count);
}
sveikieji(10);

