import { Component, Host, h, Prop } from '@stencil/core';


@Component({
  tag: 'repl-input',
  styleUrl: 'repl-input.css',
  shadow: true
})
export class ReplInput {

  @Prop() name: string;
  @Prop() code: string
  @Prop() isSelected = false;

  render() {
    return (
      <Host
        class={{
          selected: this.isSelected
        }}
      >
        <textarea>
          {this.code}
        </textarea>
      </Host>
    );
  }
}
