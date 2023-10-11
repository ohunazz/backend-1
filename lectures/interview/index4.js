// Valid [<section>, </section>, <div>, </div>]
// Not Valid [<a>,<div>,</a>,</div>]
// Write a function, that takes an array of html tags. Return true if they have valid order and syntax, structure. Otherwise, return false
// <a>
//   <div></div>
//  <section><p></p>
// </a>
// </section>

const isValidTags = (arr) => {
    const validPairs = {
        "<section>": "</section>",
        "<div>": "</div>",
        "<a>": "</a>"
    };
    const tags = [];

    for (let i = 0; i < arr.length; i++) {
        const tag = arr[i];
        if (validPairs[tag]) {
            tags.push(tag);
        }

        return false;
    }
};

console.log(
    isValidTags([
        "<a>",
        "<div></div>",
        "<section><p></p>",
        "</a>",
        "</section>"
    ])
);
