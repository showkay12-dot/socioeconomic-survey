document.addEventListener("DOMContentLoaded", () => {

  const tofRows = [];
  const val = id => document.getElementById(id).value.trim();

  // -------- ADD TOF ROW --------
  document.getElementById("addTOFBtn").addEventListener("click", () => {

    const row = [
      val("tofSno"),
      val("tofSpecies"),
      val("tofCode"),
      val("tofDbh"),
      val("tofCrown"),
      val("tofOwner"),
      val("tofCategory")
    ];

    if (row.every(v => v === "")) return;

    tofRows.push(row);

    document.getElementById("tofTable").insertAdjacentHTML(
      "beforeend",
      `<tr>${row.map(v => `<td>${v}</td>`).join("")}</tr>`
    );

    tofSno.value =
    tofSpecies.value =
    tofCode.value =
    tofDbh.value =
    tofCrown.value =
    tofOwner.value =
    tofCategory.value = "";
  });

  // -------- SUBMIT FORM-1A --------
  document.getElementById("form1a").addEventListener("submit", e => {
    e.preventDefault();

    // 🔑 PAYLOAD FIX — MATCHES BACKEND EXACTLY
    const payload = {

      villageName: sessionStorage.getItem("village"),

      villageInfo: [
        val("villageUnit"),
        val("buffer"),
        val("tehsil"),
        val("gp"),
        val("revBlock"),
        val("rangeDivision"),
        val("forestBlock"),
        val("ufsArea")
      ],

      treeDetails: tofRows
    };

    callAPI({
      action: "saveForm1AData",
      payload: payload
    }).then(() => {
      window.location.href = "form2a.html";
    });
  });

});
