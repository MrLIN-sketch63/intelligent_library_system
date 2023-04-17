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

//populating each book's description in the modal
const title = document.querySelector(".title");
const isbn = document.querySelector(".isbn");
const author = document.querySelector(".author");
const category = document.querySelector(".category");
const description = document.querySelector(".description");
const conTxt = document.querySelector(".confirmText");
const confirm = document.querySelector(".confirm");

const removeText = function () {
  title.textContent = "";
  isbn.textContent = "";
  author.textContent = "";
  category.textContent = "";
  description.textContent = "";
  conTxt.textContent = "";
};

let currTitle = "";

one.addEventListener("click", function () {
  openModal();
  removeText();
  title.textContent =
    "History: From the Dawn of Civilization to the Present Day";
  isbn.textContent = "ISBN 241201306";
  author.textContent = "by Adam Hart-Davis";
  category.textContent = "Category: History";
  description.textContent =
    "More than 600 pages chronicle global history in the most informative, illuminating, and inspiring way. Stunning images and illustrations bring the authoritative text to life, so each historical episode is explored and explained for easy reference and understanding. Important points in history, from the Battle of Hastings and the storming of the Bastille to D-day and 9/11, are given clear but concise coverage, together with profiles of influential figures, such as Rameses II, Julius Caesar, and Nelson Mandela. As each moment in history is defined and detailed, the causes and consequences are provided in supporting panels to provide a wider context and broaden our horizons. Contemporary issues, including climate change and the rise of social media, bring us out of the past and firmly into the present.";
  conTxt.textContent = "Click confirm to choose this book";
  confirm.disabled = false;
  currTitle = title.textContent;
});
two.addEventListener("click", function () {
  openModal();
  removeText();
  title.textContent = "The Thursday Murder Club: (The Thursday Murder Club 1)";
  isbn.textContent = "ISBN 241988268";
  author.textContent = "by Richard Osman";
  category.textContent = "Category: Comics";
  description.textContent =
    "In a peaceful retirement village, four unlikely friends meet up once a week to investigate unsolved murders.But when a brutal killing takes place on their very doorstep, the Thursday Murder Club find themselves in the middle of their first live case.Elizabeth, Joyce, Ibrahim and Ron might be pushing eighty but they still have a few tricks up their sleeves.";
  conTxt.textContent = "Click confirm to choose this book";
  confirm.disabled = false;
  currTitle = title.textContent;
});
three.addEventListener("click", function () {
  openModal();
  removeText();
  title.textContent = "C++ Programming Language";
  isbn.textContent = "ISBN 275967301";
  author.textContent = "by Bjarne Stroustrup";
  category.textContent = "Category: Education";
  description.textContent =
    "The new C++11 standard allows programmers to express ideas more clearly, simply, and directly, and to write faster, more efficient code. Bjarne Stroustrup, the designer and original implementer of C++, has reorganized, extended, and completely rewritten his definitive reference and tutorial for programmers who want to use C++ most effectively.";
  conTxt.textContent = "Click confirm to choose this book";
  confirm.disabled = false;
  currTitle = title.textContent;
});
four.addEventListener("click", function () {
  openModal();
  removeText();
  title.textContent = "Spider-Man: Miles Morales Vol. 1";
  isbn.textContent = "ISBN 785199616";
  author.textContent = "by Brian-Michael Bendis";
  category.textContent = "Category: Comics";
  description.textContent =
    "Miles Morales is hitting the big time! Not only is he joining the Marvel Universe, but he's also a card-carrying Avenger! But how have Miles' first eight months been, coming to grips with an All-new , All-Different new York? One thing is the same - nonstop action! Like when Earth's Mightiest Heroes all fall, and Miles stands alone against a villain with the power to destroy the universe. Then there's Miles' toughest foe yet - his grandmother!.";
  conTxt.textContent = "Click confirm to choose this book";
  confirm.disabled = false;
  currTitle = title.textContent;
});
five.addEventListener("click", function () {
  openModal();
  removeText();
  title.textContent = "Spare: by Prince Harry, The Duke of Sussex";
  isbn.textContent = "ISBN 857504797";
  author.textContent = "by Prince-Harry The-Duke-of-Sussex";
  category.textContent = "Category: Biography";
  description.textContent =
    "It was one of the most searing images of the twentieth century: two young boys, two princes, walking behind their mother's coffin as the world watched in sorrow-and horror. As Princess Diana was laid to rest, billions wondered what Prince William and Prince Harry must be thinking and feeling-and how their lives would play out from that point on.";
  conTxt.textContent = "Click confirm to choose this book";
  confirm.disabled = false;
  currTitle = title.textContent;
});
six.addEventListener("click", function () {
  openModal();
  removeText();
  title.textContent =
    "Harry Potter and the Deathly Hallows: 7/7 (Harry Potter, 7)";
  isbn.textContent = "ISBN 1408855712";
  author.textContent = "by J.K. Rowling";
  category.textContent = "Category: Fiction";
  description.textContent =
    "As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is now broken, but he cannot keep hiding.";
  conTxt.textContent = "Click confirm to choose this book";
  confirm.disabled = false;
  currTitle = title.textContent;
});
seven.addEventListener("click", function () {
  openModal();
  removeText();
  title.textContent = "Daisy Jones and The Six";
  isbn.textContent = "ISBN 1787462145";
  author.textContent = "by Taylor-Jenkins Reid";
  category.textContent = "Category: Biography";
  description.textContent =
    "From the moment Daisy walked barefoot on to the stage at the Whisky, she and the band were a sensation.Their sound defined an era. Their albums were on every turntable. They played sold-out arenas from coast to coast.";
  conTxt.textContent = "Click confirm to choose this book";
  confirm.disabled = false;
  currTitle = title.textContent;
});
eight.addEventListener("click", function () {
  openModal();
  removeText();
  title.textContent = "A 1950s Childhood: From Tin Baths to Bread and Dripping";
  isbn.textContent = "ISBN 9780752450117";
  author.textContent = "by TPaul Feeney";
  category.textContent = "Category: History";
  description.textContent =
    "Do you remember Pathe News? Taking the train to the seaside? The purple stains of iodine on the knees of boys in short trousers? Knitted bathing costumes? Then the chances are you were born in or around 1950. To the young people of today, the 1950s seems like another age. But for those born around then, this era of childhood seems like yesterday. From waking up to ice on the inside of the windows, washing in a tin bath by the fire and spoonfuls of cod-liver oil, home life was very different to today. This delightful compendium of memories will appeal to all who grew up in this post-war decade, whether in town or country, wealth or poverty. With chapters on games and hobbies, holidays, music and fashion, the wonderful memories and delightful illustrations will bring back this decade of childhood, and jog memories about all aspects of life.";
  conTxt.textContent = "Click confirm to choose this book";
  confirm.disabled = false;
  currTitle = title.textContent;
});
nine.addEventListener("click", function () {
  openModal();
  removeText();
  title.textContent = "Python Crash Course";
  isbn.textContent = "ISBN 9781593276034";
  author.textContent = "by Eric Matthes";
  category.textContent = "Category: Education";
  description.textContent =
    "Since its initial debut in 2015, this critically acclaimed quick-start guide to programming has taught millions of people all over the world to write clean code, solve problems, and build custom applications in the popular language of Python. The highly anticipated third edition of Python Crash Course has been completely revised with updated code, practices, and projects-making it the ultimate launchpad for beginners to start their engines and code in Python 3!";
  conTxt.textContent = "Click confirm to choose this book";
  confirm.disabled = false;
  currTitle = title.textContent;
});

const arrTitle = []; //this stores the books that were borrowed by the student
//we will this array in another html file to show the borrowed books for the inventory

confirm.addEventListener("click", function () {
  removeText();
  description.textContent = "Book borrowed successfully!";
  confirm.disabled = true;
  if (!arrTitle.includes(currTitle)) {
    arrTitle.push(currTitle);
  }
  sessionStorage.setItem("Array", JSON.stringify(arrTitle));
});

//the search book function
const input = document.querySelector(".input");
const search = document.querySelector(".search");

const arr1 = "History From the Dawn of Civilization to the Present Day"
  .toLowerCase()
  .split(" ");
const arr2 = "The Thursday Murder Club The Thursday Murder Club 1"
  .toLowerCase()
  .split(" ");
const arr3 = "C++ Programming Language".toLowerCase().split(" ");
const arr4 = "Spider-Man: Miles Morales Vol. 1".toLowerCase().split(" ");
const arr5 = "Spare: by Prince Harry, The Duke of Sussex"
  .toLowerCase()
  .split(" ");
const arr6 = "Harry Potter and the Deathly Hallows".toLowerCase().split(" ");
const arr7 =
  "Daisy Jones and The Six From the author of the hit TV series Taylor Jenkins Reid"
    .toLowerCase()
    .split(" ");
const arr8 = "A 1950s Childhood: From Tin Baths to Bread and Dripping"
  .toLowerCase()
  .split(" ");
const arr9 =
  "Python Crash Course A Hands-On, Project-Based Introduction to Programming"
    .toLowerCase()
    .split(" ");

const addClass = function (a, b, c, d, e, f, g, h) {
  a.classList.add("hide");
  b.classList.add("hide");
  c.classList.add("hide");
  d.classList.add("hide");
  e.classList.add("hide");
  f.classList.add("hide");
  g.classList.add("hide");
  h.classList.add("hide");
};
const removeClass = function (a, b, c, d, e, f, g, h, i) {
  a.classList.remove("hide");
  b.classList.remove("hide");
  c.classList.remove("hide");
  d.classList.remove("hide");
  e.classList.remove("hide");
  f.classList.remove("hide");
  g.classList.remove("hide");
  h.classList.remove("hide");
  i.classList.remove("hide");
};

let filter = ""; //dawn, murder, c++, spider, spare, harry, daisy, childhood, python

search.addEventListener("click", function () {
  if (arr1.includes(input.value.toLowerCase())) {
    filter = "dawn";
  } else if (arr2.includes(input.value.toLowerCase())) {
    filter = "murder";
  } else if (arr3.includes(input.value.toLowerCase())) {
    filter = "c++";
  } else if (arr4.includes(input.value.toLowerCase())) {
    filter = "spider";
  } else if (arr5.includes(input.value.toLowerCase())) {
    filter = "spare";
  } else if (arr6.includes(input.value.toLowerCase())) {
    filter = "harry";
  } else if (arr7.includes(input.value.toLowerCase())) {
    filter = "daisy";
  } else if (arr8.includes(input.value.toLowerCase())) {
    filter = "childhood";
  } else if (arr9.includes(input.value.toLowerCase())) {
    filter = "python";
  }

  if (filter == "dawn") {
    removeClass(one, two, three, four, five, six, seven, eight, nine);
    addClass(two, three, four, five, six, seven, eight, nine);
  } else if (filter == "murder") {
    removeClass(one, two, three, four, five, six, seven, eight, nine);
    addClass(one, three, four, five, six, seven, eight, nine);
  } else if (filter == "c++") {
    removeClass(one, two, three, four, five, six, seven, eight, nine);
    addClass(one, two, four, five, six, seven, eight, nine);
  } else if (filter == "spider") {
    removeClass(one, two, three, four, five, six, seven, eight, nine);
    addClass(one, two, three, five, six, seven, eight, nine);
  } else if (filter == "spare") {
    removeClass(one, two, three, four, five, six, seven, eight, nine);
    addClass(one, two, three, four, six, seven, eight, nine);
  } else if (filter == "harry") {
    removeClass(one, two, three, four, five, six, seven, eight, nine);
    addClass(one, two, three, four, five, seven, eight, nine);
  } else if (filter == "daisy") {
    removeClass(one, two, three, four, five, six, seven, eight, nine);
    addClass(one, two, three, four, five, six, eight, nine);
  } else if (filter == "childhood") {
    removeClass(one, two, three, four, five, six, seven, eight, nine);
    addClass(one, two, three, four, five, six, seven, nine);
  } else if (filter == "python") {
    removeClass(one, two, three, four, five, six, seven, eight, nine);
    addClass(one, two, three, four, five, six, seven, eight);
  }
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
