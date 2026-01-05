document.addEventListener("DOMContentLoaded", () => {

  const fodderRows = [];
  const val = id => document.getElementById(id).value.trim();

  // ---- ADD TABLE ROW ----
  document.getElementById("addFodderBtn").addEventListener("click", () => {
    const row = [
      val("periodCode"),   // 8(1)
      val("animalCode"),   // 9(2)
      val("totalNo"),      // 10(3)
      val("bigNo"),        // 11(3)
      val("smallNo"),      // 12(3)
      val("stallFeeding"), // 13(2)
      val("lopping"),      // 14(1)
      val("grazing"),      // 15(1)
      val("remarks")       // 16
    ];

    if (row.every(v => v === "")) return;

    fodderRows.push(row);

    document.getElementById("fodderTable").insertAdjacentHTML(
      "beforeend",
      `<tr>${row.map(v => `<td>${v}</td>`).join("")}</tr>`
    );

    periodCode.value =
    animalCode.value =
    totalNo.value =
    bigNo.value =
    smallNo.value =
    stallFeeding.value =
    lopping.value =
    grazing.value =
    remarks.value = "";
  });

  // ---- SUBMIT FORM ----
  document.getElementById("form2d").addEventListener("submit", e => {
    e.preventDefault();

    const payload = {
      villageName: val("villageName"),
      houseNo: val("houseNo"),

      header: [
        val("villageName"),        // 1
        val("houseNo"),            // 2
        val("govtFeed"),            // 3
        val("feedSchemeName"),      // 3.1
        val("feedFrequency"),       // 3.3
        val("fodderSeed"),          // 4
        val("seedSchemeName"),      // 4.1
        val("seedQty"),             // 4.2
        val("seedFrequency"),       // 4.3
        val("landOwned"),           // 5.1
        val("fodderWithCrops"),     // 5.2
        val("forestGrazing"),       // 6
        val("noForestReason"),      // 6.1
        val("collectForestFodder")  // 7
      ],

      tableRows: fodderRows
    };

    callAPI({
      action: "saveForm2DData",
      payload
    }).then(() => {
      window.location.href = "form2e.html";
    });
  });

});
