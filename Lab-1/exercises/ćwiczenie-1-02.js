/**
 * Napisz skrypt, który w łańcuchu triangle zawiera ciąg znaków '#' i '\n' tworzących kształ trójkąta o wysokości 
 * w zmiennej height. Po wyświetleniu na konsoli powinien zostać wyświetlony poniższy wzór liczba wierzy powinna odpowiadać 
 * zmiennej height:
 * #
 * ##
 * ###
 * ####
 * ##### 
 */
let height = 5;
let triangle = '';
let value = 1;

if(height<0) triangle = "not good height";
else
for(let i =0; i<height;i++){
    for(let d=0; d <value;d++)
    triangle += "#";
    triangle += "\n";
    value++;
}

console.log(triangle);