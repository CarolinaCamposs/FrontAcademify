import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta-sucesso',
  template: `
    <div class="alerta-sucesso">
      {{ mensagem }}
      <button mat-icon-button (click)="fecharAlerta()">
        <mat-icon>close</mat-icon>
      </button>
    </div>
  `,
  styleUrls: ['./alerta-sucesso.component.css'],
})
export class AlertaSucessoComponent {
  @Input() mensagem: string = '';
  @Output() fecharAlertaEvent = new EventEmitter<void>();

  fecharAlerta() {
    this.fecharAlertaEvent.emit();
  }
}
