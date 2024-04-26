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

const appState = new AppState();

export default appState