import bookIndex from "./bookIndex";

export function initSidePanel() {
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
