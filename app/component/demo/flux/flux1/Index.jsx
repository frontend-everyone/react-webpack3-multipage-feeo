import Main from './Main';
import {Container} from 'flux/utils';
import Actions from './Actions';
import Store from './Store';

function getStores() {
    return [
        Store
    ];
}

function getState() {
    return {
        state: Store.getState(),
        add: Actions.add,
    };
}

export default Container.createFunctional(Main, getStores, getState);
