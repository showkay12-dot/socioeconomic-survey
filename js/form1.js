document.addEventListener("DOMContentLoaded", () => {

  const occRows = [];
  const landUseRows = [];
  const landHoldingRows = [];
  const waterDrinkRows = [];
  const waterIrrRows = [];

  const val = id => document.getElementById(id).value.trim();

  document.getElementById("addOccupationBtn").onclick = () => {
    if (!val("occName") || !val("occHH")) return;
    occRows.push([val("occName"), val("occHH")]);
    occupationTable.innerHTML += `<tr><td>${val("occName")}</td><td>${val("occHH")}</td></tr>`;
    occName.value = occHH.value = "";
  };

  document.getElementById("addLandUseBtn").onclick = () => {
    if (!val("luType") || !val("luArea")) return;
    landUseRows.push([val("luType"), val("luArea")]);
    landUseTable.innerHTML += `<tr><td>${val("luType")}</td><td>${val("luArea")}</td></tr>`;
    luType.value = luArea.value = "";
  };

  document.getElementById("addLandHoldingBtn").onclick = () => {
    if (!val("lhCat") || !val("lhHH")) return;
    landHoldingRows.push([val("lhCat"), val("lhHH")]);
    landHoldingTable.innerHTML += `<tr><td>${val("lhCat")}</td><td>${val("lhHH")}</td></tr>`;
    lhCat.value = lhHH.value = "";
  };

  document.getElementById("addWaterDrinkBtn").onclick = () => {
    if (!val("wdSource") || !val("wdHH")) return;
    waterDrinkRows.push([val("wdSource"), val("wdHH")]);
    waterDrinkTable.innerHTML += `<tr><td>${val("wdSource")}</td><td>${val("wdHH")}</td></tr>`;
    wdSource.value = wdHH.value = "";
  };

  document.getElementById("addWaterIrrBtn").onclick = () => {
    if (!val("wiSource") || !val("wiVal")) return;
    waterIrrRows.push([val("wiSource"), val("wiVal")]);
    waterIrrTable.innerHTML += `<tr><td>${val("wiSource")}</td><td>${val("wiVal")}</td></tr>`;
    wiSource.value = wiVal.value = "";
  };

  document.getElementById("form1").addEventListener("submit", e => {
    e.preventDefault();

    const payload = {
      villageName: val("villageName"),

      basicInfo: [
        val("villageName"),
        val("bufferStratum"),
        val("tehsil"),
        val("panchayat"),
        val("revenueBlock"),
        val("forestRange"),
        val("forestBlock"),
        val("popMale"),
        val("popFemale"),
        val("popChildren"),
        val("popTotal"),
        val("hhBPL"),
        val("hhAPL"),
        val("hhOtherCat"),
        val("totalHH"),
        val("avgHHSize")
      ],

      primaryOccupation: occRows.map((r,i)=>[val("villageName"), i+1, r[0], r[1]]),
      landUse: landUseRows.map((r,i)=>[val("villageName"),"", i+1, r[0], r[1]]),
      landHolding: landHoldingRows.map((r,i)=>[val("villageName"), i+1, r[0], r[1]]),

      forestRights: [[
        val("villageName"),
        val("indRights"),
        val("comRights"),
        val("devRights"),
        "",
        ""
      ]],

      waterSources: waterDrinkRows.map((r,i)=>[val("villageName"), i+1, r[0], r[1]]),

      naturalWaterSources: [[ val("villageName") ]],

      livelihood: [
        val("livEmployment"),
        val("livEcotourism"),
        val("livFuelwood"),
        val("livNTFP"),
        val("informantName"),
        val("informantType"),
        val("informantGender"),
        val("informantAge"),
        val("informantOccupation"),
        val("informantEducation"),
        val("remarks"),
        val("interviewerName"),
        val("interviewerDesignation"),
        val("groupMembers"),
        "",
        val("surveyDate")
      ]
    };

    callAPI({
      action: "saveForm1Data",
      payload
    }).then(() => {
      sessionStorage.setItem("village", val("villageName"));
      window.location.href = "form1a.html";
    });
  });

});
