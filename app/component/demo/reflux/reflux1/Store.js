import Reflux from 'reflux'
import Action from './Action'

class Store extends Reflux.Store {
    constructor() {
        super();
        this.listenables = Action;
        this.state = {
            num: 0
        }
    }

    onAdd() {
        this.setState({num: this.state.num + 1});
    }
}

export default Store;