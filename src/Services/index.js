import  GetAPI  from "./Get";
import  DeleteAPI  from "./Delete";
import  PostAPI  from "./Post";

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;