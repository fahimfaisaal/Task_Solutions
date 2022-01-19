function tagReplacer(html: string, targetTag: string, replaceTag: string): string {
    const regex: RegExp = new RegExp(`(?<=<\/?)(${targetTag})(?=>)`, 'g');
    
    return html.replace(regex, replaceTag);
}

const pieceOfHtml: string = '<p>this p>is a <span>paragraph</span></p>';
console.log(tagReplacer(pieceOfHtml, 'p', 'div'))