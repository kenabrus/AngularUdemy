import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';
import { UserComponent } from './user/user.component';
import { Task3 } from './task3/task3.component';
import { HeaderComponent } from './_components/header/header.component';
import { ContentComponent } from './_components/content/content.component';
import { FooterComponent } from './_components/footer/footer.component';
import { RecipeDetailComponent } from './_components/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './_components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './_components/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './_components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './_components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './_components/recipes/recipes.component';
import { ServerElementComponent } from './section5/server-element/server-element.component';
import { ServerFormComponent } from './section5/server-form/server-form.component';
import { ServerListComponent } from './section5/server-list/server-list.component';
import { AddUserFormComponent } from './user/add-user-form/add-user-form.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { UserElementComponent } from './user/user-element/user-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UserComponent,
    Task3,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    ServerElementComponent,
    ServerFormComponent,
    ServerListComponent,
    AddUserFormComponent,
    UsersListComponent,
    UserElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
