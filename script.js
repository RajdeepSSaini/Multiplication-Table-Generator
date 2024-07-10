function generateTable() {
    var rows = document.getElementById('rowsInput').value;
    var cols = document.getElementById('colsInput').value;
    var tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; // Clear previous table

    if (rows <= 0 || cols <= 0) {
        alert('Please enter positive numbers for rows and columns.');
        return;
    }

    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    // Create table header
    var headerRow = document.createElement('tr');
    for (var c = 0; c <= cols; c++) {
        var th = document.createElement('th');
        th.textContent = c === 0 ? '' : c;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);

    // Create table body
    for (var r = 1; r <= rows; r++) {
        var row = document.createElement('tr');
        for (var c = 0; c <= cols; c++) {
            var cell = document.createElement(c === 0 ? 'th' : 'td');
            cell.textContent = c === 0 ? r : r * c;
            if (c === 0) {
                cell.style.backgroundColor = '#007bff';
                cell.style.color = 'white';
            }
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table);
}
