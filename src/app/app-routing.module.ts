import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalvarComponent } from './salvar/salvar.component';
import { EmpresasComponent } from './empresas/empresas.component';
const routes: Routes = [
  { path: 'salvar', component: SalvarComponent },
  { path: 'empresas', component: EmpresasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
