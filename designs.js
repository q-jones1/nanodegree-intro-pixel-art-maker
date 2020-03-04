/*  Attribute the reference site used to learn about base table construction. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
*/

function clearGrid() {
  var oldGrid = document.querySelector('tbody') !== null;
  if (oldGrid) {document.querySelector('tbody').remove();
  makeGrid();
} else {makeGrid();};
}

function makeGrid() {
    // finds the doc body and user sizing inputs
    const DOC_BODY = document.getElementsByTagName("body")[0];
    const GRID_HEIGHT = document.querySelector('#inputHeight').value;
    const GRID_WIDTH = document.querySelector('#inputWidth').value;

    // finds the grid base(<table>) and creates grid body(<tbody>)
    GRID_BASE = document.querySelector("table");
    GRID_BODY = document.createElement("tbody");

    // loop and nested loop to create the rows and cells based on user sizing
    for(var y = 0; y < GRID_HEIGHT; y++) {
        const GRID_ROW = document.createElement("tr");

        for(var x = 0; x < GRID_WIDTH; x++) {
            GRID_CELL = document.createElement("td");
            GRID_ROW.appendChild(GRID_CELL);
        }
        GRID_BODY.appendChild(GRID_ROW);
    }

    // adds grid body(<tbody>) into grid base(<table>)
    GRID_BASE.appendChild(GRID_BODY);
    // adds grid base(<table>) into document body(<body>)
    DOC_BODY.appendChild(GRID_BASE);
}

const SIZER = document.querySelector('#sizePicker');
SIZER.addEventListener('submit', function (event) {
  clearGrid();
  event.preventDefault();
  console.log(event);
});
