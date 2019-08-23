import { Component, Host, h, Prop, Listen } from '@stencil/core';
import { InputData } from '../stencil-repl/stencil-repl';

@Component({
  tag: 'repl-inputs',
  styleUrl: 'repl-inputs.css',
  shadow: true
})
export class ReplInputs {

  @Prop() inputs: InputData[] = [];
  @Prop() selectedName: string;

  @Listen('inputSelect')
  onInputSelect(ev: UIEvent) {
    this.selectedName = ev.detail as any;
  }

  render() {
    if (this.inputs.length > 0 && !this.inputs.some(i => i.name === this.selectedName)) {
      this.selectedName = this.inputs[0].name;
    }

    return (
      <Host>
        <header>
          {(this.inputs.map(input => (
            <repl-input-selection
              name={input.name}
              isSelected={input.name === this.selectedName}
            />
          )))}
          <button
            class="add-input"
          >+</button>
        </header>
        <section>
          {(this.inputs.map(input => (
            <repl-input
              code={input.code}
              name={input.name}
              isSelected={input.name === this.selectedName}
            />
          )))}
        </section>
      </Host>
    );
  }
}
