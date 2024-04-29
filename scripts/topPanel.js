import { toggleSidePanel } from "./sidePanel.js";

export function initTopPanel() {
    const topPanelBtn = document.querySelector("#sidepanel-btn a");
    topPanelBtn.addEventListener("click", () => {
        toggleSidePanel();        
    })
}