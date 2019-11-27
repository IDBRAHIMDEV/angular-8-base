import { Component } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {
image="https://picsum.photos/id/400/800/300";

<<<<<<< HEAD
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
=======
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
>>>>>>> f760d795612455157ed4ad3f626ca68ea3600d91


