import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>; // We need to put this as Observable, because we are using HttpClient, that returns an Observable
  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService) {
    this.courses$ = courseService.list(); // We can use this way, because we put the service in the constructor. We can put this on ngInit as well if you think it's better.
  }

  ngOnInit(): void {
  }
}
