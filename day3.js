
function getNumbers() {

    const num1 = parseFloat( document.getElementById('num1')?.value ) || 0
    const num2 = parseFloat( document.getElementById('num2')?.value ) || 0

    return {
        // num1: num1,
        // num2: num2
        num1,
        num2
    }
}


function arithemitcOperations() {
    const {num1, num2} = getNumbers()
    const outputDiv = document.getElementById('output')


    outputDiv.innerHTML = `
        <h3>Artimetik İşlemler: </h3>
        <p>Toplama: ${num1} + ${num2} = ${num1 + num2}</p>
        <p>Çıkarma: ${num1} - ${num2} = ${num1 - num2}</p>
        <p>Çarpma: ${num1} * ${num2} = ${num1 * num2}</p>
        <p>Bölme: ${num1} / ${num2} = ${num2 !== 0 ? num1 / num2 : 'Tanımsiz (Sıfıra Bölme)'}</p>
        <p>Modül: ${num1} % ${num2} = ${num2 !== 0 ? num1 % num2: 'Tanımsiz (Sıfıra Bölme)'}</p>
    `

}


function comparisonOperations() {
    const {num1, num2} = getNumbers();
    const outputDiv = document.getElementById('output')

    outputDiv.innerHTML = `
        <h3>Karşılaştırma İşlemleri</h3>
        <p>Eşit mi ? (==) ${num1} == ${num2} = ${num1 == num2 ? 'Eşit' : 'Eşit değil'}</p>
        <p>Tam eşit mi ? (===) ${num1} === ${num2} = ${num1 === num2 ? 'Eşit' : 'Eşit değil'}</p>
        <p>Eşit değil mi ? (!=) ${num1} != ${num2} = ${num1 != num2 ? 'Eşit değil' : 'Eşit'}</p>
        <p>Tam Eşit değil mi ? (!==) ${num1} !== ${num2} = ${num1 !== num2 ? 'Tam Eşit değil' : 'Eşit'}</p>
        <p>Büyük mü ? (>) ${num1} > ${num2} = ${num1 > num2 ? 'Büyüktür' : 'Küçüktür'}</p>
        <p>Küçük mü ? (<) ${num1} < ${num2} = ${num1 < num2 ? 'Küçüktür' : 'Büyüktür'}</p>
        <p>Büyük veya Eşit mi ? (>=) ${num1} >= ${num2} = ${num1 >= num2 ? 'Büyük veya eşittir' : 'Küçüktür'}</p>
        <p>Küçük veya Eşit mi ? (<=) ${num1} <= ${num2} = ${num1 <= num2 ? 'Küçük veya eşittir' : 'Büyüktür'}</p>
    `
}


function logicalOperations() {
    const {num1, num2} = getNumbers();
    const outputDiv = document.getElementById('output');

    const bool1 = num1 > 0;
    const bool2 = num2 > 0;

    outputDiv.innerHTML = `
        <h3>Manktıksal İşlemler:</h3>
        <p>VE (&&): ${bool1} && ${bool2} = ${bool1 && bool2 ? 'Vardır' : 'Yoktur'}</p>
        <p>VEYA (||) ${bool1} || ${bool2} = ${bool1 || bool2 ? 'İkisinden bir tanesi vardır' : 'Yoktur'}</p>
        <p>DEĞİL (!) !${bool1} = ${!bool1 ? '1.değer yoktur' : '1.değer vardır'}</p>
    `

}

