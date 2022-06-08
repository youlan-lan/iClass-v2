import axios from 'axios' 
const baseURL = app.globalData.baseUrl;  

export default function request(option) {
    return new Promise((resolve, reject) => { 
        const instance = axios.create({
            baseURL,
            timeout: 10000,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        })
        instance.defaults.withCredentials = true;  // 携带cookie
        instance.defaults.headers.post['Content-Type'] = 'application/json'

        // 拦截器
        instance.interceptors.request.use(config => {
            return config;
        }, err => {
            console.log(err, '请求拦截');
            return err
        })
        instance.interceptors.response.use(response => {
            return response.data
        }, err => {
            // console.log('response err', err);
            if (err && err.response) {
                switch (err.response.status) {
                    case 400:
                        err.message = '请求错误'
                        break
                    case 401:
                        err.message = '未授权的访问'
                        break
                    default:
                        err.message = "其他错误信息"
                }
            }
            return err
        })
        // 传入对象进行网络请求
        instance(option).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
} 