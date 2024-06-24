import { Component, OnInit } from '@angular/core';
import { FormService } from '../userForm.service';
import { AbstractControl,FormArray } from '@angular/forms';
import { UserService } from '../userService.service';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-user-manage-form',
  templateUrl: './user-manage-form.component.html',
  styleUrls: ['./user-manage-form.component.scss'],
})
export class UserManageFormComponent implements OnInit {
  public isEditMode = false;

  constructor(
    public formService: FormService,
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = params['id'];
      this.isEditMode = !!userId;
      if (this.isEditMode) {
        const user = this.userService.getUserById(userId);
        if (user) {
          this.formService.loadUserIntoForm(user);
        } else {
          this.router.navigate(['/']);
        }
      }
    });
  }

  public addAddress(): void {
    this.formService.addAddress();
  }

  public removeAddress(index: number): void {
    this.formService.removeAddress(index);
  }

  public submitForm(): void {
    if (this.formService.userForm.valid) {
      const user = this.formService.userForm.value;
      console.log('User submitted:', user);

      if (user.id) {
        this.userService.updateUser(user);
      } else {
        this.formService.addUser();
      }

      this.formService.resetForm();
      this.router.navigate(['/']);
    }
  }

  public getAddresses(): AbstractControl[] {
    return (this.formService.userForm.get('addresses') as FormArray).controls;
  }
}
