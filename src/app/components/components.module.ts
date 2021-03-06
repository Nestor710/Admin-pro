import { NgModule } from '@angular/core';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  exports: [
    GraficoDonaComponent,
    IncrementadorComponent
  ],
  imports: [
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
