Command line - to rebundle when you add another file:
npx webpack

There are 2 different ways to use exports in your code: named exports and default exports. Which option you use depends on what you’re exporting. As a general rule if you want to export multiple functions use named exports with this pattern:
const functionOne = () => 'ONE'
const functionTwo = () => 'TWO'

export {
 functionOne,
   functionTwo
}
and to import them:
import {functionOne, functionTwo} from './myModule'
Using this pattern gives you the freedom to only import the functions you need in the various files of your program. So it’s perfectly fine to only import functionOne if that’s the only one you need.

