import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { RegisterRequestDTO } from '../../../models/register.request.dto';
import { CommonModule } from '@angular/common';
import { PasswordValidator } from '../../../validators/password.validators';



@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  //atributos
  form: FormGroup; //formulário


  //instanciando a classe de serviço de usuário
  constructor(
    private usuarioService: UsuarioService, //injetando o serviço de usuário
    private fb: FormBuilder //injetando o form builder
  ) {
    this.form = this.fb.group({ //criando o formulário
      nome: new FormControl('', [
        Validators.required, Validators.minLength(8)
      ]), //campo nome
      email: new FormControl('', [
        Validators.required, Validators.email
      ]), //campo email
      senha: new FormControl('', [
        Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]), //campo senha
      senhaConfirmacao: new FormControl('', [
        Validators.required
      ])
    }, {
      //validação customizada
      validators: PasswordValidator.mathPasswordValidator('senha', 'senhaConfirmacao')
    });
  }


  //capturar do evento submit
  onSubmit() {
   
    //criar os dados do DTO de requisição
    const request : RegisterRequestDTO = {
      //capturando o valor do campo nome do formulário
      nome: this.form.get('nome')?.value as string,
      //capturando o valor do campo email do formulário
      email: this.form.get('email')?.value as string,
      //capturando o valor do campo senha do formulário
      senha: this.form.get('senha')?.value as string
    };


    //chamando o serviço de registro de usuário
    this.usuarioService.register(request)
      .subscribe({ //capturando a resposta da requisição
        next: (response) => { //caso a requisição seja bem sucedida
          console.log(response); //exibindo a resposta no console
        },
        error: (e) => { //caso a requisição falhe
          console.error(e.error); //exibindo o erro no console
        }
      });
  }


}





