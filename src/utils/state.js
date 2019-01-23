import substate from 'substate';

const AppState = new substate({
    state: {
        Custom: {
            fetching: false,
            cards: []
        }
    }
});
export default AppState;