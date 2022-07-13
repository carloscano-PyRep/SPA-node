import view from '../views/post.html';
const getPosts = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

export default async() =>{
    const divElement =document.createElement('div');
    divElement.innerHTML = view; 
    divElement.classList = 'text-white';
    let totalPost = divElement.querySelector('#total');
    const postElement = divElement.querySelector('#posts');
    const posts= await getPosts();
    totalPost.innerHTML = posts.length;
    
    posts.forEach(post => {
        postElement.innerHTML +=`
        <li class="list-group-item border-primary bg-dark text-white">
            <h5>${post.title}</h5>
            <p>${post.body}
            </p>
        </li>
        `
    })
    console.log(posts);
    return divElement;
}