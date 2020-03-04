/*
   Attribution to the following reference site, used to learn about initial base table element. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
*/

function clearGrid() {
    // clears colors from the grid, if applicable and calls make grid function
    const OLD_GRID = document.querySelector('tbody') !== null;
    if (OLD_GRID) {
      document.querySelector('tbody').remove();
      makeGrid();
    } else {
      makeGrid();
    }
}

function cellColor() {
    // captures the chosen color in the color picker
    const CHOSEN_COLOR = document.querySelectorAll('input')[3].value;
    return CHOSEN_COLOR;
}

function makeGrid() {
    // finds the document body(<body>) and captures the user sizing inputs
    const DOC_BODY = document.querySelector('body');
    const GRID_HEIGHT = document.querySelector('#inputHeight').value;
    const GRID_WIDTH = document.querySelector('#inputWidth').value;

    // finds the grid base(<table>) and creates grid body(<tbody>)
    const GRID_BASE = document.querySelector('table');
    const GRID_BODY = document.createElement('tbody');

    // loop and nested loop to create the rows and cells based on user sizing
    for(let y = 0; y < GRID_HEIGHT; y++) {
        const GRID_ROW = document.createElement('tr');

        for(let x = 0; x < GRID_WIDTH; x++) {
            const GRID_CELL = document.createElement('td');
            // adds an event listener to each cell and changes color on click
            GRID_CELL.addEventListener('click', function (event) {
              event.explicitOriginalTarget.bgColor = cellColor();
            });
            // adds the cell into the row
            GRID_ROW.appendChild(GRID_CELL);
        }
        // adds the row into grid body(<tbody>)
        GRID_BODY.appendChild(GRID_ROW);
    }

    // adds grid body(<tbody>) into grid base(<table>)
    GRID_BASE.appendChild(GRID_BODY);
    // adds grid base(<table>) into document body(<body>)
    DOC_BODY.appendChild(GRID_BASE);
}

function beginPixelArt() {
    // finds the size picker form
    const SIZER = document.querySelector('#sizePicker');
    // sets the label of the submit button of the form to always say 'Submit'
    const SUBMIT_BUTTON = document.querySelectorAll('input')[2];
    SUBMIT_BUTTON.setAttribute('value','Submit');
    // listens for a submit button press(submit event) on the size picker form
    SIZER.addEventListener('submit', function (event) {
    // calls the clear grid function and later stops default refresh
    clearGrid();
    event.preventDefault();
  });
}

beginPixelArt();
