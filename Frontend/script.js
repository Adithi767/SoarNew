document.getElementById("get-started").onclick = () => {
    document.getElementById("intro-screen").style.display = "none";
    const journalPage = document.getElementById("journal-page");
    journalPage.style.display = "block";
    setTimeout(() => {
    journalPage.classList.add("show");
  }, 50);
};
