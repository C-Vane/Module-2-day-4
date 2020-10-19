// Enter Key replace button to add names

const add = document.getElementById("name");

add.addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    addName();
  }
});
let li = 0;
//adding names to the list
const addName = () => {
  const new_name = document.getElementById("name");
  const ul_item = document.getElementById("list" + li);
  const new_li = document.createElement("li");
  const cancel_btn = document.createElement("input");
  (cancel_btn.type = "button"), (cancel_btn.value = "x"), cancel_btn.classList.add("cancel-btn");
  cancel_btn.addEventListener("click", (event) => {
    cancel_btn.parentElement.remove();
    cancel_btn.remove();
  });
  new_li.innerHTML = new_name.value + "  ";
  ul_item.appendChild(new_li);
  new_li.appendChild(cancel_btn);
  new_name.value = "";
  const all_li = ul_item.querySelectorAll("li");
  if (all_li.length > 10) {
    const new_ul = document.createElement("ul");
    li++;
    new_ul.setAttribute("id", "list" + li);
    new_ul.setAttribute("class", "col col-6 col-md-3 col-lg-2 mx-3 my-3");
    document.getElementById("divlist").appendChild(new_ul);
  }
};
let bl = false;

const teamTable = () => {
  const num_team = document.getElementById("numteams");
  const names = document.querySelectorAll("li");
  if (names.length < num_team.value) {
    alert("Please add enough students for the teams");
    return;
  } else {
    const table_destination = document.getElementById("teamslist");
    console.log(names.values);
    for (let i = 0; i < num_team.value; i++) {
      console.log(Math.ceil(num_team.value / 4));
      const table = document.createElement("TABLE");
      table.setAttribute("id", "Table");
      table.setAttribute("class", "col col-12 col-md-6 col-lg-3  my-5");
      const title = document.createElement("h4");
      title.innerText = "TEAM " + String.fromCharCode(65 + i);
      title.style.backgroundColor = randomColor();
      table.appendChild(title);
      table_destination.appendChild(table);

      for (let j = 0; j < Math.ceil(names.length / num_team.value); j++) {
        const col = document.createElement("TR");
        col.classList.add("teamM");
        const text = document.createTextNode("---------");
        col.appendChild(text);
        table.appendChild(col);
      }
    }
  }

  bl = true;
};
let i = 0,
  j = 1;
const teamAssign = () => {
  //Get parent element and create grid
  if (bl === false) {
    alert("Please Create Teams");
  }

  //Add cancel button to remove a name from a team and add it to the list
  const cancel_btn = document.createElement("input");
  (cancel_btn.type = "button"), (cancel_btn.value = "x"), cancel_btn.classList.add("cancel-btn");
  cancel_btn.addEventListener("click", (event) => {
    const ul_item = document.getElementById("list");
    const new_li = document.createElement("li");
    new_li.innerText = cancel_btn.parentElement.innerText;
    ul_item.appendChild(new_li);

    const cancel_btn2 = document.createElement("input");
    (cancel_btn2.type = "button"), (cancel_btn2.value = "x"), cancel_btn2.classList.add("cancel-btn");
    cancel_btn2.addEventListener("click", (event) => {
      cancel_btn2.parentElement.remove();
      cancel_btn2.remove();
    });

    new_li.appendChild(cancel_btn2);

    cancel_btn.parentElement.innerText = "---------";
    cancel_btn.remove();
  });
  const num_team = document.getElementById("numteams");
  const names = document.querySelectorAll("li");

  const rand = Math.floor(Math.random() * (names.length - 1));
  const col = document.querySelectorAll(".teamM");
  for (let i = 0; i < col.length / 2; i++) {
    for (let k = i; k < col.length; k += col.length / num_team.value) {
      console.log(k);

      //Reset if no more names in the list
      if (names.length === 0) {
        alert("Please add names to assign");
        return;
      }

      if (col[k].innerText === "---------") {
        col[k].innerText = names[rand].innerText;

        names[rand].remove();

        col[k].appendChild(cancel_btn);

        return;
      }
    }
  }
};
const teamAssignAll = () => {
  const names = document.querySelectorAll("li");
  for (let i = 0; i < names.length; i++) {
    teamAssign();
  }
};
const randomColor = () => {
  let chars = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
};
