import * as MODEL from "../model/model.js";

function route() {
  let hashTag = window.location.hash;
  let pageName = hashTag.replace("#", "");
  let pageContent = pageName + "Content";

  if (pageName == "") {
    pageContent = "homeContent";
  }

  //calls over to model to retrieve the data for the page
  MODEL.modelPageName(pageContent);
}

function initListeners() {
  $(window).on("hashchange", route);
  
  //checks for changes in the hash
  route();
}

$(document).ready(function () {
  initListeners();
});