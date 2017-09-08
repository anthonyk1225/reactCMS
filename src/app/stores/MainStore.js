import {AppDispatcher} from '../dispatcher';
import {EventEmitter} from 'events';
import {MainConstants} from '../constants';
const MainEvents = MainConstants.events;
const MainActions = MainConstants.actions;

class MainStore extends EventEmitter {
	constructor() {
		super();
		this.state = {
		}
	}
	/////////////////////////////////////
	// Grabbing and returning functions//
	/////////////////////////////////////

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
        default:
            break;
    }
});

export default newMainStore;
