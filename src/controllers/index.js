import Home from './home.controller';
import Post from './post.controller';
import notFound from './404.controller';
const pages = {
     home: Home,
     posts: Post,
     notFound: notFound

}

export {pages}