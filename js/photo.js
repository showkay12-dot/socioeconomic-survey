document.addEventListener("DOMContentLoaded", () => {

  let lat = "";
  let lon = "";

  // ---- LOAD SESSION DATA ----
  document.getElementById("villageName").value =
    sessionStorage.getItem("village") || "";

  document.getElementById("houseNo").value =
    sessionStorage.getItem("houseNo") || "";

  document.getElementById("teamName").value =
    sessionStorage.getItem("team") || "";

  // ---- GET LOCATION ----
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => {
        lat = pos.coords.latitude;
        lon = pos.coords.longitude;
        latitude.value = lat;
        longitude.value = lon;
        locationStatus.innerText = "Location captured";
      },
      () => {
        locationStatus.innerText = "Location permission denied";
      }
    );
  } else {
    locationStatus.innerText = "Geolocation not supported";
  }

  // ---- CONVERT IMAGE TO BASE64 ----
  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  // ---- SUBMIT PHOTO ----
  document.getElementById("photoForm").addEventListener("submit", async e => {
    e.preventDefault();

    const fileInput = document.getElementById("photoInput");
    if (!fileInput.files.length) {
      alert("Please capture photo");
      return;
    }

    const imageBase64 = await toBase64(fileInput.files[0]);

    const payload = {
      villageName: villageName.value,
      houseNo: houseNo.value,
      team: teamName.value,
      latitude: lat,
      longitude: lon,
      image: imageBase64
    };

    callAPI({
      action: "uploadHouseholdPhoto",
      payload
    }).then(() => {
      alert("Survey completed for this household");

      sessionStorage.removeItem("houseNo");
      window.location.href = "dashboard.html";
    });
  });

});
