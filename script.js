function calculateAge() {
    var birthDate = new Date(document.getElementById("birthDate").value);
    var currentDate = new Date();

    var ageInMilliseconds = currentDate - birthDate;

    // Calculate years
    var years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

    // Calculate months
    var months = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));

    // Calculate days
    var days = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    document.getElementById("result").innerHTML = "Your age is: " + years + " years, " + months + " months, and " + days + " days";
}
