
function variableExamples() {
    const outputDiv = document.getElementById('output');
    var eskiDegisken = "Bur bir var değişkeni";
 
 
    let modernDegisken = "Bu bir let değişkeni";
 
    const sabitDesken = "Bu bir const değişkenş";

    modernDegisken = "Let değişkeninin yeni değeri"


    if(true) {
        let modernDegisken = "Bu bir let değişkeni block içerisinde çalıştı"
        console.log(modernDegisken);
    }

    outputDiv.innerHTML = `
        <h3>Değişken Örnekleri:</h3>
        <p>var değişkeni : ${eskiDegisken}</p>
        <p>let değişkeni: ${modernDegisken}</p>
        <p>const değişkeni ${sabitDesken}</p>

    `


}



function dataTypeExamples() {
    const outputDiv = document.getElementById('output');

    // farklı veri tipleri
    const sayi = 42;
    const metin = "Merhaba Dünya"
    const mantiksal = true
    const bos = null;
    let tanimsiz;

    // TODO: aynı şekilde sizden bekliyorum 

}

function typeofExamples() {
    const outputDiv = document.getElementById('output');

    const sayi = 42.2;
    const metin = "Merhaba Dünya"
    const mantiksal = true
    const bos = null;
    let tanimsiz;

    // typeof 42: ${typeof sayi}

    // TODO: aynı şekilde sizden bekliyorum 

}



typeofExamples();