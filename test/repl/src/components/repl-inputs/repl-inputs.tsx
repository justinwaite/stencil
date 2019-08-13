import { Component, Host, h, Prop } from '@stencil/core';
import { InputData } from '../stencil-repl/stencil-repl';

@Component({
  tag: 'repl-inputs',
  styleUrl: 'repl-inputs.css',
  shadow: true
})
export class ReplInputs {

  @Prop() inputs: InputData[];

  render() {
    return (
      <Host>
        <header>
          {(this.inputs.map(input => (
            <button>{input.name}</button>
          )))}
        </header>
        <section>
          {(this.inputs.map(input => (
            <repl-input code={input.code} name={input.name}></repl-input>
          )))}
        </section>
      </Host>
    );
  }
}
