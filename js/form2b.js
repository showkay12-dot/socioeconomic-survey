document.addEventListener("DOMContentLoaded", () => {

  const stRows = [];
  const val = id => document.getElementById(id).value.trim();

  // ---------- ADD SMALL TIMBER ROW ----------
  document.getElementById("addSTBtn").addEventListener("click", () => {

    if (
      !val("stCode") ||
      !val("itemCode") ||
      !val("subCode") ||
      !val("sizeClass") ||
      !val("number")
    ) return;

    // Backend expects fixed “1” for Small Timber column
    const row = [
      "1",              // Column 4: Small Timber (fixed)
      val("stCode"),    // 5
      val("itemCode"),  // 6
      val("subCode"),   // 7
      val("sizeClass"), // 8
      val("number")     // 9
    ];

    stRows.push(row);

    document.getElementById("stTable").insertAdjacentHTML(
      "beforeend",
      `<tr>
        <td>1</td>
        <td>${val("stCode")}</td>
        <td>${val("itemCode")}</td>
        <td>${val("subCode")}</td>
        <td>${val("sizeClass")}</td>
        <td>${val("number")}</td>
      </tr>`
    );

    stCode.value =
    itemCode.value =
    subCode.value =
    sizeClass.value =
    number.value = "";
  });

  // ---------- SUBMIT FORM-2(B) ----------
  document.getElementById("form2b").addEventListener("submit", e => {
    e.preventDefault();

    const payload = {
      villageName: val("villageName"),
      houseNo: val("houseNo"),

      householdRow: [
        val("villageName"), // 1
        val("houseNo"),     // 2
        val("collectST")    // 3(1)
      ],

      tableRows: stRows
    };

    callAPI({
      action: "saveForm2BData",
      payload
    }).then(() => {
      window.location.href = "form2c.html";
    });
  });

});
