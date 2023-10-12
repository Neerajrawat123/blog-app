export const notificationsURl = {
    loading:{
        title:'loading',
        msg:'Data is being loading, please wait!'
    },
    success:{
        title:'success',
        msg:'Data successfully loaded'
    },
    responseFailure:{
        title:'error',
        msg:'An error occur while fetching the response from server'
    },
    requestFailure:{
        title:'error',
        msg:'An error occur when parsing request'
    },
    networkFailure:{
        title:'error',
        msg:'unable to connect the server , please connect the internet'
    }
}

export const service_URL ={
    userSignup:{ url:'/sign-up', method:'POST'},
    userLogin:{url:'/login',method:'POST'},
    createPost :{url:'/create',method:'POST'},
    getAllPosts: { url: '/posts', method: 'GET', params: true },}