/**
 * Napisz skrypt zamieniający wartość zmiennej decimalNumber  na liczbę rzemską w zakresie od 1 do 10.
 * Wynik zapisz do zmienej romanNumber.
 * Jeśli decimalNumber nie mieści sie w zakresie to umieść w romanNumber komunikat: Decimal number is out of range!
 * Jeśli decimalNumber jest równe undefined lub null to umieść w romanNumber komunikat: Decimal number is undefined or null!
 */
let decimalNumber = 4;
let romanNumber = '';
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
if(decimalNumber <1 || decimalNumer >10)
romanNumber = "Decimal number is out of range!"
else if(decimalNumber == null || typeof(decimalNumber) == undefined)
romanNumber = "Decimal number is undefined or null!"
else
romanNumber += convertToRoman(decimalNumber)



console.log(romanNumber);

function convertToRoman(number){
    if(num == 1){return 'I'}
    if(num == 2){return 'II'}
    if(num == 3){return 'III'}
    if(num == 4){return 'IV'}
    if(num == 5){return 'V'}
    if(num == 6){return 'VI'}
    if(num == 7){return 'VII'}
    if(num == 8){return 'VIII'}
    if(num == 9){return 'IX'}
}