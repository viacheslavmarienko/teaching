function onAddClick() {
    // get data
    const name = document.getElementById('name').value;
    const amount = document.getElementById("amout").value;

    // validate data
    if (name.length === 0 || amount.lenght === 0) {
        document.getElementById('error').innerHTML = 'Name or Amout error';
        return;
    }

    // create table - table must exist in DOM already - assumption
    const tbody = document.querySelector('tbody');

    const row = crieateRolw({ name: name, amount: amount });

    addDeletButton (row);

    tbody.appendChild(row);

    localStorage.setItem ('tableData',JSON.stringify({ name: name, amount: amount }));
    // all data is lost on reload (
}

function crieateRolw(data) {
    const row = document.createElement('tr');
    const nametd = document.createElement('td');
    const amouttd = document.createElement('td');
    nametd.innerHTML = data.name;
    amouttd.innerHTML = data.amount;
    row.appendChild(nametd);
    row.appendChild(amouttd);

    return row;
}

function addDeletButton(row) {
    const delet = document.createElement('button');
    const delettd = document.createElement('td');
    delet.innerHTML = 'X';
    delettd.appendChild(delet)
    row.appendChild(delettd);

    delet.addEventListener('click', function () {
        const parent = row.parentElement;

        parent.removeChild(row);
    });
}
document.getElementById('addbuton').addEventListener('click', onAddClick);

const tableData = JSON.parse(localStorage.getItem ('tableData'));

const row = crieateRolw (tableData); 
addDeletButton (row)
tbody = document.querySelector ('tbody')
tbody.appendChild (row)