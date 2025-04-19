// Yardımcı fonksiyonlar
function getNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    return { num1, num2 };
}

function getText() {
    return document.getElementById('text').value;
}

// Toplama fonksiyonu
function add(a, b) {
    return a + b;
}

// Metni tersine çevirme fonksiyonu
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Alan hesaplama fonksiyonu
function calculateRectangleArea(width, height) {
    return width * height;
}

// Palindrom kontrol fonksiyonu
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Uygulama fonksiyonları
function addNumbers() {
    const { num1, num2 } = getNumbers();
    const outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML = `
        <h3>Toplama İşlemi:</h3>
        <p>${num1} + ${num2} = ${add(num1, num2)}</p>
    `;
}

function reverseText() {
    const text = getText();
    const outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML = `
        <h3>Metni Tersine Çevirme:</h3>
        <p>Orijinal metin: ${text}</p>
        <p>Tersine çevrilmiş: ${reverseString(text)}</p>
    `;
}

function calculateArea() {
    const { num1, num2 } = getNumbers();
    const outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML = `
        <h3>Dikdörtgen Alanı:</h3>
        <p>Genişlik: ${num1}, Yükseklik: ${num2}</p>
        <p>Alan: ${calculateRectangleArea(num1, num2)}</p>
    `;
}

function checkPalindrome() {
    const text = getText();
    const outputDiv = document.getElementById('output');
    const result = isPalindrome(text);
    
    outputDiv.innerHTML = `
        <h3>Palindrom Kontrolü:</h3>
        <p>Metin: "${text}"</p>
        <p>Bu metin ${result ? 'bir palindromdur' : 'palindrom değildir'}</p>
    `;
} 