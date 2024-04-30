export function parse2Int(value) {
    return parseInt(value.replace("px", ""));
}

export function parse2Float(value) {
    return parseFloat(value.replace("px", ""));
}

export function fetchMarkdownFile(filePath) {
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