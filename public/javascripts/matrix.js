const matrix1 = document.querySelector('#matrix_1')
const matrix2 = document.querySelector('#matrix_2')
const result = document.querySelector('#result')


const addRow = table =>{
    const row = table.insertRow(table.rows.length);
    table.id == 'matrix_2' ? row.className = "matrix2__row" : null
    return row
}

const addCell = row =>{
    const cell = row.insertCell(row.cells.length);
    return cell
}

const cellAddInput = cell =>{
    const input = document.createElement("input");
    input.type = "number";
    input.className = 'input__matrix'
    input.name = cell.offsetParent.id + '[' + cell.parentElement.rowIndex + "][]";
    cell.appendChild(input);
    return cell
}

const addingRow = row => cellAddInput(addCell(row))

const addIntoTableRow = () =>{
    //matrix_1
    const rowMatrix1 = addRow(matrix1)
    Array.from(rowMatrix1.parentElement.firstChild.cells).map(cell => cellAddInput(addCell(rowMatrix1)))
    //matrix_2
    const rowMatrix2 = addRow(matrix2)
    Array.from(rowMatrix2.parentElement.firstChild.cells).map(cell => cellAddInput(addCell(rowMatrix2)))
}

const addIntoTableColumn = () =>{
    //matrix_1
    Array.from(matrix1.rows).map(addingRow)
    //matrix_2
    Array.from(matrix2.rows).map(addingRow)

}



