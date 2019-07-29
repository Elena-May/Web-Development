# Grid CSS

Helpful Website: https://gridbyexample.com/

in container css:
display: grid;
to declare

FlexBox is good for one dimensional, less good for rows
Grid - introduces a two dimensional grid system which works with columns and rows.

grid-column: start / end
grid-row: start / end
grid-area: c start/ r start/ c end/ r end 
span 2

order: changing the order of how things are laid out in the code

grid-template-columns: can set as percentages
grid-template-rows: ''     ''

repeat (5 no%)
specify the amount of columns and there equal percentages

Can also use fractions to create rows

grid-template: rows / columns


### Jen Simmons - Mondrian Painting

Represented in html as different images
alt-text on every single image
Gives the colour of the images
Like reading a poem if anyone else looked at it, if you read the colours, thats what the painting would hear like.

The html should lock in the essence of what it is we need to convey.

repeat(auto-fit, minmax(80px, 1fr))
Telling the browser to make a bunch of columns but not how many, want them each to be a minimum of 80px
This is why we dont need a media query
Browser changes the amount of columns based on this syntax
1fr - you are all going to stay the same as each other

grid-auto-rows: 80px
figure out how many rows to make but they are alwasy 80 pixels tall

grid-auto-flow: dense
if something next in the flow doesn't fit it moves it to the next available space, but if the next thing does fit in the previous available space it will move it before the first thing.
Things slightly re-arrange themselves to fill in as many gaps as possible


## giving the list items dimensions
auto-fit
e.g. If you set the width of your grid to 80% of the page, and say that all boxes must be the same width, then they will fit onto the screen and change size as the size of the screen changes.

