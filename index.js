/**
 * External dependencies
 */
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const axios = require("axios").default;

/**
 * The default fixtures data is shaped according to WC REST API
 *
 * @see {@link https://woocommerce.github.io/woocommerce-rest-api-docs|WooCommerce REST API}
 */

/**
 * Product attributes fixture data, using the create attribute and batch create terms.
 *
 * @see {@link https://woocommerce.github.io/woocommerce-rest-api-docs/#create-a-product-attribute|Create a product attribute}
 * @see {@link https://woocommerce.github.io/woocommerce-rest-api-docs/#batch-update-attribute-terms|Batch update attribute terms}
 */
const Attributes = () => [
  {
    attribute: { name: "Capacity" },
    terms: [
      {
        name: "32gb",
      },
      {
        name: "64gb",
      },
      {
        name: "128gb",
      },
    ],
  },
  {
    attribute: { name: "Shade" },
    terms: [
      {
        name: "Red",
      },
      {
        name: "Blue",
      },
      {
        name: "Black",
      },
    ],
  },
];

/**
 * Coupons fixture data, using the create batch endpoint
 *
 * @see {@link https://woocommerce.github.io/woocommerce-rest-api-docs/#batch-update-coupons|Batch update coupons}
 */
const Coupons = () => [
  {
    code: "coupon",
    discount_type: "fixed_cart",
    amount: "5",
  },
  {
    code: "oldcoupon",
    discount_type: "fixed_cart",
    amount: "5",
    date_expires: "2020-01-01",
  },
  {
    code: "below100",
    discount_type: "percent",
    amount: "20",
    maximum_amount: "100.00",
  },
  {
    code: "above50",
    discount_type: "percent",
    amount: "20",
    minimum_amount: "50.00",
  },
  {
    code: "a12s",
    discount_type: "percent",
    amount: "100",
    individual_use: true,
    email_restrictions: "*@automattic.com%2C *@a8c.com",
  },
  {
    code: "freeshipping",
    discount_type: "percent",
    amount: "0",
    free_shipping: true,
  },
];

/**
 * Reviews fixture data, using the create batch endpoint
 *
 * @see {@link https://woocommerce.github.io/woocommerce-rest-api-docs/#batch-update-product-reviews|Batch update product reviews}
 * @param {number} id Product ID to add reviews to.
 */
const ReviewsInProduct = (id) => [
  {
    product_id: id,
    review: "Looks fine",
    reviewer: "John Doe",
    reviewer_email: "john.doe@example.com",
    rating: 4,
  },
  {
    product_id: id,
    review: "I love this album",
    reviewer: "John Doe",
    reviewer_email: "john.doe@example.com",
    rating: 5,
  },
  {
    product_id: id,
    review: "a fine review",
    reviewer: "John Doe' niece",
    reviewer_email: "john.doe@example.com",
    rating: 5,
  },
];

/**
 * Product category fixture data, using the create batch endpoint
 *
 * @see {@link https://woocommerce.github.io/woocommerce-rest-api-docs/#batch-update-product-categories|Batch update product categories}
 */
const Categories = () => [
  {
    name: "Music",
  },
];

/**
 * Product tags fixture data, using the create batch endpoint
 *
 * @see {@link https://woocommerce.github.io/woocommerce-rest-api-docs/#batch-update-product-tags|Batch update product tags}
 */
const Tags = () => [
  {
    name: "Newest",
  },
];

/**
 * Product fixture data, using the create batch endpoint
 *
 * @see {@link https://woocommerce.github.io/woocommerce-rest-api-docs/#batch-update-products|Batch update products}
 */
const Products = () => [
  {
    name: "Woo Single #1",
    type: "simple",
    regular_price: "21.99",
    virtual: true,
    downloadable: true,
    downloads: [
      {
        name: "Woo Single",
        file: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/cd_4_angle.jpg",
      },
    ],
    images: [
      {
        src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/cd_4_angle.jpg",
      },
    ],
    categories: ["Music"],
  },
  {
    name: "128GB USB Stick",
    type: "simple",
    regular_price: "2.99",
    virtual: false,
    downloadable: false,
    images: [
      {
        src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/cd_4_angle.jpg",
      },
    ],
    attributes: [
      {
        name: "Capacity",
        position: 0,
        visible: true,
        options: ["128gb"],
      },
    ],
    tags: ["Newest"],
  },
  {
    name: "32GB USB Stick",
    type: "simple",
    regular_price: "1.99",
    virtual: false,
    downloadable: false,
    images: [
      {
        src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/cd_4_angle.jpg",
      },
    ],
    attributes: [
      {
        name: "Capacity",
        position: 0,
        visible: true,
        options: ["32gb"],
      },
    ],
  },
  {
    name: "Woo Single #2",
    type: "simple",
    regular_price: "25.99",
    virtual: true,
    downloadable: true,
    downloads: [
      {
        name: "Woo Single 2",
        file: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/cd_4_angle.jpg",
      },
    ],
    images: [
      {
        src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/cd_4_angle.jpg",
      },
    ],
    categories: ["Music"],
    tags: ["Newest"],
  },
];

/**
 * Settings fixture data, using the update batch endpoint.
 *
 * @see {@link https://woocommerce.github.io/woocommerce-rest-api-docs/#batch-update-setting-options|Batch update setting options}
 */
const Settings = () => [
  {
    id: "woocommerce_store_address",
    value: "60 29th Street #343",
  },
  {
    id: "woocommerce_store_city",
    value: "San Francisco",
  },
  {
    id: "woocommerce_store_country",
    value: "US:CA",
  },
  {
    id: "woocommerce_store_postcode",
    value: "94110",
  },
  {
    id: "woocommerce_allowed_countries",
    value: "specific",
  },
  {
    id: "woocommerce_specific_allowed_countries",
    value: ["DZ", "CA", "NZ", "ES", "GB", "US"],
  },
  {
    id: "woocommerce_ship_to_countries",
    value: "specific",
  },
  {
    id: "woocommerce_specific_ship_to_countries",
    value: ["DZ", "CA", "NZ", "ES", "GB", "US"],
  },
  {
    id: "woocommerce_enable_coupons",
    value: "yes",
  },
  {
    id: "woocommerce_calc_taxes",
    value: "yes",
  },
  {
    id: "woocommerce_currency",
    value: "USD",
  },
];

/**
 * Page settings fixture data, using the update batch endpoint.
 *
 * @param {Array} pages
 *
 * @see {@link https://woocommerce.github.io/woocommerce-rest-api-docs/#batch-update-setting-options|Batch update setting options}
 */
const PageSettings = (pages = []) => {
  const cartPage = pages.find((page) => page.slug.includes("cart-block"));
  const checkoutPage = pages.find((page) =>
    page.slug.includes("checkout-block")
  );

  return [
    {
      id: "woocommerce_cart_page_id",
      value: cartPage?.id.toString() || "",
    },
    {
      id: "woocommerce_checkout_page_id",
      value: checkoutPage?.id.toString() || "",
    },
  ];
};

/**
 * Shipping Zones fixture data, using the shipping zone endpoint, shipping
 * location, and shipping method endpoint.
 *
 * @see {@link https://woocommerce.github.io/woocommerce-rest-api-docs/#create-a-shipping-zone|Create a shipping zone}
 * @see {@link https://woocommerce.github.io/woocommerce-rest-api-docs/#update-a-locations-of-a-shipping-zone|Update a locations of a shipping zone}
 * @see {@link https://woocommerce.github.io/woocommerce-rest-api-docs/#include-a-shipping-method-to-a-shipping-zone|Include a shipping method to a shipping zone}
 */
const Shipping = () => [
  {
    name: "UK",
    locations: [
      {
        code: "UK",
      },
    ],
    methods: [
      {
        method_id: "flat_rate",
        settings: {
          title: "Normal Shipping",
          cost: "20.00",
        },
      },
      {
        method_id: "free_shipping",
        settings: {
          title: "Free Shipping",
          cost: "00.00",
          requires: "coupon",
        },
      },
    ],
  },
  {
    name: "US",
    locations: [
      {
        code: "US",
      },
    ],
    methods: [
      {
        method_id: "flat_rate",
        settings: {
          title: "Normal Shipping",
          cost: "20.00",
        },
      },
      {
        method_id: "free_shipping",
        settings: {
          title: "Free Shipping",
          cost: "00.00",
        },
      },
    ],
  },
];

/**
 * Taxes rates fixture data, using the create batch endpoint.
 *
 * @see {@link https://woocommerce.github.io/woocommerce-rest-api-docs/#batch-update-tax-rates|Batch update tax rates}
 */
const Taxes = () => [
  {
    country: "US",
    rate: "5.0000",
    name: "State Tax",
    shipping: false,
    priority: 1,
  },
  {
    country: "US",
    rate: "10.000",
    name: "Sale Tax",
    shipping: false,
    priority: 2,
  },
  {
    country: "UK",
    rate: "20.000",
    name: "VAT",
    shipping: false,
  },
];

module.exports = {
  Attributes,
  Coupons,
  ReviewsInProduct,
  Categories,
  Products,
  Settings,
  PageSettings,
  Shipping,
  Tags,
  Taxes,
};
1;

/**
 * ConsumerKey and ConsumerSecret are not used, we use basic auth, but
 * not providing them will throw an error.
 */
const WooCommerce = new WooCommerceRestApi({
  url: "http://localhost:8889",
  consumerKey: "consumer_key", // Your consumer key
  consumerSecret: "consumer_secret", // Your consumer secret
  version: "wc/v3",
  axiosConfig: {
    auth: {
      username: "admin",
      password: "password",
    },
  },
});

/**
 * Create taxes.
 *
 * @param {Object[]} fixture An array of objects describing our data, defaults
 *                           to our fixture.
 * @return {Promise} a promise that resolves to an array of newly created taxes,
 * or rejects if the request failed.
 */
const createTaxes = (fixture = Taxes()) =>
  WooCommerce.post("taxes/batch", {
    create: fixture,
  })
    .then((response) => {
      response.data.create.map((taxes) => taxes.id);
    })
    .catch(console.log);

/**
 * Create Coupons.
 *
 * @param {Object[]} fixture An array of objects describing our data, defaults
 *                           to our fixture.
 * @return {Promise} a promise that resolves to an array of newly created coupons,
 * or rejects if the request failed.
 */
const createCoupons = (fixture = Coupons()) =>
  WooCommerce.post("coupons/batch", {
    create: fixture,
  }).then((response) => response.data.create.map((coupon) => coupon.id));

/**
 * Create Product Categories.
 *
 * @param {Object[]} fixture An array of objects describing our data, defaults
 *                           to our fixture.
 * @return {Promise} a promise that resolves to an array of newly created categories,
 * or rejects if the request failed.
 */
const createCategories = (fixture = Categories()) =>
  WooCommerce.post("products/categories/batch", {
    create: fixture,
  }).then((response) => response.data.create);

/**
 * Create Product Tags.
 *
 * @param {Object[]} fixture An array of objects describing our data, defaults
 *                           to our fixture.
 * @return {Promise} a promise that resolves to an array of newly created tags,
 * or rejects if the request failed.
 */
const createTags = (fixture = Tags()) =>
  WooCommerce.post("products/tags/batch", {
    create: fixture,
  }).then((response) => response.data.create);

/**
 * Delete Product Tags.
 *
 * @param {Object[]} tags an array of tags to delete.
 *
 * @return {Promise} return a promise that resolves to the deleted data or
 * reject if the request failed.
 */

/**
 * Create Products.
 *
 * currently this only creates a single product for the sake of reviews.
 *
 * @todo  add more products to e2e fixtures data.
 *
 * @param {Array}    categories Array of category objects so we can replace names with ids in the request.
 * @param {Array}    tags       Array of category objects so we can replace names with ids in the request.
 * @param {Array}    attributes Array of attribute objects so we can replace names with ids in the request.
 * @param {Object[]} fixture    An array of objects describing our data, defaults
 *                              to our fixture.
 * @return {Promise} a promise that resolves to an array of newly created products,
 * or rejects if the request failed.
 */
const createProducts = (categories, tags, attributes, fixture = Products()) => {
  const hydratedFixture = fixture.map((product) => {
    if (categories && product.categories) {
      product.categories = product.categories.map((categoryName) =>
        categories.find((category) => category.name === categoryName)
      );
    }
    if (tags && product.tags) {
      product.tags = product.tags.map((tagName) =>
        tags.find((tag) => tag.name === tagName)
      );
    }
    if (attributes && product.attributes) {
      product.attributes = product.attributes.map((productAttribute) => {
        return {
          ...attributes.find(
            (attribute) => attribute.name === productAttribute.name
          ),
          ...productAttribute,
        };
      });
    }
    return product;
  });
  return WooCommerce.post("products/batch", {
    create: hydratedFixture,
  }).then((products) => {
    return products.data.create.map((product) => product.id);
  });
};

/**
 * Create Reviews.
 *
 * @param {number}   id      product id to assign reviews to.
 * @param {Object[]} fixture An array of objects describing our reviews, defaults
 *                           to our fixture.
 * @return {Promise} a promise that resolves to an server response data, or
 * rejects if the request failed.
 */
const createReviews = (id, fixture = ReviewsInProduct(id)) =>
  WooCommerce.post("products/reviews/batch", {
    create: fixture,
  });

/**
 * Enable Cash on delivery payments.
 *
 * This is not called directly but is called within enablePaymentGateways.
 *
 * @return {Promise} a promise that resolves to an server response data, or
 * rejects if the request failed.
 */
const enableCashOnDelivery = () =>
  WooCommerce.post("payment_gateways/cod", {
    description: "Cash on delivery",
    enabled: true,
    settings: { instructions: "Cash on delivery" },
  });

/**
 * Enable Direct bank transfer payments.
 *
 * This is not called directly but is called within enablePaymentGateways.
 *
 * @return {Promise} a promise that resolves to an server response data, or
 * rejects if the request failed.
 */
const enableDirectBankTransfer = () =>
  WooCommerce.post("payment_gateways/bacs", {
    description: "Direct bank transfer",
    enabled: true,
    settings: { instructions: "Direct bank transfer" },
  });

/**
 * Enable Cheque payments.
 *
 * This is not called directly but is called within enablePaymentGateways.
 *
 * @return {Promise} a promise that resolves to an server response data, or
 * rejects if the request failed.
 */
const enableCheque = () =>
  WooCommerce.post("payment_gateways/cheque", {
    description: "Check payments",
    enabled: true,
    settings: { instructions: "Check payments" },
  });

/**
 * Enable payment gateways.
 *
 * It calls other individual payment gateway functions.
 *
 * @return {Promise} a promise that resolves to an array of server response
 * data, or rejects if the request failed.
 */
const enablePaymentGateways = () =>
  Promise.all([
    enableCashOnDelivery(),
    enableDirectBankTransfer(),
    enableCheque(),
  ]);

/**
 * Create shipping zones.
 *
 * Shipping locations need to be assigned to a zone, and shipping methods need
 * to be assigned to a shipping location, this create a shipping zone and
 * location and methods.
 *
 * @param {Object[]} fixture An array of objects describing our data, defaults
 *                           to our fixture.
 * @return {Promise} a promise that resolves to an array of newly created shipping
 * zones IDs, or rejects if the request failed.
 */
const createShippingZones = (fixture = Shipping()) => {
  return Promise.all(
    fixture.map(({ name, locations, methods }) => {
      return WooCommerce.post("shipping/zones", { name })
        .then((response) => {
          return response.data.id;
        })
        .then((zoneId) => {
          const locationsPromise = WooCommerce.put(
            `shipping/zones/${zoneId}/locations`,
            locations
          );

          return [zoneId, locationsPromise];
        })
        .then(([zoneId, locationsPromise]) => {
          const methodPromise = Promise.all(
            methods.map((method) =>
              WooCommerce.post(`shipping/zones/${zoneId}/methods`, method)
            )
          );
          return [zoneId, methodPromise, locationsPromise];
        })
        .then(([zoneId, methodPromise, locationsPromise]) =>
          Promise.all([methodPromise, locationsPromise]).then(() => zoneId)
        );
    })
  );
};

/**
 * Create Products attributes and terms.
 *
 * @param {Object[]} fixture An array of objects describing our data, defaults
 *                           to our fixture.
 * @return {Promise} a promise that resolves to an array of newly created product attributes IDs, or rejects if the request failed.
 */
const createProductAttributes = (fixture = Attributes()) => {
  return Promise.all(
    fixture.map(({ attribute, terms }) => {
      return WooCommerce.post("products/attributes", attribute)
        .then((response) => {
          return response.data.id;
        })
        .then((attributeId) => {
          const termsPromise = WooCommerce.put(
            `products/attributes/${attributeId}/terms/batch`,
            { create: terms }
          );

          return [attributeId, termsPromise];
        })
        .then(([attributeId, termsPromise]) =>
          Promise.all([attributeId, termsPromise]).then(() => ({
            name: attribute.name,
            id: attributeId,
          }))
        )
        .catch(() => {
          // At this point, the attributes probably already exist. Get them and return them instead.
          return WooCommerce.get("products/attributes").then(
            (response) => response.data
          );
        });
    })
  );
};

(async () => {
  const results = await Promise.all([
    createTaxes(),
    createCoupons(),
    createCategories(),
    createTags(),
    createShippingZones(),
    createProductAttributes(),
    enablePaymentGateways(),
  ]).catch(console.log);

  const [taxes, coupons, categories, tags, shippingZones, attributes] = results;
  // Create products after categories.

  const products = await createProducts(categories, tags, attributes);

  /**
   * Create fixture reviews data for each product.
   */
  products.forEach(async (productId) => {
    await createReviews(productId);
  });
})();
