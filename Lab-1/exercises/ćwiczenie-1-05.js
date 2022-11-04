/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`. 
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      75%                    100%
 */
 let n = 26;
 let m = 240;
 let progressBar = "";
let bar = [];
bar[0] = '|';
bar[49] ='|';

let l = Math.round((n/m)*100);
if(l>98) l=98;

for(let i =1; i <Math.floor(l/2);i++)
    bar[i] ='#'

for(let r = Math.floor(l/2);r <49; r++)
    bar[r] =" ";

for(let x=0;x<50; x++)
progressBar += bar[x];
progressBar +='\n';
progressBar += `0%                      ${l}%                     100%`;

console.log(progressBar)