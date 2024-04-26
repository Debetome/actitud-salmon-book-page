import { toggleSidePanel } from "./sidePanel";

export function initTopPanel() {
    const topPanelBtn = document.querySelector("#top-panel-btn a");
    topPanelBtn.addEventListener("click", () => {
        toggleSidePanel();        
    })
}