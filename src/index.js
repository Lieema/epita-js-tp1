/* eslint-disable */
import list from "./actions/list";
import add from "./actions/add";


const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

const addPictureHandler = () => {
  const url = getInputContents();

  // FIXME: use your actions functions to add a new picture
  // FIXME: bonus, trim eventual whitespaces and validate content

  clearInputContents();
};

const refreshGrid = () => {
  // FIXME: use your functions to get all the elements
  const items = [];

  const fragment = document.createDocumentFragment();

  items.forEach(i => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    // FIXME: set the URL from your Picture model.
    imgElement.src = "https://picsum.photos/458/354";

    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );

    // FIXME: use your functions to delete the selected element
    deleteButtonElement.addEventListener("click", () => {});

    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());
