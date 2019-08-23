import { Component, Event, EventEmitter, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'repl-input-selection',
  styleUrl: 'repl-input-selection.css',
  shadow: true
})
export class ReplInputSelection {

  @Prop() name: string;
  @Prop() isSelected = false;
  @Event() inputSelect: EventEmitter<string>;

  render() {
    return (
      <Host
        class={{ selected: this.isSelected}}
      >
        <button
          class="name"
          onClick={() => this.inputSelect.emit(this.name)}
        >
          {this.name}
        </button>
        <button class="close">X</button>
      </Host>
    );
  }

}
