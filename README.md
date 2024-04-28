# Markdown Kindle Highlights Notes Formatter

A little utility script to extract the notes/highlights from my Kindle Notes file, into a markdown format, e.g. for [Obsidian](https://obsidian.md/).

## Install

- Make sure there's a directory called `notes` at the root of this directory
- This package depends on [cheerio](https://www.npmjs.com/package/cheerio) for DOM parsing, you need to install dependencies.


## Example

```sh
# Assuming notes/fileName.html exists
node index.js fileName
```

## Usage

You can export a `.html` file of kindle notes using the native kindle app, via the Notebook > Export pathway (as of April 2024)

You have to manually copy-paste the terminal output for now.

