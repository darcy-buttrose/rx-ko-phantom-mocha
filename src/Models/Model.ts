/**
 * Created by Darcy on 3/04/2016.
 */
/// <reference path="../../typings/tsd.d.ts"/>

import {Keys} from "../Intents/Keys";
import {IAction} from "../Intents/IAction"
import {intent$} from "../Intents/Intent";
import {Observable} from "@reactivex/rxjs";
import {Map,List} from "immutable";

var initialState: Map<string,string> = Map<string,string>();

var state$ : Observable<Map<string,string>> = intent$
        .scan<Map<string,string>>((state,action) => applyAction(state,action),initialState);

function applyAction(state:Map<string,string>, action:IAction):Map<string,string> {
    switch (action.key) {
        case Keys.ChangeName :
        {
            var name:string = state.get('name');
            state = state.merge({name});
            break;
        }
        default:
    }
    return state;
}

function get(pattern:string) {
    var keys = pattern.split('.');

    return state$.select(state => {

        return keys.reduce((state, key) => state != null ? state.get(key) : null, state)
    });
}

state$.get = get;

export default state$;