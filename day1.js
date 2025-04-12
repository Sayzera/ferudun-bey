function day1Pratik() {
  console.log("Merhaba Javascript!");
  console.log("Bu bir konsol mesajıdır");

  // console.log("Toplama: 5 + 3 =" + (5 + 3))
  console.log("Toplama: 5 + 3 =", 5 + 3);
  console.log("Çıkarma: 10 - 2 = ", 10 - 2);
  console.log("Çarpma: 10 * 2 = ", 10 * 2);
  console.log("Bölme: 10 / 2 = ", 10 / 2);

  // Daha karmaşık bir işlem
  console.log("Karmaşık işlem: (5 + 3) * 2=", (5 + 3) * 2);

  const outputDiv = document.getElementById("day1Outout");
  outputDiv.innerHTML = ` 
    <h4>Konsol Çıktıları: </h4>
    <p>Tarayıcı konsolunu açmak için F12 tuşuna basın ve Console sekmesine geçin.</p>
    <p>Örnek İşlemler:</p>
    <ul>
        <li>5 + 3 = 8</li>
        <li>10 - 2 = 8</li>
        <li>10 * 2 = 20</li>
        <li>10 / 2 = 5</li>
        <li>(5 + 3) * 2 = 16 </li>
    </ul>
    `;

  console.log(outputDiv);
}
