import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher {
    viewAction(action){
        // console.log( 'VIEW ACTION ' , action );
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
    serverAction(action){
        // console.log( 'SERVER ACTION ' , action );
        this.dispatch({
            source: 'SERVER_ACTION',
            action: action
        });
    }
};

const dispatcher = new AppDispatcher()

export default dispatcher;
