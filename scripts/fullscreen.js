export function initFullscreenEvent() {
    const fullScreenBtn = document.querySelector("#fullscreen-btn a");

    fullScreenBtn.addEventListener("click", () => {
        const container = document.getElementById("book-content-container");
        if (!document.fullscreenElement) {
            container.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    });
}