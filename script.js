let showingNotes = true;

document.addEventListener("keydown", function(e) {
  if (e.key.toLowerCase() === "n") {
    showingNotes = !showingNotes;
    document.getElementById("notes").style.display = showingNotes ? "block" : "none";
    document.getElementById("games").style.display = showingNotes ? "none" : "block";
  }

  if (e.key.toLowerCase() === "p") { // Panic key
    showingNotes = true;
    document.getElementById("notes").style.display = "block";
    document.getElementById("games").style.display = "none";
  }
});

