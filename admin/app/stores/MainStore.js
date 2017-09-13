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
		}
	}
	/////////////////////////////////////
	// Grabbing and returning functions//
	/////////////////////////////////////
	updateUser = logged => {
		this.state.loggedInUser = logged;
		this.emit(MainEvents.MAIN_UPDATE, this.state);
	}
	////////////////////////////////////
	// Setting store state functions////
	////////////////////////////////////

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
        default:
            break;
    }
});

export default newMainStore;
