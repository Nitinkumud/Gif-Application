import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { GifModel } from './gif.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private restService: RestService) { }

  gifData: GifModel;
  searchTerm: string;
  predictedWords: string;

  ngOnInit() {
    this.getGifOnLanding();
  }

  // fetching trending Gif on page load
  getGifOnLanding(): void {
    this.restService.getGif().subscribe((data) => {
      this.gifData = data['results'];
    }, error => {
      alert(error.message);
    });
  }

  // fetch Gif on search button
  getSearchTerm(): void {
    this.restService.getGifBySearch(this.searchTerm).subscribe((data) => {
      this.gifData = data['results'];
    }, error => {
      alert(error.message);
    });
  }

  // give suggestion when something enter on input box
  getGifBySuggestion(): void {
    this.restService.autoComplete(this.searchTerm).subscribe((data) => {
      this.predictedWords = data['results'];
    }, error => {
      alert(error.message);
    });
  }

  // fetch gif when click on suggested words
  getSelectedWord(selectedWord: string): void {
    this.searchTerm = selectedWord;
    this.getSearchTerm();
  }

}

