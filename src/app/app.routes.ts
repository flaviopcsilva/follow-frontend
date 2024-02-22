import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstrucaoComponent } from './paginas/construcao/construcao.component';
import { LoginComponent } from './paginas/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: ConstrucaoComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }