/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string; // Formerly genre
  image: string;
  tag: string; // Formerly day
  description: string;
  details: string[]; // List of items (Meta Ads, Google Ads, etc)
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
  action?: {
    label: string;
    url: string;
  };
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact',
}