const navluns = [];

function displayArray(message, description, navlunsData = navluns ) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
        <h3>${message}</h3>
        <div class='array-example'>
        ${description ? `<p> ${description}</p>` : ''}
       
        <div>
            ${navlunsData?.map(
              (navlun) => `
                <div class='array-item'>
                    <span>Name: ${navlun.name}</span>
                    <span>CARRIER: ${navlun.carrier}</span>
                    <span>TYPE: ${navlun.type}</span>
                    <span>MIN: ${navlun.min}</span>
                    <span>45: ${navlun._45}</span>
                    ${navlun?.segment ? `<span>Segment: ${navlun.segment}</span>` : '' }

                </div>
                `
            )}
        </div>
        </div>
    `
}


function getArrayItem() {
    const name = document.getElementById("name").value;
  const carrier = document.getElementById("carrier").value;
  const type = document.getElementById("type").value;
  const min = document.getElementById("min").value;
  const _45 = document.getElementById("45").value;

  return {
    name:name,
    carrier: carrier,
    type: type,
    min,
    _45: _45
  };
}


function clearForm() {
    document.getElementById("name").value = ''
   document.getElementById("carrier").value = ''
   document.getElementById("type").value = ''
   document.getElementById("min").value = ''
   document.getElementById("45").value = ''
  }

function pushNavlun() {
  const item = getArrayItem();

  navluns.push(item);
  clearForm();

  displayArray("Push dizinin sonuna ekler", "Dizinin mevcut hali");
}



function popExample() {

    if(navluns?.length > 0) {
        const removedItem = navluns.pop();

        console.log(removedItem, 'removedItem')

        displayArray('Pop dizinin sonundaki elemanı çıkarır', `${removedItem.carrier} - ${removedItem.min} dizinden çıkarılmıştır`)

        console.log(navluns)
    } else {
        displayArray('Sonuç bulunamadı', 'Lütfen yeni bir kayıt ekleyin.')
    }

}


function shiftExample() {

    if(navluns?.length > 0) {
        const removedItem = navluns.shift();

        displayArray('Shift dizinin başındaki elemanı çıkarır', `${removedItem.carrier} - ${removedItem.min} dizinden çıkarılmıştır`)

        console.log(navluns)
    } else {
        displayArray('Sonuç bulunamadı', 'Lütfen yeni bir kayıt ekleyin.')
    }

}



function unshiftExample() {
    const item = getArrayItem();

    if(item.carrier != '' && item.type != '' && item.min != '' && item._45 != '') {
        navluns.unshift(item);
         clearForm();
         displayArray("Unshift dizinin başına ekler", "Dizinin mevcut hali");
    }



}


function filterExample() {
    const searchTerms = getArrayItem();
    const carrier = searchTerms.carrier;
    const name = searchTerms.name;

    //TODO:[VEYA] hem carrier hemde name alanlarına göre arama yapacak 2 sinde birisinin eşleşmesi sonucunda sonuclari getirecek bu geliştirmeyi filtreleme özelliğine ekleyiniz

    // if(!carrier) {
    //     alert('Lütfen carrier seçiniz')
    // }

    const filteredArray = navluns?.filter((navlun) => {
        return navlun.name.includes(name)
    })


    // const filteredArray = navluns?.filter((navlun) => {
    //     return navlun.carrier === carrier
    // })


    if(filteredArray.length === 0) {
        displayArray('Sonuç bulunamadı', 'Lütfen yeni bir kayıt ekleyin.')
    }


    displayArray('Filter belirli koşulu karşılayan durumları yeni bir array olarak geri döndürür', 'Dizinin Mevcut hali', filteredArray)

}

function mapExample() {
    const mappedArray = navluns?.map((navlun, index) => {
        return {
           ...navlun,
           segment: navlun.min > 2 ? 'A' : 'B',
           id: index + 1
        };
    })

    displayArray("Map", "Dizinin mevcut hali",mappedArray);

}


function reduceExample() {
    // let acc = 0;
    // navluns?.map((navlun) => {

    //     acc = acc + parseFloat( navlun.min)

    // })
    const result = navluns.reduce((acc, item) => {
        return acc + parseFloat(item.min)
    }, 0)


    displayArray('Listedeki tüm min değerlerin toplamı: ' + result, 'Listenin mecut hali')

}


function findExample() {
    const searchTerms = getArrayItem();
    const name = searchTerms.name;
    const carrier = searchTerms.carrier;


    if(name || carrier) {
        const foundItem = navluns?.find((navlun) => navlun.name.includes(name))

      
        if(foundItem) {
            displayArray(`${name} içeren ilk öğe`, JSON.stringify(foundItem))
        } else {
            displayArray(`${name} içeren öğe bulunamadı`, '', [])
        }

    }

}



function someExample() {
    const searchTerms = getArrayItem();
    const carrier = searchTerms.carrier;

    if(carrier) {

        // TODO burada array içerisinde en az bir tanede olsa sonucu buluyor. bulduğu sonucu console.log ekranında gösteriniz. 
        const hasItem = navluns.some(navlun => {
            return navlun.carrier.includes(carrier)
        })

         displayArray(`Dizide ${carrier} içeren öğe ${hasItem ? 'var' : 'yok'}`)
    } else {
        displayArray('Lütfen arama terimini carrier seçeneğine giriniz', '', [])
    }
}

function everyExample() {
    const searchTerms = getArrayItem();
    const carrier = searchTerms.carrier;

    if(carrier) {
        const allContain = navluns.every(navlun => navlun.carrier.includes(carrier))

        

        if(allContain) {
            displayArray(`Tüm öğeler kariyer alanında ${carrier} içeriyor`)
        } else {
            displayArray(`Tüm öğeler kariyer alanında ${carrier} içermiyor`)

        }
    }
}