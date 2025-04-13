

const forLoopResult= document.getElementById('forLoopResult')
const whileLoopResult = document.getElementById('whileLoopResult')
const doWhileLoopResult = document.getElementById('doWhileLoopResult')
const forEachLoopResult = document.getElementById('forEachLoopResult')
const forInLoopResult = document.getElementById('forInLoopResult');
const forOfLoopResult = document.getElementById('forOfLoopResult')

document.getElementById('forLoopButton').addEventListener('click', () => {
    let result = ""; 
    result += "1-10 arasındaki sayılar: \n";

    for(let i = 1; i <= 10; i++) {
        result += i + ' '; // 1 2 3 4 5 
    }

    result += "\n\n 10-1 sayılar: \n "
    for(let i = 10; i >= 1; i--) {
        result += i + " "
    }

    result += "\n\n 0-20 arasındaki çift sayılar: \n "
    for(let i = 0; i <=20; i+=2) {
        result += i +  ' ';

    }

    result += "\n\n Çarpım tablosu (1-5) : \n " 

    for(let i = 1; i <=9; i++) {
        for(let j = 1; j <=9; j++) {
            result += `${i} x ${j} = ${i * j}\n`
        }

        result += '\n'
    } 

    forLoopResult.textContent = result;


})


document.getElementById('whileLoopButton').addEventListener('click', () => {
    let result = "";

    result += "1-10 arasındaki sayılar:\n";

    let i = 1;

    while ( i <= 10) {
        result += i + ' ';
        i++;
    }


    // 50 

    result += "\n\n Rastgele sayı üretme (10'dan küçük):\n"
    let randomNum;
    while ((randomNum = Math.floor(Math.random() * 20)) >= 10) {
        result += `${randomNum} 10'dan büyük devam ediyor...\n`
    }

    result += `${randomNum} 10'dan küçük, döngü bitti`


    whileLoopResult.textContent = result;


})


document.getElementById('doWhileLoopButton').addEventListener('click', () => {

    let result = "";

    result += "1-10 arasında sayılar: \n";
    let i =1;

    do {
        result += i + ' ';
        i++;    
    } while ( i<=10)

    
    result +="\n\nEn az bir kez çalışan döngü \n"
    let j = 10
    do {
        result += "Bu mesaj bir kez yazdırılacaktır"
    } while(j < 5)

     doWhileLoopResult.textContent = result;


})




document.getElementById('forEachLoopButton').addEventListener('click', () => {
    let result = '';

    const meyveler = ['Elma', 'Armut', 'Muz', 'Çilek', 'Portakal']
    result += 'Meyveler \n';

    meyveler?.forEach((meyve, index) => {
        result += `${index + 1}. ${meyve}`
    })


    const ogrenciler = [
        {
            ad: 'Ahmet',
            not: 85,
            'ad soyad': 'Ahmet Kılıc 1'
        },
        {
            ad: 'Ayşe',
            not: 90,
            'ad soyad': 'Ahmet Kılıc 2'
        },
        {
            ad: 'Mehmet',
            not: 70,
            'ad soyad': 'Ahmet Kılıc 3'
        }
    ]

    result += '\nÖğrenci Notları: \n'
    ogrenciler.forEach(ogrenci => {
        result += `${ogrenci.ad} - ${ogrenci.not} - ${ogrenci['ad soyad']} \n`
        
    })


    forEachLoopResult.textContent = result;
})


document.getElementById('forInLoopButton').addEventListener('click', () => {
    let result = "";

    const kisi= {
        ad:'Ali',
        yas: 25,
        meslek:'Mühendis',
        sehir : 'İstanbul'
    }

    result += 'Kişi Bilgileri \n';


    for (let ozellik in kisi) {
        result += `${ozellik} : ${kisi[ozellik]} \n`
    }


    forInLoopResult.textContent = result


})


document.getElementById('forOfLoopButton').addEventListener('click', () => {
    let result = "";
    const renkler = ['Kırmızı', 'Mavi', 'Sarı', 'Yeşil', 'Mor']

    result += 'Renkler\n';

    for (let renk of renkler) {
        result += `${renk}\n`
    }

    const kelime = "Javascript";

    result += `\n\nKelime Harfleri\n`

    for(let [harf,index] of kelime) {
        result +=`${harf.toUpperCase()}`
    }


    const ulkeBaskentMap = new Map ([
        ['Türkiye', 'Ankara'],
        ['Almanya', 'Berlin'],
        ['Fransa', 'Paris']
    ])





    for (let [ulke, baskent] of ulkeBaskentMap) {
        result += `${ulke}: ${baskent}\n`

    }


    const ulkeBaskentArray = [
        {
            ulke: 'Türkiye',baskent: 'Ankara',
        },
        {
            ulke: 'Almanya', baskent : 'Berlin' 
        }
    ]


    result += '\n Normal array ile ülke-başkent eşleşmeleri: \n'

    for(let item of ulkeBaskentArray) {

        console.log(item, 'item')

        result += `${item.ulke} : ${item.baskent}\n`
    }




    forOfLoopResult.textContent = result;


})