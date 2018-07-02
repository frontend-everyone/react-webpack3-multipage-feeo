import cookie from 'react-cookie'

if (process.env.NODE_ENV === 'development') {
    require('../../../mock/todoList')
}

let token = cookie.load('token');
let postApi = (path, mock) => {
    return path + (mock ? '' : '.mock') + '?token=' + token;
};
export default {
    "newsList": postApi("/api/order/news",1),
    "newsList2": postApi("/api/newsList2",1),
    "todoList": postApi("/todoList", 0)
}

