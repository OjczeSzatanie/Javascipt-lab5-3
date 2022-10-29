/**
 * Napisz skrypt, który na podstawie zmiennych rectWidth i rectHeight stworzy łańcuch rectString zawierający pustą rankę o podanych wymiarach.
 * Ramka ma być zbudowana ze znaków w zmienej rectBorderSymbol.
 * Dodaj kod, który sprawdzi poprawność wszystkich zmiennych:
 * rectWidth i rectHeight - większe od -1 i mniejsze od 81
 * rectBorderSymbol - jeden dowolny znak oprócz znaków białych (spacja, tabulator, nowy wiersz itd.)
 * Dla przykładowych danych wyświetlenie rectString na konsoli powinno dać poniższy efekt:
 * #######
 * #     #
 * #     #
 * #     #
 * #######  
 */
let rectWidth = 7;
let rectHeight = 5;
let rectBorderSymbol = '#';
let rectString = '';

if(rectWidth< 0 || rectWidth>81|| rectHeight<0 || rectHeight>81|| rectBorderSymbol.length != 1)
rectString = "not good";
else
for(let i = 1; i <= rectHeight;i++)
{
 for (let d =1 ; d<= rectWidth; d++){
    if(i == 1|| i == rectHeight|| d== 1|| d== rectWidth)
    rectString +=rectBorderSymbol;
    else
    rectString += " ";
}
rectString += '\n';
}

console.log(rectString);