// const numColumns = 5;

// document.getElementById("generateBtn").addEventListener("click", function () {
//   const words = document
//     .getElementById("wordList")
//     .value.split("\n")
//     .filter(Boolean); // Split by new line and filter out empty strings
//   const sortedWords = words.sort((a, b) => a.length - b.length); // Sort by length

//   const maxWordsPerPage = 20 * numColumns;
//   let remainingWords = sortedWords.slice();
//   const output = document.getElementById("output");
//   output.innerHTML = ""; // Clear previous tables

//   while (remainingWords.length) {
//     const tableWords = remainingWords.splice(0, maxWordsPerPage);
//     const table = generateTable(tableWords);
//     output.appendChild(table);

//     if (remainingWords.length) {
//       // Only append a page break if there are more words to process
//       const pageBreak = document.createElement("div");
//       pageBreak.className = "page-break";
//       output.appendChild(pageBreak);
//     }
//   }
// });

// function generateTable(words) {
//   // Determine the number of columns and rows for the current set of words
//   const numRows = Math.ceil(words.length / numColumns);
//   const columns = Array.from({ length: numColumns }, () => []);

//   for (let i = 0; i < words.length; i++) {
//     columns[i % numColumns].push(words[i]);
//   }

//   const table = document.createElement("table");

//   for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
//     const row = document.createElement("tr");
//     for (let colIndex = 0; colIndex < numColumns; colIndex++) {
//       const cell = document.createElement("td");
//       if (columns[colIndex][rowIndex]) {
//         cell.textContent = columns[colIndex][rowIndex];
//       }
//       row.appendChild(cell);
//     }
//     table.appendChild(row);
//   }

//   return table;
// }

function generate(words) {
  const sortedWords = words.sort((a, b) => a.length - b.length); // Sort by length

  // Organize words into columns
  const numColumns = 7; // Math.ceil(Math.sqrt(sortedWords.length));
  console.log("numColumns", numColumns);
  const numRows = Math.ceil(sortedWords.length / numColumns);
  const rows = Array.from({ length: numRows }, () => []);

  for (let i = 0; i < sortedWords.length; i++) {
    rows[i % numRows].push(sortedWords[i]);
  }

  // Render the tables
  const output = document.getElementById("output");
  output.innerHTML = ""; // Clear previous tables
  const table = document.createElement("table");
  for (let i = 0; i < numRows; i++) {
    const row = document.createElement("tr");
    for (let word of rows[i]) {
      const cell = document.createElement("td");
      cell.textContent = word;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  output.appendChild(table);
}

document.getElementById("generateBtn").addEventListener("click", function () {
  const words = document
    .getElementById("wordList")
    .value.split("\n")
    .filter(Boolean); // Split by new line and filter out empty strings
  generate(words);
});

// Multiline string
// Badonkadonk
// blackberries
// const words = `
// words
// locations
// base
// top
// bottom
// canopy
// water
// buddha
// beaver
// toucan
// duck
// rack
// snooze
// love
// pelican
// consent
// chesticle
// jug
// anaconda
// goat
// side
// junk
// muffin
// bone
// ball
// hole
// shaft
// feet
// hand
// legs
// nose
// neck
// finger
// glutes
// lip
// eye
// brow
// toe
// body
// part
// head
// hair
// elbow
// I
// I'll
// me
// you
// my
// your
// their
// us
// soft
// hard
// careful
// rough
// glorious
// fast
// slowly
// cold
// steamy
// under
// tight
// y
// ly
// ed
// ing
// tion
// s
// es
// er
// est
// all
// let
// never
// out
// always
// again
// only
// to
// with
// above
// below
// under
// between
// I'll
// or
// in
// on
// is
// a
// on
// that
// into
// up
// want
// like
// so
// it
// when
// ,
// that
// because
// into
// the
// can
// ?
// for
// be
// do
// and
// and
// !

// time
// now
// tonight
// tomorrow

// verbs
// thrust
// get
// tickle
// aspire
// lust
// have
// eat
// squat
// whip
// sit
// chew
// grasp
// titillate
// squeeze
// lick
// make
// gasp
// scissor
// feel
// hold
// entangle
// contain
// whisper
// say
// tell
// lift
// throw
// caress
// stroke
// suck
// explode
// smooth
// give
// `;
const words = `
a
a
about
act
and
and
are
are
as
ask
at
at
bacon
be
be
beauty
been
but
by
by
can
d
deep
do
ed
far
garden
has
have
I
I
in
in
ing
is
it
ice
learn
lock
rope
matter
music
must
my
not
of
on
party
play
please
read
s
s
shadow
show
smell
stay
table
curtain
to
to
try
those
up
we
when
why
who
what
wonder
you
the
the
your
your
because
although
about
through
among
yet
since
if
until
while
as
an
YOLO
explore
excite
remember
`;

generate(words.split("\n").filter(Boolean));
