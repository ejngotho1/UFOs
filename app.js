// import data from data.js to a app.js
// declare a variable called.. tableData
const tableData = data;

// lets reference the html table using D3...D3 produces highly dynamic graphics in html
// d3.select tells js to look for <tbody>..so lets reference the <tbody> tag from the html code
var tbody = d3.select("tbody");

// lets build a table ...functin named by what it does
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }



