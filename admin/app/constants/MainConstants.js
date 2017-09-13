import keyMirror from 'key-mirror';

export default {
	actions: keyMirror({
		USER_DATA: null,
	}),
	endPoints: {
		GET_USER: '/user',
	},
	events: keyMirror({
		MAIN_UPDATE: null,
	}),	
};

