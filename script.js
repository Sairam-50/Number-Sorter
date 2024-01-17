const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  // You will be using this as an event listener for the sortButton. Because buttons associated with a form element submit by default, you need to prevent that behavior.
  event.preventDefault();
  // you need to get the values from your select elements. Since they all have the class values-dropdown, you can query them all at once.

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));
  updateUI(inputValues);
};

// this function is used for updating the UI.
// Because you will be writing algorithms that won't immediately have a return value, set a fallback value for array to be an empty array.
const updateUI = (array=[]) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
};
sortButton.addEventListener("click", sortInputArray);
