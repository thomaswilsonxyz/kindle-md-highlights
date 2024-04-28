const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const notesFileName = process.argv[2];

if (!notesFileName) {
  console.error(`Please provide the notes file name, e.g.:`);
  console.error(`node index.js bookName`);
  throw new Error("Please provide the notes file name");
}

const notes = [];

const fileName = fs.readFileSync(
  path.resolve(__dirname, `notes/${notesFileName}.html`),
  "utf8"
);

if (!fileName) {
  console.error(`File ${notesFileName}.html not found`);
  throw new Error("File not found");
}

const $ = cheerio.load(fileName);

$(".noteText")
  .map((_i, el) => {
    const $content = $(el)
    const text = $(el).text();

    // Remove the text in .noteHeading from the text
    const note = text.replace($content.find(".noteHeading").text(), "").trim();

    notes.push(note);
  })
  .get();

// The Output
console.log(`## Highlight`);

notes.forEach((note, index) => {
  console.log(`> ${note}`);
  console.log(`\n`)
});
