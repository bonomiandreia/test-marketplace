import { defineEventHandler, getQuery, createError, H3Event } from 'h3';
import jsonData from '~/assets/data/data.json';
import type { Products } from '~/types/products.ts';

export default defineEventHandler(
  async (event: H3Event): Promise<Products> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      if (!jsonData) {
          console.warn('Product data source is empty or invalid.');
          return []; 
      }
      return jsonData as Products;

    } catch (error) {
      console.error('Error in products API handler:', error);
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error: Could not retrieve products data.',
      });
    }
  }
);