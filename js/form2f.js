document.addEventListener("DOMContentLoaded", () => {

  const tofRows = [];
  const val = id => document.getElementById(id).value.trim();

  // ---- ADD TOF TIMBER ROW ----
  document.getElementById("addTOFTimberBtn").addEventListener("click", () => {

    const row = [
      val("sno"),          // 5.1 S. No.
      val("speciesCode"),  // 5.2
      val("speciesName"),  // 5.3
      val("dbh"),          // 5.4
      val("cutPurpose"),   // 5.5
      val("permission"),   // 5.6
      val("remarks")       // 5.7
    ];

    if (row.every(v => v === "")) return;

    tofRows.push(row);

    document.getElementById("tofTimberTable").insertAdjacentHTML(
      "beforeend",
      `<tr>${row.map(v => `<td>${v}</td>`).join("")}</tr>`
    );

    sno.value =
    speciesCode.value =
    speciesName.value =
    dbh.value =
    cutPurpose.value =
    permission.value =
    remarks.value = "";
  });

  // ---- SUBMIT FORM-2(F) ----
  document.getElementById("form2f").addEventListener("submit", e => {
    e.preventDefault();

    const payload = {

      villageName: val("villageName"),
      houseNo: val("houseNo"),

      header: [
        val("tehsilName"),   // 1
        val("villageName"),  // 2
        val("houseNo"),      // 3
        val("ownerTimber")   // 4
      ],

      tableRows: tofRows
    };

    callAPI({
      action: "saveForm2FData",
      payload
    }).then(() => {
      // End of household forms
      window.location.href = "dashboard.html";
    });
  });

});
