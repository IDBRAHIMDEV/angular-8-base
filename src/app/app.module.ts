import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { ContentComponent } from './content/content.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import { VotesComponent } from './votes/votes.component';
import { PanelComponent } from './panel/panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: ListCoursesComponent },
  { path: 'blog', component: PostsComponent },
  { path: 'github', component: UsersComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListCoursesComponent,
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    IntroComponent,
    ContentComponent,
    PostsComponent,
    SearchComponent,
    UsersComponent,
    VotesComponent,
    PanelComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
