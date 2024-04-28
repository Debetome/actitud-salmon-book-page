export function initResponsiveness() {
    window.addEventListener("resize", () => toggleSidePanelState());
    toggleSidePanelState();
}

function toggleSidePanelState() {
    const sidePanel = document.getElementById("side-panel");
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth <= 580) {
        sidePanel.classList.add('hidden');
        return;
    }
    
    sidePanel.classList.remove('hidden');
}