import { HttpClient } from "@angular/common/http";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Course } from "../course";
import { CourseService } from "../course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {
    }

    ngOnInit(): void {
        let courseId = +this.activatedRoute.snapshot.paramMap.get('id')
        this.retrieveCourse(courseId);
    }

    retrieveCourse(id: number): void {
        this.courseService.retrieveById(id).subscribe({
            next: course => {
                this.course = course;
            },
            error: err => {
                console.log('Error ', err);
            }
        });
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with success', course),
            error: err => console.log('Error ', err)
        });
    }

}