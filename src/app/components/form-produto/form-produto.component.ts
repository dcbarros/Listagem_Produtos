import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ComponentTableComponent } from "../component-table/component-table.component";
import { Produto } from '../../models/Produto';
import { ProdutoService } from '../../service/produto.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-form-produto',
    standalone: true,
    templateUrl: './form-produto.component.html',
    styleUrl: './form-produto.component.css',
    imports: [ComponentTableComponent,ReactiveFormsModule, CommonModule]
})
export class FormProdutoComponent {
  produtoForm: FormGroup;
  disableButton: boolean;
  produtos: Produto[];
  produtoSelecionado: Produto | null;


  constructor(private fb: FormBuilder, private produtoService:ProdutoService) {
    this.disableButton = false;
    this.produtos = [];
    this.produtoSelecionado = null;
    this.produtoForm = this.fb.group({
      nome:['', Validators.required],
      valor:['',[Validators.required, Validators.min(0.01)]]
    });
  }

  ngOnInit(){
    this.selecionar();
  }

  onProdutoSelecionado(produto: Produto) {
    this.produtoSelecionado = produto;
    this.disableButton = true;
    this.produtoForm.patchValue(produto);
  }

  cancelar(){
    this.disableButton = false;
    this.produtoForm.reset();
  }

  selecionar() {
    this.produtoService.selecionar().subscribe(p => {
      this.produtos = p;
    });
  }  

  cadastro(){
    if(this.produtoForm.valid){
      let produto = this.produtoForm.value as Produto;
      produto.id = this.produtos.length + 1;
      this.produtoService.cadastrar(produto)
        .subscribe(r => {
          this.produtos.push(r);
          this.produtoForm.reset();
        });
    }else{
      this.produtoForm.markAllAsTouched();
    }
  }

  alterar(){
    if(this.produtoForm.valid){
      let produto = this.produtoForm.value as Produto;
      produto.id = this.produtoSelecionado.id;
      this.produtoService.alterar(produto)
      .subscribe(r => {
        this.produtos[this.produtoSelecionado.id-1] = r;
        this.produtoForm.reset();
        this.disableButton = false;
      })
    }else{
      this.produtoForm.markAllAsTouched();
    }
  }

  remover(){
    this.produtoService.remover(this.produtoSelecionado.id)
      .subscribe(() => {
        this.selecionar();
        this.produtoForm.reset();
        this.disableButton = false;
      });
  }
}
