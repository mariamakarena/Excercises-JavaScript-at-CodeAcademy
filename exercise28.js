function addMultTable(rows, cols) {
  //i define a function, name it and put the parameters(in this case how many rows and columns the table should have)
  const table = document.createElement("table"); //this creates a new <table> html element uding JavaScript
  table.border = "1";
  for (let r = 1; r <= rows; r++) {
    //this is the outer loop, it runs once for each row
    const tr = document.createElement("tr"); //inside the loop, we create a new <tr>element (table row)

    for (let d = 1; d <= cols; d++) {
      const td = document.createElement("td"); //for each column, create a new <td>element (table cell)
      td.textContent = r * d; //set the content of the cell to the product of the current row and column numbers (like in this case the multiplication result)
      tr.appendChild(td); //add the <td>cell to the current <tr>row
    }

    table.appendChild(tr); //after the inner loop is done (all colums for one row), add the entire row to the table
  }
  const heading = document.querySelector("h1"); //it TARGETS or FIND the h1 element in the html document
  heading.insertAdjacentElement("afterend", table); //it INSERTS the table right after the heading
}
addMultTable(4, 8); //i call the function with this parameters
