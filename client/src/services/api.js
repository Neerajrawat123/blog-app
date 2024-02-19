import axios from 'axios'
import { notificationsURl, service_URL } from '../constants/config';
import { getType } from '../utils/util';

const URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: URL,
    timeout: 10000, 
    headers: {
        "content-type": "application/json"
    }
});


 axiosInstance.interceptors.request.use(
    function(config) {
        if (config.TYPE.params) {
            config.params = config.TYPE.params
        } else if (config.TYPE.query) {
            config.url = config.url + '/' + config.TYPE.query;
        }
        return config;
    },
    function(error){
        return Promise.reject(error)
    }
 )

 axiosInstance.interceptors.response.use(
    function(response){
        return processResponse(response)
    },
    function (error) {
        return Promise.reject(processError(error))
        
    }
 )

 const processResponse =(response) =>{
    if (response?.status === 200) {
        return { isSuccess : true , data : response.data }
        
    } else {
        return{
            isFailure : true,
            status: response?.status,
            msg:response?.msg,
            code:response?.code
        }
        
    }
 }

 const processError = ( error) =>{
    if (error.response) {
        // if response is not status with 200
        console.log('error in response', error.toJSON())
        return {
            isError: true,
            msg:notificationsURl.responseFailure,
            code:error.response.status
        }
        
    } else if(error.request){
        console.log('error in request', error.toJSON())
        return {
            isError: true,
            msg:notificationsURl.requestFailure,
            code:''
        }
        

    }else{
        console.log('error in network', error.toJSON())
        return {
            isError: true,
            msg:notificationsURl.networkFailure,
            code:''
        }
        

    }
 }

 const API = {}

 for (const [key, value] of Object.entries(service_URL)) {
    API[key] = (body,showUploadProgress, showDownloadProgress) => 
    axiosInstance({
        method:value.method,
        // transformRequest: [function (data, headers) {
        //     if(headers. === 'DELETE'){
        //         data = null
        //     }
        
        //     return data;
        //   }],
        
        url:value.url,
        data: value.method === 'DELETE' ? '' : body,
        responseType:value.responseType,
          onUploadProgress: function(progressEvent) {
            if (showUploadProgress) {
                let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                showUploadProgress(percentCompleted);
            }
        },
        TYPE:getType(value, body),
        onDownloadProgress: function(progressEvent) {
            if (showDownloadProgress) {
                let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                showDownloadProgress(percentCompleted);
            }}
    })

    
 }

 export {API}