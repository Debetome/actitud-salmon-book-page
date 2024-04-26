import bookIndex from "./bookIndex";

export function toggleSidePanel() {
    const sidePanel = document.getElementById("side-panel");
    if (sidePanel.classList.contains("hidden")) {
        sidePanel.classList.remove("hidden");
        return;
    }

    sidePanel.classList.add("hidden");
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

        tempContainer.innerHTML = `<li><a href="#">${bookIndex[i].title}</a></li>`;
        sidePanelList.appendChild(tempContainer.firstChild);

        if ("sections" in bookIndex[i]) {
            const childList = document.createElement("ul");
            childList.className = "side-panel-childlist";

            bookIndex[i].sections.forEach((section, index) => {
                const tempSection = document.createElement("div");
                const id = section.id;
                const title = section.title;

                tempSection.innerHTML = `<li><a href="${id}">${title}</a></li>`;
                childList.appendChild(tempSection.firstChild);
            })

            sidePanelList.appendChild(childList);
        }
    }
}

function initPanelListEvents() {
    const childLists = document.querySelectorAll("#side-panel #side-panel-list .side-panel-childlist");    
    const bookPartLinks = [...document.querySelectorAll("#side-panel #side-panel-list li")]
        .filter(li => !li.parentElement.classList.contains("side-panel-childlist"))
        .map(li => li.firstChild);    

    bookPartLinks.forEach((partLink, index) => {
        partLink.addEventListener("click", (event) => {            
            const shownChildList = document.querySelector("#side-panel #side-panel-list .side-panel-childlist.shown");
            const partSelected = document.querySelector("#side-panel #side-panel-list li a.selected");

            if (partSelected || shownChildList) {
                shownChildList.classList.remove("shown");
                partSelected.classList.remove("selected");

                if (partSelected === partLink || shownChildList === childLists[index])
                    return;
            }            

            partLink.classList.add("selected");            
            if (index < childLists.length)
                childLists[index].classList.add("shown");
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