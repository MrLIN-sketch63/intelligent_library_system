"use strict";
const all = document.querySelector(".btn-1");
const education = document.querySelector(".btn-2");
const fiction = document.querySelector(".btn-3");
const biography = document.querySelector(".btn-4");
const comics = document.querySelector(".btn-5");
const history = document.querySelector(".btn-6");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

const arrAll = [one, two, three, four, five, six, seven, eight, nine];
const arrEdu = [three, nine];
const arrFic = [six];
const arrBio = [five, seven];
const arrCom = [two, four];
const arrHis = [one, eight];

all.addEventListener("click", function () {
  arrAll.forEach(function (x) {
    x.classList.remove("hide");
  });
});

education.addEventListener("click", function () {
  arrEdu.forEach(function (x) {
    x.classList.remove("hide");
  });
  arrFic.forEach(function (x) {
    x.classList.add("hide");
  });
  arrBio.forEach(function (x) {
    x.classList.add("hide");
  });
  arrCom.forEach(function (x) {
    x.classList.add("hide");
  });
  arrHis.forEach(function (x) {
    x.classList.add("hide");
  });
});

fiction.addEventListener("click", function () {
  arrFic.forEach(function (x) {
    x.classList.remove("hide");
  });
  arrEdu.forEach(function (x) {
    x.classList.add("hide");
  });
  arrBio.forEach(function (x) {
    x.classList.add("hide");
  });
  arrCom.forEach(function (x) {
    x.classList.add("hide");
  });
  arrHis.forEach(function (x) {
    x.classList.add("hide");
  });
});

biography.addEventListener("click", function () {
  arrBio.forEach(function (x) {
    x.classList.remove("hide");
  });
  arrFic.forEach(function (x) {
    x.classList.add("hide");
  });
  arrEdu.forEach(function (x) {
    x.classList.add("hide");
  });
  arrCom.forEach(function (x) {
    x.classList.add("hide");
  });
  arrHis.forEach(function (x) {
    x.classList.add("hide");
  });
});

comics.addEventListener("click", function () {
  arrCom.forEach(function (x) {
    x.classList.remove("hide");
  });
  arrFic.forEach(function (x) {
    x.classList.add("hide");
  });
  arrBio.forEach(function (x) {
    x.classList.add("hide");
  });
  arrEdu.forEach(function (x) {
    x.classList.add("hide");
  });
  arrHis.forEach(function (x) {
    x.classList.add("hide");
  });
});

history.addEventListener("click", function () {
  arrHis.forEach(function (x) {
    x.classList.remove("hide");
  });
  arrFic.forEach(function (x) {
    x.classList.add("hide");
  });
  arrBio.forEach(function (x) {
    x.classList.add("hide");
  });
  arrCom.forEach(function (x) {
    x.classList.add("hide");
  });
  arrEdu.forEach(function (x) {
    x.classList.add("hide");
  });
});
const sessionString = sessionStorage.getItem("Array");
const arrTemp = JSON.parse(sessionString);

const arrLink1 = document.getElementsByTagName("a");
const arrLink = [...arrLink1];
for (const x of arrLink) {
  if (!arrTemp.includes(x.textContent)) {
    x.classList.add("hide");
  }
}
// for the modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const openModal = function () {
  modal.classList.remove("hide");
  overlay.classList.remove("hide");
  modal.style.display = "flex";
};

const closeModal = function () {
  modal.classList.add("hide");
  overlay.classList.add("hide");
  modal.style.display = "";
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hide")) {
    closeModal();
  }
});

let tempTag;
let childTag;
const modalOpen = function (x) {
  x.addEventListener("click", function () {
    openModal();
    tempTag = x;
    returnText.textContent = "Click confirm to return this book";
    childTag = tempTag.firstElementChild;
  });
};

modalOpen(one);
modalOpen(two);
modalOpen(three);
modalOpen(four);
modalOpen(five);
modalOpen(six);
modalOpen(seven);
modalOpen(eight);
modalOpen(nine);

const confirm = document.querySelector(".confirm");
const returnText = document.querySelector(".return");
confirm.addEventListener("click", function () {
  returnText.textContent = "Your book has been returned!";
  tempTag.remove();
});

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
