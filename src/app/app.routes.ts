import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';

export const routes: Routes = [
    {
        path:"autenticar-usuario",  // URL 
        component: LoginComponent
    },
    {
        path: "criar-usuario", // URL
        component: RegisterComponent
    },
    {
        /* definir a rota inicial do projeto*/ 
        path: "",
        pathMatch: "full",
        redirectTo: "/autenticar-usuario"
    }
];
