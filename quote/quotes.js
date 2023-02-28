function nextquo(){
    const quotes = {"- Roronova Zoro":'“If I can’t even protect my captain’s dream, then whatever ambition I have is nothing but talk! Luffy must be the man who becomes the Pirate King!”',
"- Gojo Satoru":'“But no matter how many allies you have around you, when you die, you’ll be alone.”',
"- Uchiha Itachi":'“People`s lives don`t end when they die. It ends when they lose faith.”',
"- Uchicha Madara":'“Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality only pain, suffering and futility exist.”',"- Monkey D Luffy":'“Then just become stronger. I have my ambition; you have your ambition too. Which means you should just keep walking forward towards that goal.”'}

let authors = Object.keys(quotes)

let author = authors[Math.floor(Math.random() * authors.length)]

let quote = quotes[author];

document.getElementById("quo").innerHTML = quote;
document.getElementById("auth").innerHTML = author;
}