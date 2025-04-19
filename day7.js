
function getTargetNumber() {
    return parseInt(document.getElementById('targetNumber').value) || 10
}
function getOutputDiv(outputName) {
    return document.getElementById(outputName);
}
function readArray(itemArray = [], outputDiv, title, description = '') {

    outputDiv.innerHTML += `
     <h3>${title}</h3>
     <p>${description}</p>
        <div class="number-list">
            ${
                itemArray.map((num) => {
                    return `<span class='number-item'>${num}</span>`

                }).join('')
            }
        </div>
    `

}

function countWithWhile() {
    const target = getTargetNumber()
    const outputDiv = document.getElementById('output');
    let numbers = [];

    let i = 1;

    while( i <= target) {
        numbers.push(i)
        i++;
    }

    outputDiv.innerHTML = `
        <h3>While ile Sayma:</h3>
        
        <div class="number-list">
            ${
                numbers.map((num,index) => `<span 
                onclick="getCurrentSpan(${num})"
                class="${index % 2 == 0 ? 'bg-red' : 'bg-yellow'}">${num}</span>`).join('')
            }
        </div>
    `
}
// TODO: while ile yaptığımız işlemin aynısı do while ile yapınız.

function getCurrentSpan(spanVal) {
    console.log(spanVal, 'spanVal')
}
 
function isPrime(num) {
   
    // 1 ve daha küçük sayılar asal sayı değildir 
    if(num <= 1) return false;

    // 2 veya 3 ise asal sayıdır 
    if(num <=3) return true;

    if(num % 2 === 0 || num % 3 === 0 ) return false

    // 6k ± 1 formundaki sayıları kontrol et
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;

}

function findPrimes() {
    const number = getTargetNumber();
    const outputDiv_1 = document.getElementById('output-1')
    const outputDiv_2 = document.getElementById('output-2')
    let primes = [];
    let notPrimes = [];

    let i = 2

    while (i <= number)  {

         if(isPrime(i)) {
            primes.push(i);
         } else {
            notPrimes.push(i);
         }
        i++;
    }

    const primesTitle = `Asal Sayılar 1-${number}:`
    const notPrimesTitle = `Asal Olmayan Sayılar 1-${number}`

    outputDiv_1.innerHTML = '';
    readArray(primes, outputDiv_1, primesTitle)
    readArray(notPrimes, outputDiv_1, notPrimesTitle)


}

function breakExample() {
    const number = getTargetNumber();
    const outputDiv = getOutputDiv('output-1');
    let numbers = [];

    let i = 1;

    while(true) {
        if(i > number) {
            break;
        }
        numbers.push(i);
        i++;

    }

    readArray(numbers, outputDiv, 'Break Örneği', `Döngü ${number} sayısına ulaştığında break ile sonlandırıldı`)


}





function continueExample() {
    const number = getTargetNumber();
    const outputDiv = getOutputDiv('output-1')
    let oddNumbers = [];

    let i = 1;

    // while (i <= number) {
    //     if( i % 2 === 0 ) {
    //         i++;
    //         continue;
    //     }

    //     oddNumbers.push(i);
    //     i++;
    // }

    for(let i = 0; i <= number; i++) {
            if( i % 2 === 0 ) {
                continue;
            }

            oddNumbers.push(i);
    }



    readArray(oddNumbers, outputDiv, 'Continue Örneği', 'Çift sayılar continue ile atlandı')

}




