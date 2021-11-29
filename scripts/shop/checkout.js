const urlParams = new URLSearchParams(window.location.search);

// Get Id
const id = urlParams.get('id');

// Get Element
const imgEl = document.getElementById('checkout-image');
const titleEl = document.getElementById('checkout-title');
const categoryEl = document.getElementById('checkout-category');
const priceEl = document.getElementById('checkout-price');
const descEl = document.getElementById('checkout-description');
const optionsEl = document.getElementById('checkout-options');
const selectEl = document.getElementById('checkout-select');
const selectLabelEl = optionsEl.children[0];
optionsEl.hidden = true;

// Get Items
const item = shops.getItem(id);
const itemName = item.name || 'Unknown Item';
const itemCatalogName = item.catalog.name || 'Unknown Catalog';
const itemPrice = item.price || 0;
const itemDesc = item.description;

// Set the text
imgEl.setAttribute('src', item.imageSrc);
titleEl.innerText = itemName;
categoryEl.innerText = itemCatalogName;
priceEl.innerText = 'RM ' + itemPrice;
descEl.innerText = itemDesc;

// Select and options
if (item.select != null) {
  optionsEl.hidden = false;
  selectLabelEl.innerHTML = item.select.name;

  for (let option of item.select.options) {
    const optionEl = document.createElement('option');
    optionEl.innerText = option;
    selectEl.appendChild(optionEl);
  }
}
