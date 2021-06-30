function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var fname = document.getElementById("fname_row" + no);
    var lname = document.getElementById("lname_row" + no);
    var dob = document.getElementById("dob_row" + no);
    var fees = document.getElementById("fees_row" + no);

    var fname1 = fname.innerHTML;
    var lname1 = lname.innerHTML;
    var dob1 = dob.innerText;
    var fees1 = fees.innerHTML;

    fname.innerHTML = "<input type='text' id='fname_text" + no + "' value='" + fname1 + "'>";
    lname.innerHTML = "<input type='text' id='lname_text" + no + "' value='" + lname1 + "'>";
    dob.innerHTML = "<input type='date' id='dob_text" + no + "' value='" + dob1 + "'>";
    fees.innerHTML = "<input type='number' id='fees_text" + no + "' value='" + fees1 + "'>";
};

function save_row(no) {

    var fname1 = document.getElementById("fname_text" + no).value;
    var lname1 = document.getElementById("lname_text" + no).value;
    var dob1 = document.getElementById("dob_text" + no).value;
    var fees1 = document.getElementById("fees_text" + no).value;


    document.getElementById("fname_row" + no).innerHTML = fname1;
    document.getElementById("lname_row" + no).innerHTML = lname1;
    document.getElementById("dob_row" + no).innerHTML = dob1;
    document.getElementById("fees_row" + no).innerHTML = fees1;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
};


function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
};

// 2os tropos gia delete the row

// $(document).on('click', ".delete", function () {
//     $(this).closest('tr').remove();
// });


function add_row() {

    var new_fname = document.getElementById("new_fname").value;
    var new_lname = document.getElementById("new_lname").value;
    var new_dob = document.getElementById("new_dob").value;
    var new_fees = document.getElementById("new_fees").value;


    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len
        + "'><td id ='fname_row" + table_len + "' > " + new_fname
        + "</td ><td id='lname_row" + table_len + "'>" + new_lname
        + "</td><td id='dob_row" + table_len + "'>" + new_dob
        + "</td><td id='fees_row" + table_len + "'>" + new_fees
        + "</td><td><input type='button' id='edit_button" + table_len
        + "' value='Edit' class='edit btn btn-sm btn-success' onclick='edit_row(" + table_len
        + ")'> <input type='button' id='save_button" + table_len
        + "' value='Save' class='save btn btn-sm btn-primary' onclick='save_row(" + table_len
        + ")'> <input type='button' value='Delete' class='delete btn btn-sm btn-danger' onclick='delete_row(" + table_len + ")'></td></tr>";

    document.getElementById("new_fname").value = "";
    document.getElementById("new_lname").value = "";
    document.getElementById("new_dob").value = "";
    document.getElementById("new_fees").value = "";
};
