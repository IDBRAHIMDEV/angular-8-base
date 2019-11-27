import { Component } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {
image="https://picsum.photos/id/400/800/300";

    myCourse: string = 'Learn Angular';
    
    courses: string[] = ['Angular', 'Spring', 'Laravel'];
    
    num1: number = 0;
    num2: number = 0;
    addCourse(){
      // this.courses.unshift(this.myCourse);
      this.courses=[this.myCourse,...this.courses];
      this.myCourse="";
      }
    
    }


