import { Component, OnInit } from '@angular/core';
import { DataService, Person } from './data.service.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  people: Person[] = [];
  selectedPeople = [];


  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getPeople()
        .pipe(map(x => x.filter(y => !y.disabled)))
        .subscribe((res) => {
            this.people = res;
            this.selectedPeople = [this.people[0].id, this.people[1].name];
        });
}
  clearAll() {
    this.people.forEach((p) => {
      this.selectedPeople = [];
    });
  }

  getValues() {
    console.log(this.selectedPeople);
  }
}
