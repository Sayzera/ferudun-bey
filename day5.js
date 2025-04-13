function getSelectedDay() {
  return document.getElementById("daySelect").value;
}

function checkDay() {
  const day = getSelectedDay();
  const outputDiv = document.getElementById("output");
  let message;

  switch (day) {
    case "1":
      message = "Pazartesi - Haftanın ilk günü";
      break;
    case "2":
      message = "Salı - Haftanın ikinci günü";
      break;
    case "3":
      message = "Çarşamba - Haftanın üçüncü günü";
      break;
    case "4":
      message = "Perşembe - Haftanın dördüncü günü";
      break;
    case "5":
      message = "Cuma - Haftanın beşinci günü";
      break;
    case "6":
      message = "Cumartesi - Haftanın altıncı günü";
      break;
    case "7":
      message = "Pazar - Haftanın yedinci günü";
      break;
    default:
      message = "Lütfen bir gün seçin";
      break;
  }

  outputDiv.innerHTML = `
    <h3>Gün Kontrolü </h3>
    <p>${message}</p>
    `;
}

function checkSeason() {
  // TODO: math randomu kullanarak her tıklamada farklı bir ayın sonucu ekleyecek algoritmayı oluşturunuz.
  const month = new Date().getMonth() + 1; // 1 - 12
  const outputDiv = document.getElementById("output");
  let season;

  switch (month) {
    case 12:
    case 1:
    case 2:
    case 3:
      season = "Kış";
      break;
    case 4:
    case 5:
      season = "İlkbahar";
      break;
    case 6:
    case 7:
    case 8:
      season = "Yaz";
      break;
    case 9:
    case 10:
    case 11:
      season = "Sonbahar";
      break;
    default:
      season = "Bilinmeyen mevsim";
  }

  outputDiv.innerHTML = `
    <h3>Mevsim Kontrolü</h3>
    <p>Şuan ki mevsim ${season}</p>
    `;
}

function checkTrafficLight() {
  const light = Math.floor(Math.random() * 4);
  const outputDiv = document.getElementById("output");
  let action;

  switch (light) {
    case 0:
      action = "DUR! kırmızı ışık yanıyor.";
      break;
    case 1:
      action = "Dikkat! sarı ışık yanıyor.";
      break;
    case 2:
      action = "GEÇ! Yeşil ışık yanıyor";
      break;

    default:
        action = "Trafik ışığı arzıla"
      break;
  }

  outputDiv.innerHTML = `
  <h3>Trafik Işığı Kontrolü</h3>
  <p>${action}</p>
  `
}
