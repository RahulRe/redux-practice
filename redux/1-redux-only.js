const redux = require('redux');

const INITIAL_VAL = {counter : 0};

const reducer = (store=INITIAL_VAL,action)=>{
    let newStore = store;
    if(action.type==="INCREMENT"){
        newStore = {counter: store.counter + 1}

    }else if(action.type==="DECREMENT"){
        
        newStore = {counter: store.counter-1}
        
    }

    return newStore;


}

const store = redux.createStore(reducer)

const subscriber = ()=>{
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscriber);

store.dispatch({type: "INCREMENT"})
store.dispatch({type: "DECREMENT"})