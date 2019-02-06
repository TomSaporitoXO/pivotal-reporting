import substate from 'substate';

const AppState = new substate({
    state: {
        offset: 0,
        GotAllData: false,
        LoggedIn: false,
        Grid: {
            fetching: false,
            data: []
        },
        Filters: {
            state:[
                "unscheduled",
                "unstarted",
                "planned",
                "started",
                "finished",
                "delivered",
                "rejected",
                "accepted"
              ],
            labels: [],
            epics: [],
            points: [0, 1, 2, 3, 5, 8],
            kind: [
                "task",
                "bug",
                "feature",
                "chore"
              ],
        },
        AppliedFilters: {},
        User: {}
    }
});
export default AppState;