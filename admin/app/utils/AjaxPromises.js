import {AppDispatcher} from '../dispatcher';
import RSVP from 'rsvp';
import request from 'superagent';
const _token = 'token_not_set';

export default {
    get_token(){
        return _token;
        // UserStore.getState().token; 
        // Usually there is a user token 
        // sent from the server for authentication 
    },
    encodeParams(params){
        const outparams = [];
        let queryString = '?';
        for (let p in params) { 
            outparams.push(p + '=' + params[p]);
        } 
        return queryString += outparams.join("&");
    },
    get(url, call_params){
        const params = this.encodeParams(call_params);
        const promise = new RSVP.Promise((resolve, reject) => {
            let client = false;
            if (window.XMLHttpRequest){
                client = new XMLHttpRequest();
            } else {
                client = new ActiveXObject("Microsoft.XMLHTTP");
            }
            if (!client) {
                console.log('Giving up :( Cannot create an XMLHTTP instance');
                return false;
            }
            if (client) {
                client.onload = aEvt => {
                    const target = aEvt.target;
                    if (target.readyState === 4) {
                        if (target.status === 200 && (target.response.message == 'success') || (target.statusText == 'OK')) { 
                            resolve(target.response);
                        } else { 
                            const message = {actionType: "SEND_NOTIFICATION", data: {message:'ERROR :: ' + url, subtext: '', type: 'ERROR'}};
                            AppDispatcher.serverAction(message);
                            reject(this); 
                        }
                    }
                };
                client.open("GET", url + params, true);
                client.responseType = "json";
                client.setRequestHeader("Accept", "application/json");
                client.send(client);
            }
        });
        return promise;
    },
    post(url, fData){
        const promise = new RSVP.Promise((resolve, reject) => {
            $.ajax({
                url: url,
                data: fData,
                cache: false,
                processData: false,
                contentType: 'application/json',
                type: 'POST',
                    success(data){
                        resolve(data); 
                        if (data.message == "error") {
                            const message = {actionType: "SEND_NOTIFICATION", data: {message: 'ERROR :: ' + url , subtext: '', type: 'ERROR'}};
                            AppDispatcher.serverAction(message);
                        }
                    },
                    error(){
                        reject(this);
                        const message = {actionType:"SEND_NOTIFICATION", data: {message:'ERROR :: ' + url, subtext: '', type: 'ERROR'}};
                        AppDispatcher.serverAction(message);
                    },
            });
        });
        return promise;
    },
    put(url, params){/* verb currently not used */},
    delete(url, params){/* verb currently not used */},
};
