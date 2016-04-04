/**
 * Created by Darcy on 3/04/2016.
 */
/// <reference path="../../../typings/tsd.d.ts"/>
import {Keys} from "./Keys";
import {Map} from "immutable";
export interface IAction {
    key : Keys;
    payload: Map<string,string>;
}