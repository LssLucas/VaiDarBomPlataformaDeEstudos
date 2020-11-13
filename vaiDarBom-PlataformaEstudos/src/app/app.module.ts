import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {OrderModule} from 'ngx-order-pipe'
import { AppRoutingModule } from './app-routing.module';
import {ModalModule} from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { AlertasComponent } from './alertas/alertas.component';
import { from } from 'rxjs';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    FormulariosComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    FeedComponent,
    LoginComponent,
    CadastroComponent,
    PostTemaComponent,
    PutPostagemComponent,
    PutTemaComponent,
    DeleteTemaComponent,
    AlertasComponent,
    DeletePostagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
