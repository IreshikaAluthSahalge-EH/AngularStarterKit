import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { SignInComponent } from "./sign-in.component";
import { InputTextComponent } from "../input-text/input-text.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [SignInComponent, InputTextComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([{ path: "", component: SignInComponent }])
  ]
})
export class SignInModule {}
