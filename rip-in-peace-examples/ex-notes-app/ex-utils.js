console.log('ex-utils.js');

const lastName = 'Castillo';

const add = function(a, b) {
    return a + b;
}

// No/Not anymore - I made everything too complicated per usual
// module.exports = lastName;
// module.exports = add;

// No - 'add is not a function at app.js: const sum = add(x, y);'
// module.exports = {
//     lastName, 
//     add
// };

// Yes!
module.exports = {
    lastName: lastName, 
    add: add
};
// or
// module.exports.lastName = lastName;
// module.exports.add = add;
