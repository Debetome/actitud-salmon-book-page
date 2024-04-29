import { nextBookPart, previousBookPart } from "./bookContent.js";
import { changePanelSelection } from "./sidePanel.js";

import AppState from "./state";

export function initNavArrows() {
    const navArrowsNavs = [...document.querySelectorAll(".nav-arrows")]    

    navArrowsNavs.forEach(nav => {
        const leftArrow = nav.firstElementChild;
        const rightArrow = nav.lastElementChild;  

        leftArrow.addEventListener("click", () => {
            const prevIndex = AppState.getState("contentIndex") - 1;
            changePanelSelection(prevIndex);
            previousBookPart()
        });
        
        rightArrow.addEventListener("click", () => {
            const nextIndex = AppState.getState("contentIndex") + 1;
            changePanelSelection(nextIndex);
            nextBookPart()
        });
    })
}