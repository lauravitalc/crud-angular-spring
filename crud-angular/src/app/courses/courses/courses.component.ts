import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses:Course[] = [
    {_id: '1', name: 'Angular', 'category': 'Front-End'},
    {_id: '2', name: 'Java', 'category': 'Back-End'}
  ];
  displayedColumns = ['name', 'category'];

  constructor() {
    //this.courses = [] -> If we initialize "courses:Course[];" only, we need to put this
  }

  ngOnInit(): void {
      
  }
}
