sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/core/Fragment",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel"
], function (Controller, Filter, Fragment, FilterOperator, JSONModel) {
	"use strict";

	return Controller.extend("masterdetail.masterdetail.controller.View1", {
		onInit: function () {
			var oDetails = {
				"details": [{
					"key": "101",
					"text": "Lakshay",
					"data": [{
						"sno": "101",
						"fname": "lakshay",
						"sname": "Sangal",
						"contact": "100",
						"address": "Delhi",
						"city": "Delhi",
						"quali": "B.Tech"
					}]
				}, {
					"key": "104",
					"text": "Himanshu",
					"data": [{
						"sno": "104",
						"fname": "Himanshu",
						"sname": "Dewan",
						"contact": "200",
						"address": "Dwarka",
						"city": "Delhi",
						"quali": "B.Tech"
					}]
				}, {
					"key": "102",
					"text": "Arpit",
					"data": [{
						"sno": "102",
						"fname": "Arpit",
						"sname": "Singhal",
						"contact": "300",
						"address": "Noida",
						"city": "Delhi",
						"quali": "12"
					}]
				}, {
					"key": "103",
					"text": "Manika",
					"data": [{
						"sno": "103",
						"fname": "Manika",
						"sname": "Sharma",
						"contact": "400",
						"address": "Dwarka",
						"city": "Delhi",
						"quali": "M.Tech"
					}]
				}, {
					"key": "105",
					"text": "Vishal",
					"data": [{
						"sno": "105",
						"fname": "Vishal",
						"sname": "Narang",
						"contact": "500",
						"address": "Dwarka",
						"city": "Delhi",
						"quali": "MCA"
					}]
				}, {
					"key": "106",
					"text": "Rahul",
					"data": [{
						"sno": "106",
						"fname": "Rahul",
						"sname": "Midha",
						"contact": "106",
						"address": "Dwarka",
						"city": "Delhi",
						"quali": "12"
					}]
				}, {
					"key": "107",
					"text": "Shivangi",
					"data": [{
						"sno": "107",
						"fname": "Shivangi",
						"sname": "Kocchar",
						"contact": "107",
						"address": "Mumbai",
						"city": "Mumbai",
						"quali": "BCA"
					}]
				}, {
					"key": "108",
					"text": "Shubhangi",
					"data": [{
						"sno": "108",
						"fname": "Shubhangi",
						"sname": "Singh",
						"contact": "108",
						"address": "Delhi",
						"city": "Delhi",
						"quali": "M.Tech"
					}]
				}]
			};

			var oModel2 = new JSONModel(oDetails);
			this.getView().setModel(oModel2);
			
			//Changes made for testing

		},
		onObjectItemPress: function (oEvent) {

			var oItem = oEvent.getSource();
			var oCtx = oItem.getBindingContext();
			var path = oCtx.getPath();
			this.getView().byId("tbData").bindElement(path);

		},
		onPressDetailBack: function () {
			sap.m.MessageToast.show("Saved");
		}

	});
});