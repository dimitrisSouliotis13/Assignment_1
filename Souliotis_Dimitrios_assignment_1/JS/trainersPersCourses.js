function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var fname = document.getElementById("fname_row" + no);
    var lname = document.getElementById("lname_row" + no);
    var stream = document.getElementById("stream_row" + no);
    var type = document.getElementById("type_row" + no);

    var fname1 = fname.innerHTML;
    var lname1 = lname.innerHTML;
    var stream1 = stream.innerText;
    var type1 = type.innerText;

    fname.innerHTML = "<input type='text' id='fname_text" + no + "' value='" + fname1 + "'>";
    lname.innerHTML = "<input type='text' id='lname_text" + no + "' value='" + lname1 + "'>";
    stream.innerHTML = "<input type='text' id='stream_text" + no + "' value='" + stream1 + "'>";
    type.innerHTML = "<input type='text' id='type_text" + no + "' value='" + type1 + "'>";

};

function save_row(no) {
    var fname1 = document.getElementById("fname_text" + no).value;
    var lname1 = document.getElementById("lname_text" + no).value;
    var stream1 = document.getElementById("stream_text" + no).value;
    var type1 = document.getElementById("type_text" + no).value;

    document.getElementById("fname_row" + no).innerHTML = fname1;
    document.getElementById("lname_row" + no).innerHTML = lname1;
    document.getElementById("stream_row" + no).innerHTML = stream1;
    document.getElementById("type_row" + no).innerHTML = type1;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";

};

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
};

function add_row() {
    var new_fname = document.getElementById("new_fname").value;
    var new_lname = document.getElementById("new_lname").value;
    var new_stream = document.getElementById("new_stream").value;
    var new_type = document.getElementById("new_type").value;

    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len
        + "'><td id ='fname_row" + table_len + "' > " + new_fname
        + "</td><td id='lname_row" + table_len + "'>" + new_lname
        + "</td><td id='stream_row" + table_len + "'>" + new_stream
        + "</td><td id='type_row" + table_len + "'>" + new_type
        + "</td><td><input type='button' id='edit_button" + table_len
        + "' value='Edit' class='edit btn btn-sm btn-success' onclick='edit_row(" + table_len
        + ")'> <input type='button' id='save_button" + table_len
        + "' value='Save' class='save btn btn-sm btn-primary' onclick='save_row(" + table_len
        + ")'> <input type='button' value='Delete' class='delete btn btn-sm btn-danger' onclick='delete_row(" + table_len + ")'></td></tr>";

    document.getElementById("new_fname").value = "";
    document.getElementById("new_lname").value = "";
    document.getElementById("new_stream").value = "";
    document.getElementById("new_type").value = "";
};