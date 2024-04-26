import MarkdownIt from "markdown-it";
import bookIndex from "./bookIndex";

import AppState from "./state";

const md = new MarkdownIt();

export function initBookContent() {
    const markdownContainer = document.getElementById("markdown-container");
    const initContent = bookIndex[0].content

    fetchMarkdownFile(initContent)
        .then(markdownText => {
            markdownContainer.innerHTML = md.render(markdownText)
            AppState.setState("contentIndex", 0);
        });
}

export function changeBookContent(index) {
    const markdownContainer = document.getElementById("markdown-container");
    const selectedContent = bookIndex[index].content

    fetchMarkdownFile(selectedContent)
        .then(markdownText => {
            markdownContainer.innerHTML = md.render(markdownText)            
            AppState.setState("contentIndex", index);
        });  
}

export function nextBookPart() {
    const index = AppState.getState("contentIndex") + 1;
    if (index === bookIndex.length)
        return;

    changeBookContent(index);
}

export function previousBookPart() {
    const index = AppState.getState("contentIndex") - 1;
    if (index < 0)
        return;

    changeBookContent(index);
}

function fetchMarkdownFile(filePath) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(markdownText => {                       
            return markdownText;
        })
        .catch(error => {
            console.error('Error fetching the Markdown file:', error);
        });
}