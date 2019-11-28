import { Component } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {

  editAction: boolean = false;

  image = "https://picsum.photos/id/400/800/300";

  myCourse: any = {
    id: 0,
    name: ""
  };

  courses: any[] = [
    {
      id: 1,
      name: "Angular"
    },
    {
      id: 2,
      name: "NodeJS"
    },
    {
      id: 3,
      name: "Spring boot"
    }
  ];

  num1: number = 0;
  num2: number = 0;

  addCourse() {
    // this.courses.push(this.myCourse);
    if (this.myCourse.name != '') {
      this.courses = [...this.courses, this.myCourse];
      this.initCourse();
    }
  }

  editCourse(course: any) {
    this.myCourse = course;
    this.editAction = true;
  }
  
  deleteCourse(id) {
    let isYes = confirm("Are you sure");

    if(isYes) {
     
      this.courses = this.courses.filter(course => course.id !== id)
      //  this.courses.splice(index, 1);

    }
  }

  updateCourse() {
    this.editAction = false;
    this.initCourse();
  }

  initCourse() {
    this.myCourse = {
      id: 0,
      name: ''
    }
  }

}
