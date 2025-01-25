
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { RegisterRequestDto } from '../../../models/register.request.dto';


@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

   //instanciando a classe de serviço (injeção de dependência)
   constructor(private usuarioService: UsuarioService) { }

  //construindo um formulário
  form = new FormGroup({
    nome : new FormControl(''), //campo 'nome'
    email : new FormControl(''), //campo 'email'
    senha : new FormControl('') //campo 'senha'
  });

 
  //capturar do evento submit
  onSubmit() {
    const request : RegisterRequestDto = {
      //capturando os valores do campo nome
      name: this.form.get('nome')?.value as string,
      //capturando os valores do campo email
      email: this.form.get('email')?.value as string,
      //capturando os valores do campo senha
      senha: this.form.get('senha')?.value as string
    };
    //chamando o método de registro de usuário
    this.usuarioService.register(request)
    .subscribe({
      next: (response) => { //caso a requisição seja bem sucedida
        console.log(response);
      },
      error: (error) => {//caso a requisição seja mal sucedida
        console.log(error);
      }
    })

  }
}