import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Course[] = []
  @Output() add = new EventEmitter(false) // Emissor de evento
  @Output() edit = new EventEmitter(false) 
  
  readonly displayedColumns = ['_id', 'name', 'category', 'actions'];

  constructor() {}

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true)
  }

  onEdit(course: Course) {
    this.edit.emit(course)
  }

}
