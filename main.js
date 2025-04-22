// Task 1 Write a function to create a badge given name and role

let attendeeName = "Alice";;
let attendeeRole = "coder";
function printBadge(Name, Role) {
    console.log("Name: " + attendeeName + ", Role: " + attendeeRole);
}
printBadge(attendeeName, attendeeRole);


// Task 2 Write a function to calculate the cost of an event given number of attendees and cost per attendee, given 120 attendees and $25 per attendee.

let attendeeCount = 120;
let attendeeCost = 25;

function calculateEventCost(attendeeCount, attendeeCost) {
    let totalCost = attendeeCount * attendeeCost;
    if (attendeeCount > 100) {
        totalCost *= 0.9; // Apply a 10% discount
    }
    return totalCost;
}
let totalCost = calculateEventCost(attendeeCount, attendeeCost);
console.log("Total cost of the event: $" + totalCost);

// Task 3 Write a function that validates an email address as true if it containts both "@" and "." and false otherwise.

let email = "helloworld@gmail.com";

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

console.log("Is the email valid? " + isValidEmail(email)); // Output: true