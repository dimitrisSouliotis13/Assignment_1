function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var title = document.getElementById("title_row" + no);
    var stream = document.getElementById("stream_row" + no);
    var type = document.getElementById("type_row" + no);
    var startDate = document.getElementById("startDate_row" + no);
    var endDate = document.getElementById("endDate_row" + no);

    var title1 = title.innerHTML;
    var stream1 = stream.innerHTML;
    var type1 = type.innerHTML;
    var startDate1 = startDate.innerText;
    var endDate1 = endDate.innerText;

    title.innerHTML = "<input type='text' id='title_text" + no + "' value='" + title1 + "'>";
    stream.innerHTML = "<input type='text' id='stream_text" + no + "' value='" + stream1 + "'>";
    type.innerHTML = "<input type='text' id='type_text" + no + "' value='" + type1 + "'>";
    startDate.innerHTML = "<input type='date' id='startDate_text" + no + "' value='" + startDate1 + "'>";
    endDate.innerHTML = "<input type='date' id='endDate_text" + no + "' value='" + endDate1 + "'>";
};

function save_row(no) {

    var title1 = document.getElementById("title_text" + no).value;
    var stream1 = document.getElementById("stream_text" + no).value;
    var type1 = document.getElementById("type_text" + no).value;
    var startDate1 = document.getElementById("startDate_text" + no).value;
    var endDate1 = document.getElementById("endDate_text" + no).value;


    document.getElementById("title_row" + no).innerHTML = title1;
    document.getElementById("stream_row" + no).innerHTML = stream1;
    document.getElementById("type_row" + no).innerHTML = type1;
    document.getElementById("startDate_row" + no).innerHTML = startDate1;
    document.getElementById("endDate_row" + no).innerHTML = endDate1;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
};


function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
};


function add_row() {

    var new_title = document.getElementById("new_title").value;
    var new_stream = document.getElementById("new_stream").value;
    var new_type = document.getElementById("new_type").value;
    var new_startDate = document.getElementById("new_startDate").value;
    var new_endDate = document.getElementById("new_endDate").value;


    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len
        + "'><td id ='title_row" + table_len + "' > " + new_title
        + "</td><td id='stream_row" + table_len + "'>" + new_stream
        + "</td><td id='type_row" + table_len + "'>" + new_type
        + "</td><td id='startDate_row" + table_len + "'>" + new_startDate
        + "</td><td id='endDate_row" + table_len + "'>" + new_endDate
        + "</td><td><input type='button' id='edit_button" + table_len
        + "' value='Edit' class='edit btn btn-sm btn-success' onclick='edit_row(" + table_len
        + ")'> <input type='button' id='save_button" + table_len
        + "' value='Save' class='save btn btn-sm btn-primary' onclick='save_row(" + table_len
        + ")'> <input type='button' value='Delete' class='delete btn btn-sm btn-danger' onclick='delete_row(" + table_len + ")'></td></tr>";

    document.getElementById("new_title").value = "";
    document.getElementById("new_stream").value = "";
    document.getElementById("new_type").value = "";
    document.getElementById("new_startDate").value = "";
    document.getElementById("new_endDate").value = "";
};
