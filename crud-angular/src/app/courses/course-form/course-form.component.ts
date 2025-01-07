import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private formBuilder: FormBuilder,
    private service: CoursesService,
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.service.save(this.form.value).pipe(
      tap(result => console.log(result)),
      catchError(error => {
        this.onError();
        return of(null); // Retorna um observable vazio para evitar a interrupção do stream
      })
    ).subscribe();
  }

  onCancel() {

  }

  private onError() {
    this._snackBar.open('Failed to save the course', '', { duration: 2000 });
  }
}
