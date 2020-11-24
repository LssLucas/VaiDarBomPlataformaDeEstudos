import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  //form: Contato = new Contato()

  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit(){}

  enviarFormContato(){

  }

}

/*@Entity
@Table (name = "contatos")
public class Contato {
	
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	private String motivoContato;
	
	@NotNull
	@Size(min = 10, max = 5000)
	private String mensagem;	

	@Temporal(TemporalType.TIMESTAMP)
    private Date data = new java.sql.Date(System.currentTimeMillis());
	
	@NotNull
	private String NomeUsuario;*/
