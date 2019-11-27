import { Component } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {

    myCourse: string = 'Learn Angular';
    
    courses: string[] = ['Angular', 'Spring', 'Laravel'];
    
    num1: number = 0;
    num2: number = 0;

    addCourse() {
      this.courses.push(this.myCourse);
      this.myCourse = "";
    }

}
