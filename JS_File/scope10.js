                // scope - let, var, const

/*
 1. Scope
Scope determines where a variable can be accessed.
Global Scope: Variables declared outside any function or block.
Function Scope: Variables declared inside a function are only accessible within that function.
Block Scope: Variables declared inside a block { ... } using let or const are only accessible inside that block. */

function example() {
  let a = 10;  // a is scoped to this function
}
console.log(a);

// ❌ Error: a is not defined





/* 🧱 2. let
Block-scoped: Accessible only within the block {} where it's defined.
Can be updated, but not re-declared in the same scope.
Does not hoist the way var does.

let x = 5;
x = 10;       // ✅ Okay
let x = 20;   // ❌ Error in same scope  */ 




/*🛑 3. const
Block-scoped, like let.
Cannot be updated or re-declared.
Must be initialized at the time of declaration.
For objects/arrays, the reference is constant, but you can still change the content.   */

const y = 10;
y = 20;       // ❌ Error: assignment to constant
const obj = { name: "Alice" };
obj.name = "Bob"; // ✅ Allowed (changing property)




/*4. var
Function-scoped (NOT block-scoped).
Can be updated and re-declared in the same scope.
Hoisted: Variables declared with var are moved ("hoisted") to the top of their scope, but only the declaration, not the value. */

function test() {
  console.log(a); // undefined (not error!)
  var a = 5;
  console.log(a);   
}           // 5

/*


✅ Summary Table
Keyword	Scope	Hoisting	Re-declarable	Re-assignable
var	Function	Yes	         Yes	        Yes
let	Block	    No	         No	            Yes
const	Block	No	         No         	No (except contents of objects/arrays)
*/