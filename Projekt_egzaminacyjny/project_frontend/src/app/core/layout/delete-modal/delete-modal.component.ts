import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
  standalone: true,
  imports: [MatButtonModule],
})
export class DeleteModalComponent {
  public constructor(public dialogRef: MatDialogRef<DeleteModalComponent>) {}

  public closeDialog(): void {
    this.dialogRef.close('cancel');
  }

  public confirmDelete(): void {
    this.dialogRef.close('confirm');
  }

}
