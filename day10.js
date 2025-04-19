

const persons = [];

function getInput() {
    return document.getElementById('person-input').value;
}

function clearInput() {
   document.getElementById('person-input').value = ''
   inputFocus()

}

function inputFocus() {
    document.getElementById('person-input').focus();
}



let myArray = [];


function createArray() {
    myArray = ['elma', 'armut', 'muz', 'çilek', 'kiraz'];

    const firstItem = myArray[0]
    const lastItem = myArray[myArray.length - 1]


   const outputDiv = document.getElementById('output');
    // TODO: output kodlarını tekar kullanılabilir bir fonksiyon yapınız.
   outputDiv.innerHTML = `
   <h3>Yeni bir dizi oluşturuldu</h3>

   <div class="array-items">
   ${
    myArray.map((item) => `<span class='array-item'>${item}</span>`).join('')
   }
   </div>
   `

}



function createPerson() {
    const person = getInput();
    const outputDiv = document.getElementById('output');

    if(person == '') return 
    if(person?.length <=3) return 


    persons.push(person)
    const persons2 = persons.reverse();

    clearInput();


    outputDiv.innerHTML = `
    <h3>Kullanıcılar ${persons.length}</h3>

    <p>
        Son Eklenen Kullanıcı ${persons[0]}
    </p>
 
    <div class="array-items">
    ${
        persons2.map((item) => `
        <div class='userContainer'>
        <span class='array-item'>${item}</span>
        <button class='delete-user-button'>Sil </button>
        </div>
        `).join('')
    }
    </div>
    `


}


// TODO: Oluşturulan kullanıcılar sil butonuna tıklandığında silinmesi için gerekli fonksiyonu oluşturunuz.


