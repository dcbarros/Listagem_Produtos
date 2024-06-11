import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteTesteComponent } from "./componente-teste/componente-teste.component";
import { FormProdutoComponent } from "./components/form-produto/form-produto.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormProdutoComponent]
})
export class AppComponent {
  title = 'produtos_view';
}
