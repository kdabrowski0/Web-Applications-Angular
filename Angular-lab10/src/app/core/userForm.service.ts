import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UserService } from './userService.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
userForm: FormGroup = new FormGroup({});

constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
) {
    this.initForm();
}

  public initForm(): void {
    this.userForm = new FormGroup({
      id: this.formBuilder.control(null),
      name: this.formBuilder.control(null, Validators.required),
      addresses: new FormArray([
    
      ]),
    });
  }

  public addAddress(): void {
    const addresses = this.userForm.get('addresses') as FormArray;
    addresses.push(this.formBuilder.control(null, Validators.required));
  }

  public resetForm(): void {
    this.userForm.reset();
    (this.userForm.get('addresses') as FormArray).clear();
  }

  public removeAddress(index: number): void {
    const addresses = this.userForm.get('addresses') as FormArray;
    if (index >= 0 && index < addresses.length) {
      addresses.removeAt(index);
    }
  }

  public updateUser(user: User): void {
    this.userService.updateUser(user);
  }

  public addUser(): void {
    if (this.userForm.valid) {
      const user = this.userForm.value as User;
      this.userService.addUser(user);
      this.resetForm();
    }
  }
  public loadUserIntoForm(user: User): void {
    this.userForm.patchValue(user);
    const addresses = this.userForm.get('addresses') as FormArray;
    user.addresses?.forEach((address) => {
      addresses.push(this.formBuilder.control(address, Validators.required));
    });
  }

}
