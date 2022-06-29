sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";
	new ComponentContainer({
		name: "project0.src",
		settings : {
			id: "project0"
		},
		async : true
	}).placeAt("container");
});