// ===== DEFINE TEAMS =====
const USERS = {
  team1: "pwd1",
  team2: "pwd2",
  team3: "pwd3",
  team4: "pwd4",
  team5: "pwd5",
  team6: "pwd6",
  team7: "pwd7",
  team8: "pwd8",
  team9: "pwd9",
  team10: "pwd10"
};

document.getElementById("loginBtn").addEventListener("click", () => {
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();

  if (!USERS[u] || USERS[u] !== p) {
    alert("Invalid login");
    return;
  }

  // Store team for backend tagging if needed
  sessionStorage.setItem("team", u);

  // Move to dashboard / village selection
  window.location.href = "dashboard.html";
});
