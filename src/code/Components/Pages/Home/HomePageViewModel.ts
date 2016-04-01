/**
 * Created by Darcy on 1/04/2016.
 */
/// <reference path="../../../../../typings/tsd.d.ts" />

import * as ko from "knockout";
import componentTemplate from "text!./home-page.tmpl.html"

export class HomePageViewModel {
    title: string;
    name: any;

    constructor () {
        this.title = "Hello";
        this.name = ko.observable('Darcy');
    }

    static register () {
        ko.components.register('home-page',{
           viewModel: HomePageViewModel,
            template: componentTemplate
        });
    }
}