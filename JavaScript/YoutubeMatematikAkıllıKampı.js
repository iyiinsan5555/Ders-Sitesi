// Get today's date
const today = new Date();
const startDate = new Date('December 30, 2024');

// Calculate the difference in milliseconds
const differenceInMilliseconds = Math.abs(today - startDate);
console.log(Math.abs(today - startDate));

// Convert milliseconds to days
const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

// Define the period
const Period = 9;

// Create a function to calculate the remaining days
function getRemainingDays(days) {
    return days % Period;
}

// Calculate the remaining days
const PeriodikDay = getRemainingDays(differenceInDays);
console.log("Toplam Geçen Gün: ", differenceInDays)
console.log("Periyodik Gün: ", PeriodikDay);

const selectedElementId = PeriodikDay + ".Gün"
const FoundElement = document.getElementById(selectedElementId);

FoundElement.classList.remove("notSelected")
FoundElement.classList.add("Selected");


document.getElementById("StartDay").textContent = " Başlangıç: "+startDate.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });
document.getElementById("Today").textContent = "Bugün: "+today.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });
document.getElementById("DifferenceInDays").textContent = "Geçen Gün: "+differenceInDays
document.getElementById("TotalQuestion").textContent = "Çözülen Soru Sayısı: "+differenceInDays*5
