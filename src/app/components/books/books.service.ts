import { Injectable } from '@angular/core';
import { Books } from './books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  private booklist: Books[] = [
    {
      bookID: 1,
      bookTitle: 'THE TEST!',
      genre: 'Non-Fiction',
      author: 'Super Book',
      image:
        'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1519050004001/07d545f3-c641-44b8-b5b1-3941e7373517/4c3b45df-6dd5-48ef-845a-a4dc36459b57/1280x720/match/image.jpg',
    },

    {
      bookID: 2,
      bookTitle: 'ROAR!',
      genre: 'Non-Fiction',
      author: 'Super Book',
      image:
        'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1519050004001/1a1ba295-35f9-44aa-81d9-2fd078d1ae96/a27fb27b-c6a6-4cae-b610-6eca9f7ea8c2/1280x720/match/image.jpg',
    },
    {
      bookID: 3,
      bookTitle: 'A GIANT ADVENTURE',
      genre: 'Non-Fiction',
      author: 'Super Book',
      image:
        'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1519050004001/c890a90f-879a-4d6a-b2c1-d9986cd95ba7/4efe76e6-04c5-4146-886c-bc6bf1e03cc8/1280x720/match/image.jpg',
    },
    {
      bookID: 4,
      bookTitle: 'LET MY PEOPLE GO',
      genre: 'Non-Fiction',
      author: 'Super Book',
      image:
        'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1519050004001/0064e508-db42-4e8f-a53f-380e851d493f/dd1816a3-44de-4dc9-b153-c58eb803b691/1280x720/match/image.jpg',
    },
    {
      bookID: 5,
      bookTitle: 'MIRACLES OF JESUS',
      genre: 'Non-Fiction',
      author: 'Super Book',
      image:
        'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1519050004001/16bc7e88-46fb-455c-8d29-22753e1c721e/26a70ca6-2426-4e3d-be6a-44eccb29704f/1280x720/match/image.jpg',
    },
    {
      bookID: 6,
      bookTitle: 'THE LAST SUPPER',
      genre: 'Non-Fiction',
      author: 'Super Book',
      image:
        'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1519050004001/0eadff2b-de67-4b37-897e-b672ea31d733/790b42d2-365b-4486-ad96-2c3b8bbebc04/1280x720/match/image.jpg',
    },
    {
      bookID: 7,
      bookTitle: 'JEREMIAH',
      genre: 'Non-Fiction',
      author: 'Super Book',
      image:
        'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1519050004001/45d4a181-7a9e-41ad-8293-f57bc94b7f70/b0a86989-b769-4848-829d-4c9358d15af2/1280x720/match/image.jpg',
    },
    {
      bookID: 8,
      bookTitle: 'PHILIP',
      genre: 'Non-Fiction',
      author: 'Super Book',
      image:
        'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1519050004001/c16a91c3-3c98-4118-a67c-31346b152417/94c66cc7-b18c-4688-874f-4b30b0551864/1280x720/match/image.jpg',
    },
  ];

  getBooks(): Books[] {
    return this.booklist;
  }
}
