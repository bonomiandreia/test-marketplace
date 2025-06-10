import { defineEventHandler, getQuery, createError, H3Event } from 'h3';
import jsonData from '~/assets/data/data.json';
import type { Products, Product } from '~/types/products.ts';

export default defineEventHandler(
  async (event: H3Event): Promise<Products | Product> => {
    try {
      const query = getQuery(event);
      const { id } = query;

      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (!jsonData) {
          console.warn('Product data source is empty or invalid.');
          return []; 
      }

      const allProducts = jsonData as Products;
      
      if (id) {
        const productId = parseInt(id as string, 10);

        const product = allProducts.find(p => p.id === productId);

        if (!product) {
          throw createError({
            statusCode: 404,
            statusMessage: `Product with ID '${id}' not found.`,
          });
        }
        return product;
      }

      return allProducts;
      

    } catch (error) {
      console.error('Error in products API handler:', error);
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error: Could not retrieve products data.',
      });
    }
  }
);