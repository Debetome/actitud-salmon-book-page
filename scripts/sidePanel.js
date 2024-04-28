import { changeBookContent, scrollToSection } from "./bookContent";
import bookIndex from "./bookIndex";

export function toggleSidePanel() {
    const sidePanel = document.getElementById("side-panel");
    if (sidePanel.classList.contains("hidden")) {
        sidePanel.classList.remove("hidden");
        return;
    }

    sidePanel.classList.add("hidden");
}

export function changePanelSelection(index) {
    if (index < 0 || index >= bookIndex.length) return;

    const childLists = document.querySelectorAll("#side-panel #side-panel-list .side-panel-childlist");    
    const bookPartLinks = [...document.querySelectorAll("#side-panel #side-panel-list li")]
        .filter(li => !li.parentElement.classList.contains("side-panel-childlist"))
        .map(li => li.firstChild);

    const shownChildList = document.querySelector("#side-panel #side-panel-list .side-panel-childlist.shown");
    const partSelected = document.querySelector("#side-panel #side-panel-list li a.selected");        

    if (partSelected || shownChildList) {
        shownChildList.classList.remove("shown");
        partSelected.classList.remove("selected");

        if (partSelected === bookPartLinks[index] || shownChildList === childLists[index])
            return;
    }                

    changeBookContent(index)

    bookPartLinks[index].classList.add("selected");
    if (index < childLists.length)
        childLists[index].classList.add("shown");
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
                
                childListLink.addEventListener("click", () => scrollToSection(section));
                childListLink.innerText = `${section}`;

                childListElement.appendChild(childListLink);
                childList.appendChild(childListElement);
            })

            sidePanelList.appendChild(childList);
        }
    }
}

function initPanelListEvents() {
    const sidePanelList = document.querySelector("#side-panel #side-panel-list");
    const childLists = document.querySelectorAll("#side-panel #side-panel-list .side-panel-childlist");    
    const bookPartLinks = [...document.querySelectorAll("#side-panel #side-panel-list li")]
        .filter(li => !li.parentElement.classList.contains("side-panel-childlist"))
        .map(li => li.firstChild);    

    bookPartLinks.forEach((partLink, index) => {
        partLink.addEventListener("click", (event) => {            
            const shownChildList = document.querySelector("#side-panel #side-panel-list .side-panel-childlist.shown");
            const partSelected = document.querySelector("#side-panel #side-panel-list li a.selected");            

            if (partSelected || shownChildList) {
                sidePanelList.style.height = `100%`;
                shownChildList.classList.remove("shown");
                partSelected.classList.remove("selected");

                if (partSelected === partLink || shownChildList === childLists[index])
                    return;
            }            
                                    
            changeBookContent(index)

            partLink.classList.add("selected");            
            if (index < childLists.length)
                childLists[index].classList.add("shown");            

            const sidePanelHeight = parseInt(window.getComputedStyle(sidePanelList).height.replace("px", ""));
            const childListHeight = parseInt(window.getComputedStyle(childLists[index]).height.replace("px", "")) * 0.8;

            if (childLists[index].children.length >= 2)
                sidePanelList.style.height = `${sidePanelHeight + childListHeight}px`;
        })
    });
}

function initChildListEvents() {
    const childListsLinks = [...document.querySelectorAll("#side-panel #side-panel-list .side-panel-childlist li a")];

    childListsLinks.forEach(childLink => {
        childLink.addEventListener("click", (event) => {
            event.preventDefault();
        });
    })
}