function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";


    var stream = document.getElementById("stream_row" + no);
    var type = document.getElementById("type_row" + no);
    var description = document.getElementById("description_row" + no);

    var stream1 = stream.innerHTML;
    var type1 = type.innerHTML;
    var description1 = description.innerHTML;

    stream.innerHTML = "<input type='text' id='stream_text" + no + "' value='" + stream1 + "'>";
    type.innerHTML = "<input type='text' id='type_text" + no + "' value='" + type1 + "'>";
    description.innerHTML = "<input type='text' id='description_text" + no + "' value='" + description1 + "'>";

};

function save_row(no) {

    var stream1 = document.getElementById("stream_text" + no).value;
    var type1 = document.getElementById("type_text" + no).value;
    var description1 = document.getElementById("description_text" + no).value;


    document.getElementById("stream_row" + no).innerHTML = stream1;
    document.getElementById("type_row" + no).innerHTML = type1;
    document.getElementById("description_row" + no).innerHTML = description1;


    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
};


function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
};


function add_row() {

    var new_stream = document.getElementById("new_stream").value;
    var new_type = document.getElementById("new_type").value;
    var new_description = document.getElementById("new_description").value;

    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len
        + "'><td id='stream_row" + table_len + "'>" + new_stream
        + "</td><td id='type_row" + table_len + "'>" + new_type
        + "</td><td id='description_row" + table_len + "'>" + new_description
        + "</td><td><input type='button' id='edit_button" + table_len
        + "' value='Edit' class='edit btn btn-sm btn-success' onclick='edit_row(" + table_len
        + ")'> <input type='button' id='save_button" + table_len
        + "' value='Save' class='save btn btn-sm btn-primary' onclick='save_row(" + table_len
        + ")'> <input type='button' value='Delete' class='delete btn btn-sm btn-danger' onclick='delete_row(" + table_len + ")'></td></tr>";

    document.getElementById("new_stream").value = "";
    document.getElementById("new_type").value = "";
    document.getElementById("new_description").value = "";
};
