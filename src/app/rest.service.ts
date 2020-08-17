import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }

  apikey = '3SUEFHSEAZ8O';

  public getGif() {
    return this.httpClient.get(`https://api.tenor.com/v1/trending?<parameters>`);
  }

  getGifBySearch(searchTerm: string) {
    const limit = 8;

    return this.httpClient.get('https://api.tenor.com/v1/search?q=' + searchTerm + '&key=' +
      this.apikey + '&limit=' + limit);
  }

  autoComplete(searchTerm: string) {
    const limit = 5;

    return this.httpClient.get('https://api.tenor.com/v1/autocomplete?key=' + this.apikey + '&q=' + searchTerm
      + '&limit=' + limit);
  }

}
