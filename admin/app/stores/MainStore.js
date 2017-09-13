import {AppDispatcher} from '../dispatcher';
import {EventEmitter} from 'events';
import {MainConstants} from '../constants';
const MainEvents = MainConstants.events;
const MainActions = MainConstants.actions;

class MainStore extends EventEmitter {
	constructor() {
		super();
		this.state = {
			loggedInUser: false,
			loginError: false,
		}
	}
	/////////////////////////////////////
	// Grabbing and returning functions//
	/////////////////////////////////////

	////////////////////////////////////
	// Setting store state functions////
	////////////////////////////////////
	updateUser = data => {
		this.state.loggedInUser = data.success;
		this.emit(MainEvents.MAIN_UPDATE, this.state);
	}
	loginError = () => {
		this.state.loginError = true;
		setTimeout(() => {
			this.state.loginError = false;
			this.emit(MainEvents.MAIN_UPDATE, this.state);
		}, 1000);
		this.emit(MainEvents.MAIN_UPDATE, this.state);
	}
	logout = () => {
		this.state.loggedInUser = false;
		this.emit(MainEvents.MAIN_UPDATE, this.state);
	}
	/////////////
	//Listeners//
	/////////////
	onMainUpdate = callback => {
		this.on(MainEvents.MAIN_UPDATE, callback);
	}
	removeOnMainUpdate = callback => {
		this.removeListener(MainEvents.MAIN_UPDATE, callback);
	}
};

const newMainStore = new MainStore();
newMainStore.dispatchToken = AppDispatcher.register(payload => {
    const action = payload.action;
    if (!action.actionType)
        return;
    switch(action.actionType){
	   	case MainActions.USER_DATA:
	   		newMainStore.updateUser(action.data);
	   		break;
	   	case MainActions.LOG_IN:
	   		newMainStore.updateUser(action.data);
	   		break;
	   	case MainActions.FAILED_LOG_IN:
	   		newMainStore.loginError();
	   		break;   
	   	case MainActions.LOG_OUT:
	   		newMainStore.logout();
	   		break;
        default:
            break;
    }
});

export default newMainStore;
