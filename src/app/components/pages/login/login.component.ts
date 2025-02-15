import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { LoginRequestDTO } from '../../../models/login.request.dto';


@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: FormGroup;

  constructor(
      private usuarioService: UsuarioService, //injetando o serviço de usuário
      private fb: FormBuilder, //injetando o form builder
      private router: Router //injetando o router
    ) {
      this.form = this.fb.group({ //criando o formulário      
        email: new FormControl('', []), //campo email
        senha: new FormControl('', [])
      });
    }


  onSubmit() {


    const request : LoginRequestDTO = {
          email: this.form.get('email')?.value as string,
          senha: this.form.get('senha')?.value as string
        };


    this.usuarioService.login(request)
      .subscribe({
        next: (response) => {
          //redirecionar para a página de dashboard
          this.router.navigate(['/dashboard'])
            .then(() => {
              location.reload(); //recarregar a página
            });
        }
      });
  }


}
