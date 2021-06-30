function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var title = document.getElementById("title_row" + no);
    var description = document.getElementById("description_row" + no);
    var subDTime = document.getElementById("subDTime_row" + no);
    var oralMark = document.getElementById("oralMark_row" + no);
    var totalMark = document.getElementById("totalMark_row" + no);

    var title1 = title.innerHTML;
    var description1 = description.innerHTML;
    var subDTime1 = subDTime.innerHTML;
    var oralMark1 = oralMark.innerText;
    var totalMark1 = totalMark.innerText;

    title.innerHTML = "<input type='text' id='title_text" + no + "' value='" + title1 + "'>";
    description.innerHTML = "<input type='text' id='description_text" + no + "' value='" + description1 + "'>";
    subDTime.innerHTML = "<input type='date' id='subDTime_text" + no + "' value='" + subDTime1 + "'>";
    oralMark.innerHTML = "<input type='number' id='oralMark_text" + no + "' value='" + oralMark1 + "'>";
    totalMark.innerHTML = "<input type='number' id='totalMark_text" + no + "' value='" + totalMark1 + "'>";
};

function save_row(no) {

    var title1 = document.getElementById("title_text" + no).value;
    var description1 = document.getElementById("description_text" + no).value;
    var subDTime1 = document.getElementById("subDTime_text" + no).value;
    var oralMark1 = document.getElementById("oralMark_text" + no).value;
    var totalMark1 = document.getElementById("totalMark_text" + no).value;


    document.getElementById("title_row" + no).innerHTML = title1;
    document.getElementById("description_row" + no).innerHTML = description1;
    document.getElementById("subDTime_row" + no).innerHTML = subDTime1;
    document.getElementById("oralMark_row" + no).innerHTML = oralMark1;
    document.getElementById("totalMark_row" + no).innerHTML = totalMark1;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
};


function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
};

function add_row() {

    var new_title = document.getElementById("new_title").value;
    var new_description = document.getElementById("new_description").value;
    var new_subDTime = document.getElementById("new_subDTime").value;
    var new_oralMark = document.getElementById("new_oralMark").value;
    var new_totalMark = document.getElementById("new_totalMark").value;


    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len
        + "'><td id ='title_row" + table_len + "' > " + new_title
        + "</td><td id='description_row" + table_len + "'>" + new_description
        + "</td><td id='subDTime_row" + table_len + "'>" + new_subDTime
        + "</td><td id='oralMark_row" + table_len + "'>" + new_oralMark
        + "</td><td id='totalMark_row" + table_len + "'>" + new_totalMark
        + "</td><td><input type='button' id='edit_button" + table_len
        + "' value='Edit' class='edit btn btn-sm btn-success' onclick='edit_row(" + table_len
        + ")'> <input type='button' id='save_button" + table_len
        + "' value='Save' class='save btn btn-sm btn-primary' onclick='save_row(" + table_len
        + ")'> <input type='button' value='Delete' class='delete btn btn-sm btn-danger' onclick='delete_row(" + table_len + ")'></td></tr>";

    document.getElementById("new_title").value = "";
    document.getElementById("new_description").value = "";
    document.getElementById("new_subDTime").value = "";
    document.getElementById("new_oralMark").value = "";
    document.getElementById("new_totalMark").value = "";
};
