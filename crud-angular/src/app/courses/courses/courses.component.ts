import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses:Course[] = [];
  displayedColumns = ['name', 'category'];

  //coursesService: CoursesService;

  constructor(private courseService: CoursesService) {
    //this.courses = [] -> If we initialize "courses:Course[];" only, we need to put this
    // this.coursesService = new CoursesService();
    //this.courses = this.coursesService.list();
    this.courses = courseService.list(); // We can use this way, because we put the service in the constructor. We can put this on ngInit as well if you think it's better.
  }

  ngOnInit(): void {
  }
}
