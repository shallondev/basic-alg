/*
    Recurssion with Factorials

    Idea: Use recurssion to find n! for any vairable n. 

    Why Recursive functions work in JS:
        Call Stack: 
            Since functions are 'pushed' into a stack and then 'popped' off the stack we can:
                Create a base case that will be popped off the stack first.
                Recursively perform an operation on the previous call starting with the base case.
    
    Example of n!:
        How humans do it:
            n! = n(n-1)(n-2)...(3)(2)(1)
        Problem for Computer:
            How do we know many times to perform * if we are getting an arbitrary n?
        Solution:
            Use recursion! Since we know the base case is 1, that is 1! = 1 we can do the following:
                Define a function fact(n):
                    Base case:
                        if n is 1 then return 1.
                    Recursive step:
                        if n > 1 then return fact(n-1)
            This is equivlanet to doing the following:
                n!
                n(n-1)!
                n(n-1)(n-2)!
                .
                .
                .
                n(n-1)(n-2)...3!
                n(n-1)(n-2)...(3)2!
                n(n-1)(n-2)...(3)(2)1!
                n(n-1)(n-2)...(3)(2)(1)
    
    Time Complexity of n!:
        Recurrance relation: T(n) = T(n-1) + O(1) => O(n) = Ω(n)
        In words: The function must call itself n times no matter what so we are on linear time.
*/

// Assumption: n > 0.
function fact(n) {
    // Base case
    if (n === 1) { return 1; }
    // Recursive step
    else { return n * fact(n-1); }
}

// Test cases
console.log(fact(1)) // Expected 1
console.log(fact(2)) // Expected 2
console.log(fact(3)) // Expected 6
console.log(fact(4)) // Expected 24
console.log(fact(10)) // Expected 2628800