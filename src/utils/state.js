import substate from 'substate';

const AppState = new substate({
    state: {
        LoggedIn: false,
        Grid: {
            fetching: false,
            data: []
        },
        Filters: {
            fetched: false,
            labels: [],
        },
        User: {
            name: null,
            token: null,
        },
        Epics: {
            fetched: false,
            epics: [],
        } 
    }
});
export default AppState;