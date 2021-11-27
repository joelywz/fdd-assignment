class Shops {
  constructor(shops = []) {
    this.shops = shops;
  }

  getShop(name) {
    for (let shop of this.shops) {
      if (shop.name == name) return shop;
    }
  }

  getItem(id) {
    for (let shop of this.shops) {
      for (let catalog of shop.catalogs) {
        for (let item of catalog.items) {
          if (item.id == id) {
            return item;
          }
        }
      }
    }
  }
}

class Shop {
  constructor(name, catalogs = []) {
    this.name = name;
    this.catalogs = catalogs;
    this.shop = null;

    for (let catalog of catalogs) {
      catalog = this;
    }
  }
}

class Catalog {
  constructor(name, items = []) {
    this.name = name;
    this.items = items;

    for (let item of items) {
      item.catalog = this;
    }
  }
}

class Item {
  constructor(id, name, price, imageSrc, description = '', select = null) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageSrc = imageSrc;
    this.description = description;
    this.select = select;
    this.catalog = null;
  }
}

class Select {
  constructor(name, options = []) {
    this.name = name;
    this.options = options;
  }
}

// Shop Data
const shops = new Shops([
  new Shop('Merchandise', [
    new Catalog('Clothing', [
      new Item(
        '1001',
        'White Tee 1',
        50,
        'assets/images/shop/clothing/tshirt-design-1.jpg',
        'A simple white T-shirt with logo. Made with quality materials.',
        new Select('Size', ['Large', 'Medium', 'Small'])
      ),
      new Item(
        '1002',
        'White Tee 2',
        50,
        'assets/images/shop/clothing/tshirt-design-2.jpg',
        'A white T-shirt with black curvatures. Made with quality materials.',
        new Select('Size', ['Large', 'Medium', 'Small'])
      ),
      new Item(
        '1003',
        'Black Tee 1',
        50,
        'assets/images/shop/clothing/tshirt-design-3.jpg',
        'A simple black T-shirt with logo. Made with quality materials.',
        new Select('Size', ['Large', 'Medium', 'Small'])
      ),
      new Item(
        '1004',
        'Black Tee 2',
        50,
        'assets/images/shop/clothing/tshirt-design-4.jpg',
        'A simple black T-shirt with logo. Made with quality materials.',
        new Select('Size', ['Large', 'Medium', 'Small'])
      ),
    ]),
    new Catalog('Keychains', [
      new Item(
        2001,
        'Keychain 1',
        30,
        'assets/images/shop/keychain/keychain-design-1.jpg',
        'A metal keychain with the logo printed on it.'
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
  new Shop('Gear', [
    new Catalog('Protective', [
      new Item(
        '4001',
        'Sparring Gloves',
        50,
        'assets/images/shop/protective/gloves-1.jpg',
        'Gloves for sparring',
        new Select('Color', ['Black', 'Blue', 'Red'])
      ),
      new Item(
        '4002',
        'Head Guard',
        80,
        'assets/images/shop/protective/head-guard.jpg',
        'Protective head guard for sparring.',
        new Select('Color', ['Black', 'Blue', 'Red'])
      ),
      new Item(
        '4003',
        'Chest Guard',
        80,
        'assets/images/shop/protective/chest-guard.jpg',
        'Protective chest guard for sparring.'
      ),
      new Item(
        '4004',
        'Shin Guard',
        40,
        'assets/images/shop/protective/shin-guard.jpg',
        'Protective shin guard for sparring.'
      ),
      new Item(
        '4005',
        'Groin Guard',
        50,
        'assets/images/shop/protective/groin-guard.jpg',
        'Protective froin guard for sparring.'
      ),
    ]),
    new Catalog('Training', [
      new Item(
        '5001',
        'Punch Mitts',
        80,
        'assets/images/shop/training/punch-mitts.jpg',
        'Punch mitts perfect for training'
      ),
      new Item(
        '5001',
        'Kick Pad',
        80,
        'assets/images/shop/training/kick-pad.jpg',
        'Kick pads perfect for training'
      ),
    ]),
  ]),
  new Shop('Uniform', [
    new Catalog('Dobok', [
      new Item(
        '6001',
        'Adult Dobok',
        100,
        'assets/images/shop/dobok/dobok-1.jpg',
        '',
        new Select('Size', [
          '4 (170cm)',
          '5 (180cm)',
          '6 (190cm)',
          '7 (200cm)',
          '8 (210cm)',
        ])
      ),
      new Item(
        '6002',
        'Kids/Teen Dobok',
        50,
        'assets/images/shop/dobok/dobok-1.jpg',
        '',
        new Select('Size', [
          '0000 (100cm)',
          '000 (110cm)',
          '00 (120cm)',
          '0  (130cm)',
          '1 (140cm)',
          '2 (150cm)',
          '3 (160cm)',
        ])
      ),
    ]),
  ]),
]);

// Custom element
class ShopListing extends HTMLElement {
  constructor() {
    super();
    // Get the type of shop
    this.shopTitle = this.attributes.getNamedItem('shop').value;

    // Add the template
    this.innerHTML = `
      <section id="shop-listing" class="shop-listing">
        <h1 class="title">${this.shopTitle}</h1>
      </section>
    `;
    this.shopListingEl = document.getElementById('shop-listing');
    const shop = shops.getShop(this.shopTitle);
    this.createShop(shop);
  }

  createItemElement(item) {
    const itemEl = document.createElement('a');
    itemEl.setAttribute('href', `checkout.html?id=${item.id}`);
    itemEl.classList.add('shop-item');
    itemEl.innerHTML = `
      <div class="shop-image-container">
        <img src="${item.imageSrc}"></img>
      </div>
      <div class="content">
        <h3>${item.name}</h3>
        <p class="price">RM ${item.price}</p>
      </div>
    `;
    return itemEl;
  }

  createCatalog(catalog) {
    // Name of catalog
    const heading = document.createElement('h2');
    heading.innerText = catalog.name;
    this.shopListingEl.appendChild(heading);

    // Grid
    const shopGrid = document.createElement('div');
    shopGrid.classList.add('shop-grid');
    this.shopListingEl.appendChild(shopGrid);

    // Add Item
    for (let item of catalog.items) {
      const itemElement = this.createItemElement(item);
      shopGrid.appendChild(itemElement);
    }
  }

  createShop(shop) {
    for (let catalog of shop.catalogs) {
      this.createCatalog(catalog);
    }
  }
}

customElements.define('shop-template', ShopListing);
