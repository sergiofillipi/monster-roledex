const data = new Promise( ( resolve, reject ) => {
    if(false){
        resolve('resolved');
    }else{
        reject ('not resolved');
    }
});

data
    .then( ( result ) => console.log( result ) )
    .catch ( ( result ) => console.log( result ) )