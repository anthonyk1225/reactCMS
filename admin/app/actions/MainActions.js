import {AppDispatcher} from '../dispatcher';
import {MainApi} from '../apis';
import {MainConstants} from '../constants';
const ActionTypes = MainConstants.actions;

export default {
    //Users
    getUser(){
        MainApi.getUser()
        .then(response => {
            if (response.success === true){
                AppDispatcher.serverAction({data: {success: true}, actionType: ActionTypes.USER_DATA});
            }
            else {
                AppDispatcher.serverAction({data: {success: false}, actionType: ActionTypes.USER_DATA});
            }
        })
    },
    logIn(values){
        MainApi.logIn(values)
        .then(response => {
            AppDispatcher.serverAction(
                {data: {success: response.success}, actionType: response.success ? ActionTypes.LOG_IN: ActionTypes.FAILED_LOG_IN}
            );
        })
    },
    logOut(){
        MainApi.logOut()
        .then(response => {
            AppDispatcher.serverAction({data: null, actionType: ActionTypes.LOG_OUT});
        })
    },
    //Pages
    getPages(pageId){
        MainApi.getPages({pageId: pageId})
        .then(response => {
            if (response.success === true){
                AppDispatcher.serverAction({data: {success: response.success, pages: response.pages, added: false}, actionType: ActionTypes.PAGES});
            }
        })
    },
    createPage(values){
        MainApi.createPage(JSON.stringify(values))
        .then(response => {
            if (repsonse.success === true){
                AppDispatcher.serverAction({data: {success: response.success, pages: response.pages, added: true}, actionType: ActionTypes.PAGE_ADDED});
            }
        })
    },
};
