// Sec 3.10
console.log('Yo yo ma -- weez be starting');

// Define the logpeep funct 
function logpeep(personne) {

    // This is going to print the separated name to the console
    console.log(personne);
}

// Define the personne function to separate the name
var personne = function(fname, mname, lname){
    this.name1 = fname;
    this.name2 = mname;
    this.name3 = lname;
}

// Define a person with 3 parts of their name
var mssg = new personne('mmmmm', 'ssssssss', 'ggggg');

// Pass the person to the logpeep funct
logpeep(mssg);

// Define a person with 3 parts of their name
var rkg = new personne('rube', 'kaur','gill');

// Pass the person to the logpeep funct
logpeep(rkg);
