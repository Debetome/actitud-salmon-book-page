import { changeBookContent, scrollToSection } from "./bookContent.js";
import { adjustSidepanelHeight } from "./responsiveness.js";
import { checkNavArrows } from "./navArrows.js";
import { parse2Int } from "./utils.js";

import bookIndex from "./bookIndex.js";
import AppState from "./state.js";

export function toggleSidePanel() {
    const sidePanel = document.getElementById("side-panel");
    sidePanel.classList.toggle("hidden");
}

export function changePanelSelection(index) {
    if (index < 0 || index >= bookIndex.length) return;

    const sidePanelList = document.querySelector("#side-panel #side-panel-list");
    const childLists = document.querySelectorAll("#side-panel #side-panel-list .side-panel-childlist");    
    const bookPartLinks = [...document.querySelectorAll("#side-panel #side-panel-list li")]
        .filter(li => !li.parentElement.classList.contains("side-panel-childlist"))
        .map(li => li.firstChild);

    const shownChildList = document.querySelector("#side-panel #side-panel-list .side-panel-childlist.shown");
    const partSelected = document.querySelector("#side-panel #side-panel-list li a.selected");        

    if (partSelected || shownChildList) {
        shownChildList.style.height = "0";
        sidePanelList.style.height = "100%";

        shownChildList.classList.remove("shown");
        partSelected.classList.remove("selected");

        adjustSidepanelHeight();

        if (partSelected === bookPartLinks[index] || shownChildList === childLists[index])
            return;
    }                

    changeBookContent(index)    

    bookPartLinks[index].classList.add("selected");
    if (index < childLists.length)
        childLists[index].classList.add("shown");

    const sidePanelHeight = parse2Int(window.getComputedStyle(sidePanelList).height);
    const childListHeight = [...childLists[index].children]
        .map(li => parse2Int(window.getComputedStyle(li).height))
        .reduce((next, current) => next + current);
        
    sidePanelList.style.height = `${sidePanelHeight + childListHeight + 200}px`;
    childLists[index].style.height = `${childListHeight}px`;
}

export function initSidePanel() {
    initPanelList();
    initPanelListEvents();
    initChildListEvents();
}

function initPanelList() {
    const sidePanelList = document.getElementById("side-panel-list");

    for (let i = 0; i < bookIndex.length; i++) {        
        const tempContainer = document.createElement("div");

        tempContainer.innerHTML = `<li><a>${bookIndex[i].title}</a></li>`;
        sidePanelList.appendChild(tempContainer.firstChild);

        if ("sections" in bookIndex[i]) {
            const childList = document.createElement("ul");
            childList.className = "side-panel-childlist";

            bookIndex[i].sections.forEach((section, index) => {
                const childListElement = document.createElement("li");
                const childListLink = document.createElement("a");
                
                childListLink.innerText = `${section}`;
                childListLink.addEventListener("click", () => scrollToSection(section));                

                childListElement.appendChild(childListLink);
                childList.appendChild(childListElement);
            })

            sidePanelList.appendChild(childList);
        }
    }
}

function initPanelListEvents() {       
    const bookPartLinks = [...document.querySelectorAll("#side-panel #side-panel-list li")]
        .filter(li => !li.parentElement.classList.contains("side-panel-childlist"))
        .map(li => li.firstChild);    

    bookPartLinks.forEach((partLink, index) => {
        partLink.addEventListener("click", (event) => {            
            changePanelSelection(index);            
            scrollToSelection(index);
            checkNavArrows(index);         
        });
    });
}

function initChildListEvents() {    
    const childListsLinks = [...document.querySelectorAll("#side-panel #side-panel-list .side-panel-childlist li a")];
    const sidePanel = document.getElementById("side-panel");

    childListsLinks.forEach(childLink => {
        childLink.addEventListener("click", (event) => {
            event.preventDefault();

            if (window.getComputedStyle(sidePanel).position === "absolute")
                toggleSidePanel();
        });
    })
}

function scrollToSelection(index) {
    if (!AppState.getState("smallSidePanel")) return;
         
    const sidePanel = document.getElementById("side-panel");
    const selection = document.getElementById("side-panel-list").children[index];
    sidePanel.scrollTop = selection.offsetTop - sidePanel.offsetTop;
}