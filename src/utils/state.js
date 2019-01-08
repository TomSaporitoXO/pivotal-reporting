import substate from 'substate';

const AppState = new substate({
    state: {
        Custom: {
            fetching: false,
            data: []
        }
    }
});
export default AppState;