export function initFullscreenEvent() {
    const fullScreenBtn = document.querySelector("#fullscreen-btn a");
    const minimizeBtn = document.getElementById("minimize-btn");

    fullScreenBtn.addEventListener("click", () => toggleFullscreen());
    minimizeBtn.addEventListener("click", () => toggleFullscreen());

    document.addEventListener('fullscreenchange', (event) => {
        if (!document.fullscreenElement) {
            const minimizeBtn = document.getElementById("minimize-btn");
            minimizeBtn.classList.remove("fullscreen");
        }
    });
}

function toggleFullscreen() {
    const container = document.getElementById("book-content-container");
    const minimizeBtn = document.getElementById("minimize-btn");

    if (!document.fullscreenElement) {
        container.requestFullscreen().then(_ => {
            minimizeBtn.classList.add("fullscreen");
        }).catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        minimizeBtn.classList.remove("fullscreen");
        document.exitFullscreen();
    }
}