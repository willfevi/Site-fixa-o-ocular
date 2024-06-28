document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("level1").style.display = "block";
});

function playVideo(videoSrc, level) {
    document.getElementById(`level${level}-image`).style.display = "none";
    document.getElementById(`video${level}`).style.display = "block";
    document.getElementById(`video${level}`).src = videoSrc;
    document.getElementById(`video${level}`).play();
    document.getElementById(`level${level}`).querySelector(".pass-button").style.display = "inline-block";
    document.getElementById(`level${level}`).querySelector(".fail-button").style.display = "inline-block";
}

function nextLevel(level) {
    document.getElementById("congratulations").style.display = "block";
    document.getElementById("congratulations").innerText = `Parabéns, você chegou ao nível ${level + 1}!`;
    document.getElementById(`level${level}`).style.display = "none";
    let nextLevel = document.getElementById(`level${level + 1}`);
    if (nextLevel) {
        nextLevel.style.display = "block";
    } else {
        document.getElementById("congratulations").innerText = "Parabéns, você completou todos os níveis!";
    }
    setTimeout(function() {
        document.getElementById("congratulations").style.display = "none";
    }, 2500);
}

function failLevel() {
    alert("Você reprovou no teste. Tente novamente.");
    location.reload();
}
