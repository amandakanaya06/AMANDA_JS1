// Contoh if, else, nested if
let nilai = 80;

if (nilai >= 85) {
    console.log("Nilai Anda A");
} else if (nilai >= 79) {
    console.log("Nilai Anda B");
} else if (nilai >= 65) {
    console.log("Nilai Anda C");
} else {
    console.log("Nilai Anda D");
    
    if (nilai < 50) {
        console.log("Anda harus belajar lebih giat lagi.");
    }
}

// Contoh switch case
let dayOfWeek = 7;
let dayName;

switch(dayOfWeek) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(`Today is ${dayName}.`);

// Contoh for statement
for (let i = 0; i < 8; i++) {
    console.log(`Iterasi ke-${i+1}`);
}

// Contoh while
let i = 0;
while (i < 10) {
    console.log(`Iterasi ke-${i+1}`);
    i++;
}
// Contoh do while
let j = 0;
do {
    console.log(`Iterasi ke-${j+1}`);
    j++;
} while (j < 8);

// Contoh function
// Mendefinisikan sebuah fungsi bernama good
function good(name) {
    console.log(`Hi, ${name}!`);
}

// Memanggil fungsi greet dengan argumen "John"
good("Amanda");
