/**
 * Created by Darcy on 1/04/2016.
 */
/// <reference path="../../../../typings/tsd.d.ts" />

import * as ko from "knockout";
import componentTemplate from "text!./home-page.tmpl.html";
import {publish} from "../../../Intents/Intent";
import {Keys} from "../../../Intents/Keys";
import {Map} from "immutable";
import state$ from "../../../Models/Model";

export class HomePageViewModel {
    title: string;
    name: KnockoutObservable<string>;
    display : KnockoutObservable<string>;

    constructor () {
        this.title = "Hello";
        this.name = ko.observable('Darcy');
        state$.get('name').subscribe(name => {
           this.display(name);
        });
    }

    public publishName() {
        publish({
            key: Keys.ChangeName,
            payload: Map({name})
        })
    }

    static register () {
        ko.components.register('home-page',{
           viewModel: HomePageViewModel,
            template: componentTemplate
        });
    }
}