import { AbstractControl, ValidationErrors } from "@angular/forms";


export class PasswordValidator {


    /*
         Validação customizada para comparação de senhas
    */
    static mathPasswordValidator(senha: string, senhaConfirmacao: string): ValidationErrors | null {


        return (group: AbstractControl): ValidationErrors | null => {
            //capturando os campos do formulário (senha e confirmação de senha)
            const passwordField = group.get(senha)?.value;
            const passwordConfirmField = group.get(senhaConfirmacao)?.value;


            //verificando se os campos não possuem o mesmo valor
            if (passwordField && passwordConfirmField && passwordField != passwordConfirmField) {
                //criando o erro de validação
                group.get(senhaConfirmacao)?.setErrors({
                    passwordsMismatch: true
                });
                
                //retornando o erro de validação
                return { passwordsMismatch: true };
            }


            return null;
        };
    }


}

