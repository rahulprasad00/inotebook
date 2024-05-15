
use('Alpha');

db.createCollection("courses")

// db.courses.insertMany([
//     {
//         "name": "Rahul's Web Development Masterclass",
//         "price": "49$"
//     },
//     {
//         "name": "Advanced Web Development with Rahul",
//         "price": "55$"
//     },
//     {
//         "name": "Rahul's Complete Frontend Bootcamp",
//         "price": "52$"
//     },
//     {
//         "name": "Ultimate Backend Development by Rahul",
//         "price": "48$"
//     },
//     {
//         "name": "Rahul's Comprehensive Web Design Course",
//         "price": "51$"
//     },
//     {
//         "name": "Full Stack Web Development with Rahul",
//         "price": "53$"
//     },
//     {
//         "name": "Rahul's JavaScript Mastery Course",
//         "price": "47$"
//     },
//     {
//         "name": "Responsive Web Development with Rahul",
//         "price": "50$"
//     },
//     {
//         "name": "Rahul's Web Development Crash Course",
//         "price": "46$"
//     }
// ])

let a= db.courses.find({price:"0$"})
console.log(db.courses.countDocuments());
