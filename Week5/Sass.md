# Good Software Engineering Practices - 
Avoid using magic numbers - hard coded values, very hard to change globally
Code repitition is bad.
Avoid using long code blocks.


## Introducing BEM - 
Block Element Modifier
A naming convention/style guide

When you defined a block - give it a class

For anything inside of that, should be written as - block__element

Classnames can also be long, produces alot of 'boilerplate' css


## Introducing SASS - 

A preprocesser for css
Takes .sass  or .scss files and makes css
Install through npm "node-sass"

    $variableName: #11111

    body {
        color: $variableName;
    }

Good for a style guide, seperate file of variables.


## The Ampersand (&)
Used to reference the parent selector within a nest
One of the most powerful features of SASS


## Mixins 
Act like mini functions
Whenever you are going to repeat code for more than one block, use a mixin

@mixin name($variable) {

}

## Inheritance
Similar to mixins but with no variable passing in 
Define a button, just change colour e.t.c.

On the spot media queries
With SASS - media queries can be added inside the nest

    p {
        width: 1000px;
        @media(max-width: 1000px)
    }


Combining SASS and BEM

    From this:
    .parent-div {}
    .parent-div__child {}

    To this: 
    .parent-div {
        &div__child {

        }
    }

## Global vs Local Styling

## Architecting Global SASS

