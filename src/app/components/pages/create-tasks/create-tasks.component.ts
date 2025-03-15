import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { TarefasService } from '../../../services/tarefas.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TarefasRequestDTO } from '../../../models/tarefas.request.dto';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay } from 'rxjs';


@Component({
  selector: 'app-create-tasks',
  imports: [
    NavbarComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-tasks.component.html',
  styleUrl: './create-tasks.component.css'
})
export class CreateTasksComponent {


  form: FormGroup;
  msg: string = '';


  constructor(
    private tarefasService: TarefasService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nome: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      prioridade: new FormControl('', [Validators.required]),
    });
  }


  onSubmit() {


     this.spinner.show();


     //capturar o id do usuário autenticado
     const usuario = JSON.parse(sessionStorage.getItem('usuario') as string);


     //preenchendo os dados da requisição
     const request : TarefasRequestDTO = {
       nome: this.form.get('nome')?.value as string,
       data: this.form.get('data')?.value as string,
       categoria: this.form.get('categoria')?.value as string,
       prioridade: this.form.get('prioridade')?.value as string,
       usuarioId: usuario[0].id as string
     };


     //enviando a requisição para criar uma tarefa na API
     this.tarefasService.criar(request)
         .pipe(delay(3000))
         .subscribe({
             next: (response) => {
                 this.msg = `Parabéns, tarefa '${response.nome}' cadastrada com sucesso.`;
                 this.form.reset();
             }
         })
         .add(() => {
             this.spinner.hide();
         });
  }
}




