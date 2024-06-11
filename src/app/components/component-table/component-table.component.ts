import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../models/Produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-table.component.html',
  styleUrl: './component-table.component.css'
})
export class ComponentTableComponent {
  @Input() items: Produto[];
  @Output() selectItem:any

  constructor() {
    this.items = [];
    this.selectItem = new EventEmitter<Produto>();
  }

  selecionarProduto(produto: Produto) {
    this.selectItem.emit(produto);
  }
}
