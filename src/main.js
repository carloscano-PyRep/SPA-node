import "bootstrap/dist/css/bootstrap.min.css";
import './main.scss';
import  {router} from './router/routes.js';
router(window.location.hash)
window.addEventListener('hashchange',()=>{
    router(window.location.hash)
})