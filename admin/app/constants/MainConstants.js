import keyMirror from 'key-mirror';

export default {
	actions: keyMirror({
		USER_DATA: null,
		LOG_IN: null,
		FAILED_LOG_IN: null,
		LOG_OUT: null,
	}),
	endPoints: {
		GET_USER: '/user',
		LOG_IN: '/user/login',
		LOG_OUT: '/user/logout',
	},
	events: keyMirror({
		MAIN_UPDATE: null,
	}),	
};

