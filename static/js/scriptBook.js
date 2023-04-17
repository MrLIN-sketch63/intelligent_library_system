"use Strict";
const confirmBtn = document.querySelector(".confirm");

const btnInventory = document.querySelector(".btn-11");
const btnSearch = document.querySelector(".btn-22");
const btnComplaint = document.querySelector(".btn-33");
const btnAcc = document.querySelector(".btn-44");
const btnLogOut = document.querySelector(".btn-55");

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

//use this btn to interact with backend database
//below code is only to display the "Book Borrowed Message!"
const title = document.querySelector(".title");
const isbn = document.querySelector(".isbn");
const author = document.querySelector(".author");
const category = document.querySelector(".category");
const description = document.querySelector(".description");
const conTxt = document.querySelector(".confirmText");

confirmBtn.addEventListener("click", function () {
  title.textContent = "";
  isbn.textContent = "";
  author.textContent = "";
  category.textContent = "";
  description.textContent = "";
  conTxt.textContent = "";

  title.textContent = "Thank you for borrowing this book!";
});
