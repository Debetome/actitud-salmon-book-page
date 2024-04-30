import { nextBookPart, previousBookPart } from "./bookContent.js";
import { changePanelSelection } from "./sidePanel.js";

import bookIndex from "./bookIndex.js";
import AppState from "./state.js";

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

export function checkNavArrows(index) {
    const navArrows = [...document.querySelectorAll(".nav-arrows")];            

    navArrows.forEach(nav => {
        switch (index) {
            case 0:                
                nav.children[0].classList.add("disabled");
                nav.children[1].classList.remove("disabled");
                break;
            case bookIndex.length - 1:
                nav.children[0].classList.remove("disabled");
                nav.children[1].classList.add("disabled");
                break;
            default:                
                nav.children[0].classList.remove("disabled");
                nav.children[1].classList.remove("disabled");
                break;
        }
    })   
}