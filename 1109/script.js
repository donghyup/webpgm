function showIntroduction() {
    const introDiv = document.getElementById("introduction");
    if (introDiv.style.display === "none") {
      introDiv.style.display = "block"; // 보이기
    } else {
      introDiv.style.display = "none"; // 숨기기
    }
  }
  