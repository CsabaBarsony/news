"use strict";
/* global app:true */

/**
 * @ngdoc overview
 * @name newsApp
 * @description
 * # newsApp
 *
 * Main module of the application.
 */
var app = angular.module("newsApp", [
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch",
	"firebase"
  ]);
app.config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl"
      })
      .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutCtrl"
      })
		.when("/posts", {
			templateUrl: "views/posts.html",
			controller: "PostsController"
		})
		.when("/posts/:postId", {
			templateUrl: "views/showpost.html",
			controller: "PostViewController"
		})
      .otherwise({
        redirectTo: "/"
      });
  });
app.constant("FIREBASE_URL", "https://s58szk5t4gn.firebaseio-demo.com/");
