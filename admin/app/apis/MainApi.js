import {AjaxPromises} from '../utils';
import {MainConstants} from '../constants';
const MainEndPoints = MainConstants.endPoints;

export default {
	//Users
	getUser(){
		return AjaxPromises.get(MainEndPoints.GET_USER, {});
	},
	logOut(){
		return AjaxPromises.get(MainEndPoints.LOG_OUT, {});
	},
	logIn(values){
		return AjaxPromises.get(MainEndPoints.LOG_IN, values);
	},
	//Pages
	getPages(pageId){
		return AjaxPromises.get(MainEndPoints.PAGES, pageId);
	},
	createPage(data){
		return AjaxPromises.post(MainEndPoints.PAGES, data);
	},
};
