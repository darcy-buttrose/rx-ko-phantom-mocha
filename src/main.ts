/// <reference path="../typings/browser.d.ts" />
import * as ko from "knockout";
import {HomePageViewModel} from "./Components/Pages/Home/HomePageViewModel"
import $ from "jquery";

$(() => {
    HomePageViewModel.register();
    ko.applyBindings();
});