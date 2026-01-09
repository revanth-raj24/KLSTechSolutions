/**
 * Contact page service
 * Endpoint: GET /api/contact/
 * Note: Only GET endpoint is used. POST functionality is not implemented.
 */

import { apiGet } from './apiClient';

export interface ContactData {
  page: string;
  status: string;
  message: string;
}

/**
 * Get contact page data (placeholder GET only)
 * @returns Contact page data object
 */
export async function getContactData(): Promise<ContactData> {
  return apiGet<ContactData>('/api/contact/');
}
