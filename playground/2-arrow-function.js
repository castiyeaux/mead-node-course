// STANDARD FUNCTION
// const square = function(x) {
//     return x * x;
// };

// ARROW FUNCTION - BASIC
// const square = (x) => {
//     return x * x;
// };

// ARROW FUNCTION - SINGLE RETURN STATEMENT ONLY
// const square = (x) => x * x;

// console.log(square(3));


// ARROW FUNCTIONS AS PROPERTIES ON AN OBJECT
/*
Arrow Functions are not well-suited for methods (properties that are functions) when we want to access 'this'
    - best case is to use a standard function or delete ':' and 'function'
Arrow Functions don't bind their own 'this' value
    - use Arrow Function with forEach() since 'this.name' is inaccessable with a standard function
*/
const eventDay = {
    name: "Andrea's Birthday Party",
    guestList: ["Andrea", "Emma", "Erika", "Sean"],
    printGuestList() {
        console.log('Guest List for ' + this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        });
    }
};

eventDay.printGuestList();
