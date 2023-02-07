const names = ['babul','kabul','chabul','babul','chabul','sabul', 'mabul','kabul'];
function removeDuplicate(names){
    let unique = [];

    for(let i=0; i <names.length;i++){
        const name = names[i];
        if(unique.includes(name)===false){
            unique.push(name);
        }
        
    }
    return unique;
}

const duplicate= removeDuplicate(names);
console.log(duplicate)

