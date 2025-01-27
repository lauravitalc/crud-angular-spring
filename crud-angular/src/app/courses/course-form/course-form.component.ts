import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  form: FormGroup;
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      category: [''],
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.service.save(this.form.value).pipe(
      tap(result => this.onSuccess()),
      catchError(error => {
        this.onError();
        return of(null); // Retorna um observable vazio para evitar a interrupção do stream
      })
    ).subscribe();
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess () {
    this._snackBar.open('Couse successfully saved!', '', { duration: 2000 });
    this.location.back();
  }

  private onError() {
    this._snackBar.open('Failed to save the course', '', { duration: 2000 });
  }
}
