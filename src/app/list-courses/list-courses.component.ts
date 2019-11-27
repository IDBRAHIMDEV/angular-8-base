import { Component } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {

  myCourse: string = 'Learn Angular';
  image = "https://picsum.photos/id/237/535/200"
  courses: string[] = ['Angular', 'Spring', 'Laravel'];

  num1: number = 0;
  num2: number = 0;

  addCourse() {
    this.courses = [this.myCourse, ...this.courses];
    this.myCourse = "";
  }
  editCourse(course:string) {
    this.myCourse= course;
    console.log(this.myCourse);
  }

}
