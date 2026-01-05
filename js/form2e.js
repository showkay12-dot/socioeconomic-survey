document.addEventListener("DOMContentLoaded", () => {

  const ntfpRows = [];
  const val = id => document.getElementById(id).value.trim();

  // ---- ADD NTFP ROW ----
  document.getElementById("addNTFPBtn").addEventListener("click", () => {

    const row = [
      val("species"),        // 4
      val("periodCode"),     // 5
      val("modeCollection"), // 6
      val("annualQty"),      // 7
      val("personalUse"),    // 8
      val("forSale"),        // 9
      val("sustainable")     // 10 / 11
    ];

    if (row.every(v => v === "")) return;

    ntfpRows.push(row);

    document.getElementById("ntfpTable").insertAdjacentHTML(
      "beforeend",
      `<tr>${row.map(v => `<td>${v}</td>`).join("")}</tr>`
    );

    species.value =
    periodCode.value =
    modeCollection.value =
    annualQty.value =
    personalUse.value =
    forSale.value =
    sustainable.value = "";
  });

  // ---- SUBMIT FORM ----
  document.getElementById("form2e").addEventListener("submit", e => {
    e.preventDefault();

    const payload = {
      villageName: val("villageName"),
      houseNo: val("houseNo"),

      header: [
        val("villageName"),  // 1
        val("houseNo"),      // 2
        val("collectNTFP")   // 3
      ],

      tableRows: ntfpRows
    };

    callAPI({
      action: "saveForm2EData",
      payload
    }).then(() => {
      window.location.href = "form2f.html";
    });
  });

});
