import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent implements OnInit {

  inputElement: HTMLInputElement;

  constructor(private http: HttpClient) {
    this.inputElement = document.querySelector("input") as HTMLInputElement;
  }

  ngOnInit(): void {
    this.inputElement = document.querySelector("input") as HTMLInputElement;
  }

  suggestions: string[] = [];

  changeInput(event: Event) {
    if (!this.inputElement.value) {
      this.suggestions = [];
      return;
    }

    let lowerValue = this.inputElement.value.toLowerCase();
    console.log(lowerValue);

    this.http.get<any>("/assets/data.json").subscribe((data: string[]) => {
      const MAX_SUGGESTION_SHOW_LENGTH = 42;

      this.suggestions = data
        .filter(e => e.toLowerCase().startsWith(lowerValue))
        .map(e => e.length > MAX_SUGGESTION_SHOW_LENGTH ? e.substring(0, MAX_SUGGESTION_SHOW_LENGTH - 2) + "..." : e)
        .sort((x: string, y: string) => x.localeCompare(y))
    });  
    console.log(this.suggestions);  
  }

  completeSuggestion(event: Event) {
    this.inputElement.value = (event.target as HTMLElement).innerText;

    this.suggestions = [];
  }

  search() {
    let url = `https://www.google.com/search?q=${this.inputElement.value}`;
    window.open(url);
  }
}
