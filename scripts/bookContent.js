import MarkdownIt from "markdown-it";
import bookIndex from "./bookIndex";

import AppState from "./state";

const md = new MarkdownIt();

export function changeBookContent(index) {
    const markdownContainer = document.getElementById("markdown-container");
    const selectedContent = bookIndex[index].content

    fetchMarkdownFile(selectedContent)
        .then(markdownText => {
            markdownContainer.innerHTML = md.render(markdownText)            
            AppState.setState("contentIndex", index);
            scrollTop();
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

export function scrollToSection(title) {
    const contentContainer = document.getElementById("book-content-container");
    const markdownContainer = document.getElementById("markdown-container");
    const sectionTitle = [...markdownContainer.querySelectorAll("h1,h2,h3")]
        .filter(h2 => h2.innerText === title)[0];
    
    contentContainer.scrollTop = sectionTitle.offsetTop - contentContainer.offsetTop;
}

export function initBookContent() {
    changeBookContent(0);
}

function scrollTop() {
    const contentContainer = document.getElementById("book-content-container");
    contentContainer.scrollTop = 0;
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