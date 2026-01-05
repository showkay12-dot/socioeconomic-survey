document.addEventListener("DOMContentLoaded", () => {

  const val = id => document.getElementById(id).value.trim();

  document.getElementById("form2c").addEventListener("submit", e => {
    e.preventDefault();

    const payload = {
      villageName: val("villageName"),
      houseNo: val("houseNo"),

      row: [
        val("villageName"),   // 1
        val("houseNo"),       // 2
        val("collectFW"),     // 3(1)
        val("periodCode"),    // 4(1)
        val("fuelUsageCode"), // 5(1)
        val("fuelWood"),      // 6(4)
        val("agriWaste"),     // 7(4)
        val("cowDung"),       // 8(4)
        val("charcoal"),      // 9(4)
        val("coal"),          // 10(4)
        val("gas"),           // 11(3)
        val("kerosene"),      // 12(3)
        val("electricity"),   // 13(3)
        val("sourceCode"),    // 14(1)
        val("remarks")        // 15
      ]
    };

    callAPI({
      action: "saveForm2CData",
      payload
    }).then(() => {
      window.location.href = "form2d.html";
    });

  });

});
