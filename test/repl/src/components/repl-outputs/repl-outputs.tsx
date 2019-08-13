import { Component, Host, h, Prop } from '@stencil/core';
import { OutputData } from '../stencil-repl/stencil-repl';

@Component({
  tag: 'repl-outputs',
  styleUrl: 'repl-outputs.css',
  shadow: true
})
export class ReplOutputs {

  @Prop() output: OutputData;

  render() {
    return (
      <Host>
        outputs
      </Host>
    );
  }
}
