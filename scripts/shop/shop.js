class Shops {
  constructor(shops = []) {
    this.shops = shops;
  }

  getShop(name) {
    for (let shop of this.shops) {
      if (shop.name == name) return shop;
    }
  }
}

class Shop {
  constructor(name, catalogs = []) {
    this.name = name;
    this.catalogs = catalogs;
  }
}

class Catalog {
  constructor(name, items = []) {
    this.name = name;
    this.items = items;
  }
}

class Item {
  constructor(id, name, price, imageSrc) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageSrc = imageSrc;
  }
}

// Merchandise
const shops = new Shops([
  new Shop('Merchandise', [
    new Catalog('Clothing', [
      new Item(
        '1001',
        'Design 1',
        50,
        'assets/images/shop/clothing/tshirt-design-1.jpg'
      ),
      new Item(
        '1002',
        'Design 2',
        50,
        'assets/images/shop/clothing/tshirt-design-2.jpg'
      ),
      new Item(
        '1003',
        'Design 3',
        50,
        'assets/images/shop/clothing/tshirt-design-3.jpg'
      ),
      new Item(
        '1004',
        'Design 4',
        50,
        'assets/images/shop/clothing/tshirt-design-4.jpg'
      ),
    ]),
    new Catalog('Keychains', [
      new Item(
        2001,
        'Keychain 1',
        30,
        'assets/images/shop/keychain/keychain-design-1.jpg'
      ),
      new Item(
        2002,
        'Keychain 2',
        30,
        'assets/images/shop/keychain/keychain-design-2.jpg'
      ),
    ]),
    new Catalog('Bottles', [
      new Item(
        '3001',
        'Gray Bottle',
        30,
        'assets/images/shop/bottle/bottle-design-1.jpg'
      ),
      new Item(
        '3002',
        'White Bottle',
        30,
        'assets/images/shop/bottle/bottle-design-1.jpg'
      ),
      new Item(
        '3003',
        'Blue Bottle',
        30,
        'assets/images/shop/bottle/bottle-design-3.jpg'
      ),
    ]),
  ]),
  new Shop('Gear', []),
]);

class ShopListing extends HTMLElement {
  constructor() {
    super();
    this.shopTitle = this.attributes.getNamedItem('shop').value;
    this.innerHTML = `
      <section id="shop-listing" class="shop-listing">
        <h1 class="title">${this.shopTitle}</h1>
      </section>
    `;
    this.shopListingEl = document.getElementById('shop-listing');
    const shop = shops.getShop(this.shopTitle);
    this.createShop(shop);
  }

  createItemElement(name, price, imageSrc) {
    const itemEl = document.createElement('div');
    itemEl.classList.add('shop-item');
    itemEl.innerHTML = `
    <div class="shop-image-container">
      <img src="${imageSrc}"></img>
    </div>
    <div class="content">
      <h3>${name}</h3>
      <p class="price">${price}</p>
    </div>
  `;

    return itemEl;
  }
  /**
   *
   * @param {Catalog} catalog
   */
  createCatalog(catalog) {
    // Name
    const heading = document.createElement('h2');
    heading.innerText = catalog.name;
    this.shopListingEl.appendChild(heading);

    // Grid
    const shopGrid = document.createElement('div');
    shopGrid.classList.add('shop-grid');
    this.shopListingEl.appendChild(shopGrid);

    // Add Item
    for (let item of catalog.items) {
      const itemElement = this.createItemElement(
        item.name,
        `RM ${item.price}`,
        item.imageSrc
      );
      shopGrid.appendChild(itemElement);
    }
  }

  /**
   *
   * @param {Shop} shop
   */
  createShop(shop) {
    for (let catalog of shop.catalogs) {
      this.createCatalog(catalog);
    }
  }
}

customElements.define('shop-template', ShopListing);
