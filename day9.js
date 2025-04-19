// Global değişken
let globalCounter = 0;

// Geri dönüş değeri örneği
function calculateSquare(number) {
    return number * number;
}

function calculateCube(number) {
    return number * number * number;
}

// Kapsam örneği
function testLocalScope() {
    let localCounter = 0; // Local değişken
    localCounter++;
    return localCounter;
}

// Kapanış (Closure) örneği
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

// Uygulama fonksiyonları
function testReturnValue() {
    const number = parseFloat(document.getElementById('number').value) || 0;
    const outputDiv = document.getElementById('output');
    
    const square = calculateSquare(number);
    const cube = calculateCube(number);
    
    outputDiv.innerHTML = `
        <h3>Geri Dönüş Değeri Testi:</h3>
        <p>Sayı: ${number}</p>
        <p>Karesi: ${square}</p>
        <p>Küpü: ${cube}</p>
    `;
}

function testScope() {
    const outputDiv = document.getElementById('output');
    let scopeTest = '';
    
    // Global değişkeni artır
    globalCounter++;
    
    // Local scope testi
    const localResult1 = testLocalScope();
    const localResult2 = testLocalScope();
    
    // Block scope testi
    if (true) {
        let blockVar = "Bu değişken sadece bu blokta erişilebilir";
        scopeTest += `<p>Block scope değişkeni: ${blockVar}</p>`;
    }
    
    outputDiv.innerHTML = `
        <h3>Kapsam Testi:</h3>
        <p>Global sayaç: ${globalCounter}</p>
        <p>Local scope ilk çağrı: ${localResult1}</p>
        <p>Local scope ikinci çağrı: ${localResult2}</p>
        ${scopeTest}
    `;
}

function testClosure() {
    const outputDiv = document.getElementById('output');
    
    // İki farklı sayaç oluştur
    const counter1 = createCounter();
    const counter2 = createCounter();
    
    // Sayaçları test et
    const results = `
        <p>İlk sayaç: ${counter1()}</p>
        <p>İlk sayaç tekrar: ${counter1()}</p>
        <p>İkinci sayaç: ${counter2()}</p>
        <p>İkinci sayaç tekrar: ${counter2()}</p>
    `;
    
    outputDiv.innerHTML = `
        <h3>Kapanış (Closure) Testi:</h3>
        <p>Her sayaç kendi iç durumunu korur:</p>
        ${results}
    `;
} 