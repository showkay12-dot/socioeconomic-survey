document.addEventListener("DOMContentLoaded", () => {

  const val = id => document.getElementById(id).value.trim();

  document.getElementById("form2a").addEventListener("submit", e => {
    e.preventDefault();

    const payload = {
      villageName: val("villageName"),
      houseNo: val("houseNo"),

      row: [
        val("villageName"),      // 1
        val("ivUnit"),           // 2
        val("houseNo"),          // 3
        val("headName"),         // 4
        val("maleCount"),        // 5
        val("femaleCount"),      // 6
        val("childCount"),       // 7
        val("totalPersons"),     // 8
        val("buildingType"),     // 9
        val("householdStatus"),  // 10
        val("educationLevel"),   // 11
        val("socialGroup"),      // 12
        val("livelihoodCode"),   // 13
        val("landSize"),         // 14
        val("ownership"),        // 15
        val("landType"),         // 16
        val("irrigationSource"), // 17
        val("monthlyIncome")     // 18
      ]
    };

    callAPI({
      action: "saveForm2AData",
      payload
    }).then(() => {
      window.location.href = "form2b.html";
    });

  });

});
