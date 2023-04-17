"use strict";
const btnInventory = document.querySelector(".btn-1");
const btnSearch = document.querySelector(".btn-2");
const btnComplaint = document.querySelector(".btn-3");
const btnAcc = document.querySelector(".btn-4");
const btnLogOut = document.querySelector(".btn-5");

btnInventory.addEventListener("click", function () {
  window.location.href = "manageInventoryStudent.html";
});

btnSearch.addEventListener("click", function () {
  window.location.href = "searchBooksStudent.html";
});

btnComplaint.addEventListener("click", function () {
  window.location.href = "complaintStudent.html";
});

btnAcc.addEventListener("click", function () {
  window.location.href = "accountStudent.html";
});

btnAcc.addEventListener("click", function () {
  //Insert your Log Out feature here
});
