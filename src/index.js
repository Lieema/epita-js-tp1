/* eslint-disable */
import list from "./actions/list";
import add from "./actions/add";
import remove from "./actions/remove";
import update from "./actions/update";


const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

// returns true if url is correct, false otherwise
const verifyUrls = url => {
    // we don't know if single element or array, ensure it's array
    let urls = [].concat(url);

    urls.forEach((el, index, array) => array[index] = el.trim());
  
    // Regex for urls (from: http://forums.devshed.com/javascript-development-115/regexp-match-url-pattern-493764.html)
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator  
  
    if (urls.every(el => {    
      return !!pattern.test(el)
    }))
    {
      return urls;
    }
    return null;
}

const addPictureHandler = () => {
  const url = getInputContents();

  // use your actions functions to add a new picture
  // bonus, trim eventual whitespaces and validate content
  // checks validity of each url and trim withespaces
  const urls = verifyUrls(url);

  if (urls !== null) {
    add(urls);  
  }

  // refresh all grid with new elements
  refreshGrid()

  clearInputContents();
};

const refreshGrid = () => {
  // use your functions to get all the elements
  const items = list();

  const fragment = document.createDocumentFragment();

  items.forEach((i, index) => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    // set the URL from your Picture model.
    imgElement.src = i;

    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );

    // use your functions to delete the selected element
    deleteButtonElement.addEventListener("click", () => {
      remove(index);
      refreshGrid();      
    });
    
    // set buttons to work with modal
    const updateButtonElement = clone.querySelector(
      ".picture-item-update-button"
    );

    const modal = clone.querySelector(".picture-modal-update");

    // fonctions to update
    updateButtonElement.addEventListener("click", () => {
      modal.style.display = "block";
    });

    const closeButtonModal = clone.querySelector(
      ".picture-modal-update-close"
    );

    closeButtonModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    const saveButtonModal = clone.querySelector(
      ".picture-modal-update-save"
    );

    const input = clone.querySelector(
      ".picture-modal-update-url"
    );

    saveButtonModal.addEventListener("click", () => {      
      const urls = verifyUrls(input.value);
      if (urls !== null) {
        update(urls, index);
        refreshGrid();
      }
    });

    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());
