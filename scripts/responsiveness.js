import { parse2Int } from "./utils.js";
import AppState from "./state.js";

export function initResponsiveness() {
    window.addEventListener("resize", () => {
        toggleSidePanelState();
        adjustSidepanelHeight();
    });

    toggleSidePanelState();
    adjustSidepanelHeight();
}

export function adjustSidepanelHeight() {
    const sidePanelList = document.querySelector("#side-panel #side-panel-list");    
    const height = parse2Int(window.getComputedStyle(sidePanelList).height);    
        
    AppState.setState("smallSidePanel", height < 590);
    sidePanelList.style.paddingBottom = "5rem" ? height < 590 : "2rem";       
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