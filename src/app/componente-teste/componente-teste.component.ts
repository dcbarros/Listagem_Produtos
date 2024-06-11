import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../pipes/media.pipe";

@Component({
    selector: 'app-componente-teste',
    standalone: true,
    templateUrl: './componente-teste.component.html',
    styleUrl: './componente-teste.component.css',
    imports: [CommonModule, MediaPipe]
})
export class ComponenteTesteComponent {

  nome:string = 'Teste';
  obj:any = {
    'nome':'nome',
    'idade': 1
  };

  alunos:any = [
    {'nome':this.randomName(), 'nota1': this.randomGrade(), 'nota2': this.randomGrade()},
    {'nome':this.randomName(), 'nota1': this.randomGrade(), 'nota2': this.randomGrade()},
    {'nome':this.randomName(), 'nota1': this.randomGrade(), 'nota2': this.randomGrade()},
    {'nome':this.randomName(), 'nota1': this.randomGrade(), 'nota2': this.randomGrade()},
    {'nome':this.randomName(), 'nota1': this.randomGrade(), 'nota2': this.randomGrade()},
    {'nome':this.randomName(), 'nota1': this.randomGrade(), 'nota2': this.randomGrade()},
    {'nome':this.randomName(), 'nota1': this.randomGrade(), 'nota2': this.randomGrade()},
    {'nome':this.randomName(), 'nota1': this.randomGrade(), 'nota2': this.randomGrade()},
    {'nome':this.randomName(), 'nota1': this.randomGrade(), 'nota2': this.randomGrade()},
    {'nome':this.randomName(), 'nota1': this.randomGrade(), 'nota2': this.randomGrade()},
    {'nome':this.randomName(), 'nota1': this.randomGrade(), 'nota2': this.randomGrade()},
  ]

  randomName(){
    const nomes = ["Adriana", "Beatriz", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gustavo", "Helena", "Igor", "Juliana",
    "Karla", "Leonardo", "Mariana", "Nicolas", "Olivia", "Paulo", "Quintino", "Raquel", "Sofia", "Tiago",
    "Ursula", "Vicente", "Wagner", "Xavier", "Yara", "Zeca", "Aline", "Bruno", "Camila", "Diego",
    "Eliana", "Felipe", "Gabriela", "Hugo", "Isabela", "João", "Karine", "Luiz", "Marta", "Natália",
    "Otávio", "Patrícia", "Quirino", "Renato", "Silvana", "Túlio", "Ulisses", "Valéria", "William", "Ximena",
    "Yuri", "Zuleica", "Amanda", "Bernardo", "Cecília", "Diogo", "Elisa", "Fábio", "Giovana", "Henrique",
    "Ivana", "Júlio", "Kátia", "Lucas", "Marcos", "Natanael", "Otília", "Pedro", "Quésia", "Rita",
    "Samuel", "Tatiana", "Ubirajara", "Vanessa", "Wallace", "Xuxa", "Yasmin", "Ziraldo", "Ana", "Brenda",
    "César", "Débora", "Ernesto", "Flávia", "Geraldo", "Helô", "Ícaro", "Josiane", "Kleber", "Larissa",
    "Márcio", "Nara", "Orlando", "Paula", "Queila", "Rogério", "Sara", "Teresa", "Uriel", "Vitória",
    "Wesley", "Xena", "Yasmim", "Zenon", "Alessandra", "Bárbara", "Caio", "Davi", "Elaine", "Fernando",
    "Giselle", "Horácio", "Ivete", "Jonas", "Kelly", "Lorena", "Marcelo", "Nícolas", "Osmar", "Patrício",
    "Quitéria", "Reinaldo", "Simone", "Tadeu", "Ulisses", "Viviane", "Wellington", "Xavier", "Yara", "Zélia"]

    let randonIndex = Math.floor(Math.random()*(nomes.length - 0) + 0); 
    return nomes[randonIndex]
  }

  randomGrade():number{
    return parseFloat((Math.random()*(10 - 1) + 1).toFixed(2)); 
  }
}
