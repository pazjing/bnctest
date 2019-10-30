const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const fetch = require("node-fetch");


Given('The API endpoint is {string}', async function (url) {
  //here we use javascript request to get the response and parse it 
  this.urlBase = url;
});

When('I send number {int} in request', async function (requestNumber) {
  this.url = this.urlBase+requestNumber;
  console.log("the url is " + this.url);

  const response = await fetch(this.url);
  const resBody = await response.json();
  this.items = resBody.items;

});

Then('it should get {int} items', function (expectedNumber) {
  let actualNumber = Object(this.items).length;
  assert.equal(actualNumber, expectedNumber);
});

Then('in each item it should has {string} object with a {string} defined', function (key_1, key_2) {
  this.items.forEach(function (item, i) {
      if (!(item.hasOwnProperty(key_1))) {
        console.log(" ERROR : item  %s  miss the %s object ", i, key_1);
        assert(false);
      } 
      else if (!(item[key_1].hasOwnProperty(key_2))) {   
        console.log(" ERROR : item  %s  %s object miss the %s object ", i, key_1, key_2);
        assert(false);
      }
  });

});

