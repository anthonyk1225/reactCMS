import {AppDispatcher} from '../dispatcher';
import {MainApi} from '../apis';
import {MainConstants} from '../constants';
const ActionTypes = MainConstants.actions;

export default {
    getUser(){
        MainApi.getUser()
        .then(response => {
            if (response.success === true){
                AppDispatcher.serverAction({data: true, actionType: ActionTypes.USER_DATA});
            }
            else {
                AppDispatcher.serverAction({data: false, actionType: ActionTypes.USER_DATA});
            }
        });        
    }, 	
};
