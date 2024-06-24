import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/core/shared/car.model';
import { Comment } from 'src/app/core/shared/comment.model';
import { CarEndpoints } from 'src/app/core/features/CarEndpoints.service';
import { CommentsEndpoint } from 'src/app/core/features/CommentsEndpoint.service';
import { forkJoin } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/core/layout/delete-modal/delete-modal.component';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  public car: Car | undefined;
  public comments: Comment[] | undefined = [];
  public newComment: string = '';
  public isFetching: boolean = false;

  public constructor(
    private carEndpoints: CarEndpoints,
    private route: ActivatedRoute,
    private commentsEndpoint: CommentsEndpoint,
    private router: Router,
    public dialog: MatDialog,
  ) {}

  public ngOnInit(): void {
    this.isFetching = true;
    this.loadCarAndComments();
  }
  private loadCarAndComments(): void {
    const carId: string = this.route.snapshot.paramMap.get('id') || '';

    forkJoin([
      this.carEndpoints.getCarById(carId),
      this.commentsEndpoint.getAllCommentsByCarId(carId),
    ]).subscribe(
      ([car, comments]: [Car, Comment[]]) => {
        this.car = car;
        this.comments = comments;
        this.isFetching = false;
      },
      (error: Error) => {
        console.error(error);
        this.isFetching = false;
        this.router.navigate(['/not-found']);
      },
    );
  }
  public deleteCar(): void {
    if (this.car?.carId) {
      const dialogRef: MatDialogRef<DeleteModalComponent> = this.dialog.open(DeleteModalComponent, {
        width: '300px',
        height: '75px',
      });

      dialogRef.afterClosed().subscribe((result: string) => {
        if (result === 'confirm') {
          this.performDeleteCar();
        }
      });
    }
  }

  private performDeleteCar(): void {
    if (this.car?.carId) {
      this.carEndpoints.deleteCar(this.car.carId).subscribe(
        () => {
          this.router.navigate(['/cars']);
        },
        (error: Error) => {
          console.error('Error deleting car:', error);
        },
      );
    }
  }
  public addComment(): void {
    if (this.car?.carId) {
      const trimmedComment: string = this.newComment.trim();
      if (!trimmedComment || trimmedComment.length < 5) {
        console.error('Comment must be at least 5 characters and cannot be blank or null.');

        return;
      }

      const comment: Comment = {
        commentId: null,
        comment: trimmedComment,
      };

      this.isFetching = true;
      this.commentsEndpoint.addComment(this.car.carId, comment).subscribe(
        () => {
          this.loadCarAndComments();
          this.isFetching = false;
          this.newComment = '';
        },
        (error: Error) => {
          console.error('Error adding comment:', error);
        },
      );
    }
  }
  public deleteComment(commentId: string | null | undefined): void {
    if (commentId !== undefined && commentId !== null) {
      this.isFetching = true;
      this.commentsEndpoint.deleteComment(commentId).subscribe(
        () => {
          this.loadCarAndComments();
          this.isFetching = false;
        },
        (error: Error) => {
          console.error('Error deleting comment:', error);
          this.isFetching = false;
        },
      );
    } else {
      console.error('Comment ID is undefined. Unable to delete.');
    }
  }
}
