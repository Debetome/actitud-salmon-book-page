class AppState {
    constructor() {
        this.states = {};
    }

    setState(key, value) {
        this.states[key] = value;
    }

    getState(key) {
        return this.states[key];
    }
}

const AppStateInstance = new AppState()

export default AppStateInstance