// can also use this array elsewhere to populate forms
var jobCategories = ["Accounting/Finance", "Automotive", "Carpentry", "General Labor",
"Construction", "Plumbing", "HVAC", "Consultation", "Landscaping/Gardening", "Graphic Design",
"Photography", "Culinary Services", "Computer Programming", "Academic Tutoring"];


// *******************************************************************************************
// WARNING ONLY USE ONCE TO SEED DATABASE, ERASE FUNCTION CALL AFTER USING ONCE
// OR ELSE YOU WILL HAVE A VERY VERY BAD TIME
// *******************************************************************************************

function databaseSeeder(){
  for (var i = 0; i <= 100; i++) {
    var randomName = faker.name.findName();
    var randomEmail = faker.internet.email();
    var randomUsername = faker.internet.userName();
    var randomPassword = faker.internet.password();
    var randomAvatar = faker.internet.avatar();
    var randomJob = jobCategories[Math.floor(Math.random() * jobCategories.length)];
    var randomSpecialization = faker.name.jobType();
    var randomLooking = jobCategories[Math.floor(Math.random() * jobCategories.length)];

    console.log(randomName);
    console.log(randomEmail);
    console.log(randomUsername);
    console.log(randomPassword);
    console.log(randomAvatar);
    console.log(randomJob);
    console.log(randomSpecialization);
    console.log(randomLooking);
  }
}
