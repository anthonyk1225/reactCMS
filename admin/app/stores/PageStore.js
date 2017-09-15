import {AppDispatcher} from '../dispatcher';
import {EventEmitter} from 'events';
import {MainConstants} from '../constants';
const MainEvents = MainConstants.events;
const MainActions = MainConstants.actions;

class PageStore extends EventEmitter {
	constructor() {
		super();
		this.state = {
			pages: [],
			pageAdded: false,
		}
	}
	/////////////////////////////////////
	// Grabbing and returning functions//
	/////////////////////////////////////

	////////////////////////////////////
	// Setting store state functions////
	////////////////////////////////////
	updatePages = data => {
		if (data.added){
			this.state.pageAdded = true;
			setTimeout(() => {
				this.state.pageAdded = false;
			}, 2000);
		}		
		this.state.pages = data.pages;
		this.emit(MainEvents.PAGE_UPDATE, this.state);
	}
	/////////////
	//Listeners//
	/////////////
	onPageUpdate = callback => {
		this.on(MainEvents.PAGE_UPDATE, callback);
	}
	removeOnPageUpdate = callback => {
		this.removeListener(MainEvents.PAGE_UPDATE, callback);
	}
};

const newPageStore = new PageStore();
newPageStore.dispatchToken = AppDispatcher.register(payload => {
    const action = payload.action;
    if (!action.actionType)
        return;
    switch(action.actionType){
	   	case MainActions.PAGES:
	   		newPageStore.updatePages(action.data);
	   		break;
        default:
            break;
    }
});

export default newPageStore;
