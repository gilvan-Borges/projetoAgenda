import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


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


  //construindo um formulário
  form = new FormGroup({
    nome : new FormControl(''), //campo 'nome'
    email : new FormControl(''), //campo 'email'
    senha : new FormControl('') //campo 'senha'
  });

  //instanciando o HttpClient (injeção de dependência)

  constructor(private http: HttpClient) { }

  //capturar do evento submit
  onSubmit() {

    this.http.post('http://localhost:3000/usuarios', this.form.value)
    .subscribe({
      next: () =>{
        alert('Usuário cadastrado com sucesso!');
        this.form.reset();
      }
    })

  }


}