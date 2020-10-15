const addName = () => {
  const new_name = document.getElementById("name");
  const ul_item = document.getElementById("list");
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
};
const teamTable = () => {
  const num_team = document.getElementById("numteams");

  const teams = document.getElementById("teams");
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < num_team.value; i++) {
    const col = document.createElement("div");
    col.classList.add("col-2", "col-md-4", "col-lg-4");
    col.innerText = "TEAM  " + String.fromCharCode(65 + i);
    row.appendChild(col);
  }
  teams.appendChild(row);
};
const teamAssign = () => {
  const names = document.querySelectorAll("#list");
  const rand = Math.floor(Math.random() * names.length);
};
