function getFristElement<T>( arr :T[]){
    return arr[0]
}
const el=  getFristElement<string>(["pavan ", "kumar"]);
const el2= getFristElement([1,2,4])
console.log(el.toLowerCase());
