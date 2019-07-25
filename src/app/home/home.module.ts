import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, MainMenuComponent, ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
