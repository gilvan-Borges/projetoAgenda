import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  //atributos
  usuario: any = null;


  //método construtor
  constructor(private router: Router) {}


  //ciclo de vida: ao abrir o componente
  ngOnInit() {
    //capturar os dados gravados na session storage
    const data = sessionStorage.getItem('usuario') as string;
    this.usuario = JSON.parse(data)[0]; //convertendo para JSON
  }


  logout() {
    if(confirm('Deseja realmente sair do sistema?')) {
      //apagar os dados do usuário da session storage
      sessionStorage.removeItem('usuario');
      //redirecionar para a página de autenticação
      this.router.navigate(['/autenticar-usuario'])
        .then(() => {
          location.reload(); //recarregar a página
        });
    }
  }


}





