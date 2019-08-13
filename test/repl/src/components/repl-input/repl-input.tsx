import { Component, Host, h, Prop } from '@stencil/core';


@Component({
  tag: 'repl-input',
  styleUrl: 'repl-input.css',
  shadow: true
})
export class ReplInput {

  @Prop() name: string;
  @Prop() code: string

  render() {
    return (
      <Host>
        <pre>
          {this.code}
        </pre>
      </Host>
    );
  }
}
