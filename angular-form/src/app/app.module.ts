import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroFormTemplateComponent } from './hero-form-template/hero-form-template.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

import { MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { BrowserAnimationsModule} '@angular/platform-browser/animations';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule

  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroFormTemplateComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    AutocompleteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
