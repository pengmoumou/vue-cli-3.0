import axios from 'axios'
// axios.defaults.baseURL = process.env.NODE_ENV.trim() === "development" ? "" : "http://art.api.awdc.io:80";
export default {
    //封装axios请求
    rpc (url = '', data = {}, ways = 'get') {
        return new Promise(function (resolve, reject) {
            switch (ways) {
                //查询
                case 'get': {
                    axios.get(url, { params: data }).then(response => {
                        resolve(response);
                    }).catch(err => {
                        reject(err);
                    });
                    break;
                }
                //更新
                case 'post': {
                    axios.post(url, data).then(response => {
                        resolve(response);
                    }).catch(err => {
                        reject(err);
                    });
                    break;
                }
                //新建
                case 'put': {
                    axios.put(url, data).then(response => {
                        resolve(response);
                    }).catch(err => {
                        reject(err);
                    });
                    break;
                }
                //删除
                case 'delete': {
                    axios.delete(url, { params: data }).then(response => {
                        resolve(response);
                    }).catch(err => {
                        reject(err);
                    });
                    break;
                }
            }
        })
    }
}