// const express = require('express');
// const request = require('request');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// const accessToken = 'EAALxpuIs9J4BAAhZBDTE2XfF56bTALeVSD6DCAvWpArL5YtLMcZAAZAbiiTOLdiI3yI7HJNanl3u8w66Oxz3B1jMUJqDBkPH4gpodafg0mP90CClkHt3H1YeeNZArH4wXaHK3VhDZALMM73c0tbrneXW0vl9Yk08tvFoDpagGxAZDZD';
// const requestOptions = {
//   baseUrl: 'https://graph.facebook.com/v15.0/',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${accessToken}`
//   }
// };

// app.use(bodyParser.json());

// app.delete('/catalog/:catalogId/group/:groupId', (req, res) => {
//   const catalogId = req.params.catalogId;
//   const groupId = req.params.groupId;

//   console.log(catalogId);
//   const url = `${catalogId}/event_sets`;

//   request.get(url, requestOptions, (error, response, body) => {
//     if (error) {
//       res.status(500).send('Error getting event set');
//     } else {
//         console.log(body);
//       const eventSets = JSON.parse(body).data;
//       console.log(eventSets);
//       const eventSet = eventSets.find((es) => es.name === 'Default Event Set');
//       const eventSetId = eventSet.id;

//       const deleteUrl = `${eventSetId}/events`;

//       request.delete(deleteUrl, { ...requestOptions, body: JSON.stringify({ data: [{ id: groupId }] }) }, (error, response, body) => {
//         if (error) {
//           res.status(500).send('Error deleting group from catalog');
//         } else {
//           res.send('Group deleted from catalog');
//         }
//       });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
// const axios = require('axios');

// const accessToken = 'EAAsaPlfWRgMBAAWjTd6ZC6vEOS1ZBTt34YbW5ArwZB3uXWWw8ZCyQch2jluVf7woqvPoX9DeZBzMZBxXVZBznDBtiZCc7DwbA8ob5JftEXOwOn0mozeyz5ZCJwMuGZCHW7ZAc0AtPNjCzuuiYZCORAF37T3ygE9M50DjAuiJpe8uebZCUL4PUg5El4jjMnOKn6hkmzGavFZBowyfFfdHN6t42Yhd3Xvk8ZAZC2yvuUwoB4XX3nFNZCaAWwyboJ2JG';
// const baseUrl = 'https://graph.facebook.com/v15.0';
// const requestOptions = {
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${accessToken}`
//   }
// };

// const deleteProductGroup = async (catalogId, productGroupId) => {
//   const url = `${baseUrl}/${catalogId}/${productGroupId}`;
  
//   try {
//     await axios.delete(url, requestOptions);
//     console.log(`Product group with ID ${productGroupId} deleted`);
//   } catch (error) {
//     console.error(`Error deleting product group ${productGroupId}:`, error.response.data);
//   }
// };

// const deleteProductGroupsByRetailerId = async (catalogId, retailerId) => {
//   const url = `${baseUrl}/${catalogId}/product_groups?retailer_id=${retailerId}`;
  
//   try {
//     const response = await axios.get(url, requestOptions);
//     const productGroups = response.data.data;
    
//     console.log(`Found ${productGroups.length} product groups for retailer ID ${retailerId}`);
    
//     for (const productGroup of productGroups) {
//       await deleteProductGroup(catalogId, productGroup.id);
//     }
    
//     console.log(`All product groups for retailer ID ${retailerId} deleted`);
//   } catch (error) {
//     console.error(`Error getting product groups for retailer ID ${retailerId}:`, error.response.data);
//   }
// };

// const catalogId = '499063421806288';
// const retailerId = 'W02081';

// deleteProductGroupsByRetailerId(catalogId, retailerId);



// const express = require('express');
// const { FacebookAdsApi, ProductCatalog, ProductSet, ProductItem } = require('facebook-nodejs-business-sdk');

// const app = express();
// app.use(express.json());

// // Set up Facebook Ads API
// const accessToken = 'EAAsaPlfWRgMBAAWjTd6ZC6vEOS1ZBTt34YbW5ArwZB3uXWWw8ZCyQch2jluVf7woqvPoX9DeZBzMZBxXVZBznDBtiZCc7DwbA8ob5JftEXOwOn0mozeyz5ZCJwMuGZCHW7ZAc0AtPNjCzuuiYZCORAF37T3ygE9M50DjAuiJpe8uebZCUL4PUg5El4jjMnOKn6hkmzGavFZBowyfFfdHN6t42Yhd3Xvk8ZAZC2yvuUwoB4XX3nFNZCaAWwyboJ2JG';
// const catalogId = '499063421806288';
// FacebookAdsApi.init(accessToken);


// // Create a new product set in an existing catalog
// app.post('/product-set', async (req, res) => {
//     try {
//       const { name } = req.body;
//       const productSet = new ProductSet(null, catalogId);
//       productSet.name = name;
//       const createdProductSet = await productSet.create();
//       res.status(201).json(createdProductSet);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Failed to create product set' });
//     }
//   });

// // Add products to an existing product set in the catalog
// app.post('/products', async (req, res) => {
//   try {
//     const { productSetId, products } = req.body;
//     const createdProducts = [];
//     for (const productData of products) {
//       const product = new ProductItem(null, productSetId);
//       product.name = productData.name;
//       product.description = productData.description;
//       product.productUrl = productData.productUrl;
//       product.imageUrl = productData.imageUrl;
//       product.price = productData.price;
//       product.currency = productData.currency;
//       product.brand = productData.brand;
//       product.category = productData.category;
//       product.productType = productData.productType;
//       product.availability = productData.availability;
//       product.condition = productData.condition;
//       const createdProduct = await product.create();
//       createdProducts.push(createdProduct);
//     }
//     res.status(201).json(createdProducts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to add products to product set' });
//   }
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


// const express = require('express');
// const { FacebookAdsApi, ProductCatalog, ProductSet } = require('facebook-nodejs-business-sdk');

// const app = express();
// app.use(express.json())

// // Set up Facebook Ads API
// const accessToken = 'EAAsaPlfWRgMBAAWjTd6ZC6vEOS1ZBTt34YbW5ArwZB3uXWWw8ZCyQch2jluVf7woqvPoX9DeZBzMZBxXVZBznDBtiZCc7DwbA8ob5JftEXOwOn0mozeyz5ZCJwMuGZCHW7ZAc0AtPNjCzuuiYZCORAF37T3ygE9M50DjAuiJpe8uebZCUL4PUg5El4jjMnOKn6hkmzGavFZBowyfFfdHN6t42Yhd3Xvk8ZAZC2yvuUwoB4XX3nFNZCaAWwyboJ2JG';
// const catalogId = '499063421806288';
// FacebookAdsApi.init(accessToken);

// // Create a new product set in an existing catalog
// app.post('/product-set', async (req, res) => {
//   try {
//     const { name } = req.body;
//     const productSet = new ProductSet(null, catalogId);
//     productSet.name = name;
//     const createdProductSet = await productSet.save();
//     res.status(201).json(createdProductSet);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to create product set' });
//   }
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });




// const axios = require('axios');
// const express = require('express');
// const app = express();
// app.use(express.json());


// const accessToken = 'EAAsaPlfWRgMBAGMR8w6oaFozM6wMi7H2cUf8hCRfuiKZChbvOHJ1tJXvPWRlRCV2bv4Omzo5XNE8u7dgFrDBQDsaCByE6FtLx56sZAhksZASaHaZA80qWWu99yw4AMmmVEi48xWpKpGYvL2RPlZB0HRdSzHiaE5Uqh8CASQ3vmBut7xfwOO6z2wbHHGPl13g7RlOdPISMpoEQ6liD7RP6tgL232QFnrYmZCPhA736jFgr2nNcn6gIj';
// const catalogId = '499063421806288';

// async function createProductSet(name) {
//     console.log({name: name});
//     const url = `https://graph.facebook.com/v15.0/${catalogId}/product_sets`;
//     const data = {
//       name,
//       access_token: accessToken
//     };
  
//     try {
//       const response = await axios.post(url, data);
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       console.error(error.data); // log the error message
//       throw new Error('Failed to create product set');
//     }
//   }  

// app.post('/product-set', async (req, res) => {
//     try {
//       const { name } = req.body;
//       const createdProductSet = await createProductSet(name);
//       res.status(201).json(createdProductSet);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Failed to create product set' });
//     }
//   });

//   async function getProducts() {
//     const url = `https://graph.facebook.com/v15.0/${catalogId}/products`;
//     const params = {
//       access_token: accessToken,
//       fields: 'id, name, retailer_id',
//       limit: 10
//     };
  
//     try {
//       const response = await axios.get(url, { params });
//       return response.data.data;
//     } catch (error) {
//       console.error(error);
//       throw new Error('Failed to get products');
//     }
//   }
  
//   // Example usage
//   getProducts().then(products => console.log(products));

//   // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


// const axios = require('axios');

// const accessToken = 'EAAsaPlfWRgMBAGMR8w6oaFozM6wMi7H2cUf8hCRfuiKZChbvOHJ1tJXvPWRlRCV2bv4Omzo5XNE8u7dgFrDBQDsaCByE6FtLx56sZAhksZASaHaZA80qWWu99yw4AMmmVEi48xWpKpGYvL2RPlZB0HRdSzHiaE5Uqh8CASQ3vmBut7xfwOO6z2wbHHGPl13g7RlOdPISMpoEQ6liD7RP6tgL232QFnrYmZCPhA736jFgr2nNcn6gIj';
// const catalogId = '499063421806288';

// async function deleteProductSet(retailerId) {
//   const url = `https://graph.facebook.com/v15.0/${catalogId}/batch`;

//   const params = {
//     retailer_id: retailerId,
//     access_token: accessToken
//   };

//   try {
//     const response = await axios.delete(url, { params });
//     return response.data;
//   } catch (error) {
//     console.error(error['data']);
//     throw new Error('Failed to delete product set');
//   }
// }

// // Example usage: delete product set with retailer_id 'ABC123'
// deleteProductSet('W02081_G06_63')
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


const axios = require('axios');

const accessToken = 'EAAsaPlfWRgMBAHPaC8EFi99nLeHCugj6TKn0DL2TsxfE7s6Tfwa0XoZB2yV7O0S2kkJEpZAlLBIH5MseL7y7g4Oi0NnaracmvYYBVqRJZB3hmMSriRy5ZANtHiajjXHfWKRJNnBlfokuMzIWclNZBFLoUZC0uRT3ukENXr27zp0681uPxZBz1qtHuc4TXYskCYo1wu9GMkpRaSHaD07x3JeV5rFxdScxmUyC4WWEeFkrnzGJEYWm2Ob';

const createProduct = async () => {
    const url = `https://graph.facebook.com/v15.0/499063421806288/products`
  try {
    const response = await axios.post(url,
      {
        name: 'Sample Product',
        description: 'This is a sample product description.',
        price: '10.99',
        currency: 'USD',
        brand: 'Sample Brand',
        image_url: 'https://example.com/sample-product.jpg',
        url: 'https://example.com/sample-product',
        retailer_id: 'sample-retailer-id',
        category: 'APPAREL',
        visibility: 'published',
        availability: { availability: 'in stock' }
      },
      {
        params: {
          'Content-Type': 'application/json',
          access_token: accessToken
        }
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

createProduct();