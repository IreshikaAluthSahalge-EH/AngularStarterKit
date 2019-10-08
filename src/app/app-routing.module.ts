import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

export const appRoutes: Routes = [
  { path: "", loadChildren: "./auth/sign-in/sign-in.module#SignInModule" }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
