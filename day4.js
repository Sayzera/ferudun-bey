


function getNumber() {
    return parseFloat(
        document.getElementById('number').value
    ) || 0 
}






function checkNumber() {
    const number = getNumber();
    const outputDiv = document.getElementById('output');


    let result;

    if(number > 0 ) {
        result = `${number} pozitif bir sayıdır.`
    } else if (number < 0 ) {
        result = `${number} negatif bir sayıdır.`
    } else {
        result = `${number} sıfırdır.`
    }

    outputDiv.innerHTML =  `
        <h3>Sayı Kontrolü:</h3>
        <p>${result}</p>
    `
}


function checkGrade() {
    const number = getNumber();
    const outputDiv = document.getElementById('output');

    let grade;
    // TODO: Mutlaka sıfırdan farklı bir değer girmelidir
    // TODO: kullanıcı mutlaka 0-100 arasında bir değer girmelidir.

    /*if(number === 0) {
       
        return 
    }*/

    // Safe
    if(number >= 90) {
        grade = "AA"
    } else if (number >=80) {
        grade = "BA";
    } else if (number >= 70) {
        grade = "BB"
    } else if (number >= 60) {
        grade = "CB"
    } else if (number >= 50) {
        grade = "CC"
    } else {
        grade ="FF (Kaldı)"
    }

    outputDiv.innerHTML = `
    <h3>Not Kontrolü:</h3>
    <p>${number} puan için harf notu: ${grade}</p>
    `
}


function checkAge() {
    const number = getNumber();
    const output = document.getElementById('output')
    let category;

    if(number < 0) {
        category = "Geçersiz yaş"
    } else if (number < 13) {
        category = "Çocuk"
    } else if( number < 20) {
        category = "Genç"
    } else if(number < 65) {
        category = "Yetişkin"
    } else {
        category = "Yaşlı"
    }

    output.innerHTML = `
    <h3>Yaş Kontrolü:</h3>
    <p>${number} yaş için kateogori ${category}</p>
    `
}