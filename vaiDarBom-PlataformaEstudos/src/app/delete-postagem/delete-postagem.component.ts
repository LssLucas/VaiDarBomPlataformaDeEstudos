import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-delete-postagem',
  templateUrl: './delete-postagem.component.html',
  styleUrls: ['./delete-postagem.component.css']
})
export class DeletePostagemComponent implements OnInit {

  postagem : Postagem = new Postagem()

  constructor(
    private postagemService : PostagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id: number = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
  }

  findByIdPostagem(id:number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem=resp
    })
  }

  btnSim() {
    this.postagemService.getByIdPostagem(this.postagem.id).subscribe((resp : Postagem) => {

      this.router.navigate(['/feed'])
      alert('Deu bom, seu poste foi pra lixeira :D')
    })
  }
  btnNao() {

    this.router.navigate(['/feed'])

  }
}
