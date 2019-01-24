import substate from 'substate';

const AppState = new substate({
    state: {
        Grid: {
            fetching: false,
            data: []
        },
        Filters: {
            labels: [],
        },
        User: {
            name: null,
            token: null,
        } 
    }
});
export default AppState;