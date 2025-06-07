// server/api/photos.ts
import { defineEventHandler, getQuery, createError, H3Event } from 'h3';

interface PicsumPhoto {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const photosApiHandler = defineEventHandler(
  async (event: H3Event): Promise<PicsumPhoto[]> => {
    const query = getQuery(event);
    const page: string = (query.page?.toString()) || '1';
    const limit: string = (query.limit?.toString()) || '30';

    const picsumApiUrl = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

    try {
      const photos = await $fetch<PicsumPhoto[]>(picsumApiUrl);

      if (!photos || !Array.isArray(photos)) {
        console.error('[Server API] Picsum API did not return a valid array. Response:', photos);
        throw createError({
          statusCode: 502,
          statusMessage: 'Invalid response from Picsum API.',
        });
      }

      console.log(`[Server API] Successfully fetched ${photos.length} photos from Picsum.`);
      return photos;

    } catch (error: any) {
      console.error('[Server API] Error fetching from Picsum API:', error.message);
      if (error.response) {
        console.error('[Server API] Picsum Error Response Status:', error.response.status);
        console.error('[Server API] Picsum Error Response Data:', error.response._data);
      } else {
        console.error('[Server API] Raw error object:', error);
      }

    }
  }
);

export default photosApiHandler;