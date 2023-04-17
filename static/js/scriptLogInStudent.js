"use strict";
const text = document.querySelector(".inline");
const admin = document.querySelector(".admin");
const student = document.querySelector(".student");

// admin.addEventListener("click", function () {
//   text.textContent = "Admin";
// });
student.addEventListener("click", function () {
  text.textContent = "Student";
});
const modal = document.querySelector(".modal");
const aboutModal = document.querySelector(".about-modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".show-modal");
const btnsOpenAboutModal = document.querySelector(".about");
const btnCloseAboutModal = document.querySelector(".about-close-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  modal.style.display = "flex";
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  modal.style.display = "";
};


overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const openAboutModal = function () {
  aboutModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  aboutModal.style.display = "flex";
};

const closeAboutModal = function () {
  aboutModal.classList.add("hidden");
  overlay.classList.add("hidden");
  aboutModal.style.display = "";
};

btnsOpenAboutModal.addEventListener("click", openAboutModal);
btnCloseAboutModal.addEventListener("click", closeAboutModal);
overlay.addEventListener("click", closeAboutModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !aboutModal.classList.contains("hidden")) {
    closeModal();
  }
});
const modalAdmin = document.querySelector(".three-admin");
const modalStudent = document.querySelector(".three-student");
const stdID = document.querySelector(".student-ID");
const adminKey = document.querySelector(".admin-key");
let adminIsActive;
let studentIsActive;
const disableBtn = function () {
  if (!adminIsActive) {
    adminKey.disabled = true;
    stdID.disabled = false;
  } else if (!studentIsActive) {
    adminKey.disabled = false;
    stdID.disabled = true;
  }
};
modalAdmin.addEventListener("click", function () {
  modalAdmin.style.backgroundColor = "#b1a363";
  modalStudent.style.backgroundColor = "#070951";
  adminIsActive = true;
  studentIsActive = false;
  disableBtn();
  stdID.placeholder = "-----restricted-----";
  adminKey.placeholder = "admin key";
});
modalStudent.addEventListener("click", function () {
  modalStudent.style.backgroundColor = "#b1a363";
  modalAdmin.style.backgroundColor = "#070951";
  studentIsActive = true;
  adminIsActive = false;
  disableBtn();
  adminKey.placeholder = "-----restricted-----";
  stdID.placeholder = "student ID";
});
