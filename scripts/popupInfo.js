import MarkdownIt from "markdown-it";
import bookInfo from "url:../markdown/info/book_info.txt";
import pageInfo from "url:../markdown/info/page_info.txt";

import { toggleDarkBackground } from "./darkBackground";
import { fetchMarkdownFile } from "./utils";

const md = new MarkdownIt();

export function initPopupInfo() {    
    initPopupEvents();
    parsePopupContent();
}

function initPopupEvents() {
    const popupInfo = document.getElementById("popup-info");
    const okBtn = document.getElementById("popup-ok-btn");
    const infoBtn = document.getElementById("info-btn");

    infoBtn.addEventListener("click", () => togglePopupInfo());
    okBtn.addEventListener("click", () => togglePopupInfo());

    window.addEventListener("keydown", () => {
        if (popupInfo.classList.contains("displayed"))
            togglePopupInfo();
    });

    parsePopupContent();
}

function togglePopupInfo() {    
    const popupInfo = document.getElementById("popup-info");    
    popupInfo.classList.toggle("displayed");
    toggleDarkBackground();   
}

function parsePopupContent() {
    const bookInfoContent = document.getElementById("popup-book-info");
    const pageInfoContent = document.getElementById("popup-page-info");

    fetchMarkdownFile(bookInfo).then(code => {
        bookInfoContent.innerHTML = md.render(code)
    });

    fetchMarkdownFile(pageInfo).then(code => {
        pageInfoContent.innerHTML = md.render(code);
    });
}