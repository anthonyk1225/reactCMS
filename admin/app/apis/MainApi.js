import {AjaxPromises} from '../utils';
import {MainConstants} from '../constants';
const MainEndPoints = MainConstants.endPoints;

export default {
	getUser(){
		return AjaxPromises.get(MainEndPoints.GET_USER, {});
	},
};