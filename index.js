// Enter Key replace button to add names

const add = document.getElementById("name");

add.addEventListener("keypress", function (event) {

    if (event.keyCode == 13) {
        addName();
    }

});
//addig names to the list 
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
let bl = false;
/* //Empty Team table
const teamTable = () => {
    const num_team = document.getElementById("numteams");
    const names = document.querySelectorAll("li");
    const teams = document.getElementById("teamslist");
    const row = document.createElement("div");
    row.classList.add("row");
    if (names.length < num_team.value) {
        alert("Please add enough students for the teams");
        return;
    } else {
        for (let i = 0; i < num_team.value; i++) {
            const col = document.createElement("div");
            col.classList.add("col-2", "col-md-4", "col-lg-4");
            col.innerText = "TEAM  " + String.fromCharCode(65 + i);
            row.appendChild(col);
        }
        teams.appendChild(row);
        console.log(names.length / num_team.value);
        let id;
        for (let i = 0; i < names.length / num_team.value; i++) {
            const rows = document.createElement("div");
            rows.classList.add("row");
            id= "rows"+i;
            rows.setAttribute("id", id);
            teams.appendChild(rows);
        }
        document.getElementById("button-addon").remove();
    }
    bl=true;
};
// fill in the table with
let counter = 0;
const teamAssign = () => {
    //Get parent element and create grid
    if(bl===false){
        alert("Please Create Teams");
    }
    const num_team = document.getElementById("numteams");
    const names = document.querySelectorAll("li");
    //Reset if no more names in the list
    if ((names.length) === 0) {
        counter = 0;
        alert("Please add names to assign");
        return;
    }

    let cont = Math.floor((counter) / num_team.value);
    const rows = document.querySelectorAll("#rows");
    console.log(rows.innerHTML);
    const rand = Math.floor(Math.random() * (names.length - 1));
    const name = document.createElement("div");
    //Add a name to a Team and remove from list
    name.innerText = names[rand].innerText;
    name.classList.add("col-2", "col-md-4", "col-lg-4");
    names[rand].remove();
    rows[cont].appendChild(name);
    counter++;
   
    //Add cancel button to remove a name from a team and add if to a list
    console.log(cont, counter, names.length);
    const cancel_btn = document.createElement("input");
    (cancel_btn.type = "button"), (cancel_btn.value = "x"), cancel_btn.classList.add("cancel-btn");
    cancel_btn.addEventListener("click", (event) => {
        counter--;
        const ul_item = document.getElementById("list");
        const new_li = document.createElement("li");
        new_li.innerText = name.innerText;
        ul_item.appendChild(new_li);

        const cancel_btn2 = document.createElement("input");
        (cancel_btn2.type = "button"), (cancel_btn2.value = "x"), cancel_btn2.classList.add("cancel-btn");
        cancel_btn2.addEventListener("click", (event) => {
            cancel_btn2.parentElement.remove();
            cancel_btn2.remove();
        });

        new_li.appendChild(cancel_btn2);

        cancel_btn.parentElement.remove();
        cancel_btn.remove();
    });
    name.appendChild(cancel_btn);
    
     
};
 */
const teamTable = () => {
  
    const num_team = document.getElementById("numteams");
    const names = document.querySelectorAll("li");
    if (names.length < num_team.value) {
        alert("Please add enough students for the teams");
        return;
    } else {

        const table_destination = document.getElementById("teamslist");
        console.log(names.values);
        for (let i = 0; i < (Math.ceil(num_team.value / 4)); i++) {
            console.log(Math.ceil(num_team.value / 4))
            const table = document.createElement('TABLE');
            table.setAttribute("id", "Table");
            table_destination.appendChild(table);
            for (let j = 0; j < (Math.ceil(names.length / num_team.value) + 1); j++) {
                const rows = document.createElement("TR");
                rows.setAttribute("id", "row");
                table.appendChild(rows);
                for (let k = 0; k < 4 && k < num_team.value - (4 * i); k++) {
                    if (j === 0) {
                        const col = document.createElement("TD");
                        col.classList.add('teamT');
                        const text = document.createTextNode("TEAM " + String.fromCharCode(65 + i * 4 + k));
                        col.appendChild(text);
                        rows.appendChild(col);
                    } else {
                        const col = document.createElement("TD");
                        col.classList.add('teamM');
                        const text = document.createTextNode("---------");
                        col.appendChild(text);
                        rows.appendChild(col);
                    }
                }
            }
            const pad = document.createElement('div');
            pad.classList.add('padding');
        }

    }
    bl = true;
}
let i = 0, j = 1; k = 0;
const teamAssign = () => {
    //Get parent element and create grid
    if (bl === false) {
        alert("Please Create Teams");
    }
    console.log("i,j,k", i, j, k)
    const num_team = document.getElementById("numteams");
    const table = document.querySelectorAll("#Table");
    const rows = table[i].querySelectorAll("#row");
    const col = rows[j].querySelectorAll(".teamM");
    const names = document.querySelectorAll("li");
    //Reset if no more names in the list
    if ((names.length) === 0) {
        i = 0;
        j = 0;
        k = 0;
        alert("Please add names to assign");
        return;
    }
    const rand = Math.floor(Math.random() * (names.length - 1));
    col[k].innerText = names[rand].innerText;
    names[rand].remove();



    //Add cancel button to remove a name from a team and add it to the list
    const cancel_btn = document.createElement("input");
    (cancel_btn.type = "button"), (cancel_btn.value = "x"), cancel_btn.classList.add("cancel-btn");
    cancel_btn.addEventListener("click", (event) => {
        if (k === 0) j--;
        else if (j === 0 && k === 0) i--;
        else k--;
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

        cancel_btn.parentElement.innerText="---------";
        cancel_btn.remove();
    });
    col[k].appendChild(cancel_btn);
    k++;
    if (k > 3 || k > num_team.value - (4 * i) - 1) {
        j++;
        k = 0;
    };
    if (j > (Math.ceil(names.length / num_team.value) + 1)) {
        i++;
        j = 1;
    };
}




const randomColor = () => {
    let chars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
} 