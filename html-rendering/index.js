const studentData = {
  sname: "John",
  smail: "a@gmail.com",
  RA: "1234567",
};

export function loadUserHeader() {
  const parent = document.querySelector("header#main-header");
  const nav = document.createElement("nav");
  const studentContainer = document.createElement("ol");

  let studentLi = null;
  let studentNode = null;

  nav.setAttribute("id", "student-nav");

  for (const k in studentData) {
    studentLi = document.createElement("li");
    studentNode = document.createTextNode(studentData[k]);

    if (k === "sname")
      studentLi.innerHTML += `<a href="profile.html">${studentData[k]}</a>`;
    else studentLi.appendChild(studentNode);

    studentContainer.appendChild(studentLi);
  }

  nav.appendChild(studentContainer);
  parent.appendChild(nav);
}
