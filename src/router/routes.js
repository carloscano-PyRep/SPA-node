import home from '../controllers/index.controller';
let content = document.getElementById('root');
const router = (route) => {
    content.innerHTML = '';
    switch (route){
        case '#/':{
            return content.appendChild(home());
        }
        case '#/products':
            return console.log('products');
        case '#/posts':
            return console.log('posts');
        default:
            return console.log('404');
    }
}
export {router};