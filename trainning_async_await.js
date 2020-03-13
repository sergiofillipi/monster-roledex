const asyncFunction = async () =>{
    try{

        const requestUsers = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await requestUsers.json();
        const requestPosts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + users[0].id);
        const posts = await requestPosts.json();
        console.log( posts );
        
    }catch(exception)
    {
        console.log( exception)
    }
    
}

asyncFunction();