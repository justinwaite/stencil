import { Component, Host, h, Prop, State } from '@stencil/core';
import { compile } from '../../compile';


@Component({
  tag: 'stencil-repl',
  styleUrl: 'stencil-repl.css',
  shadow: true
})
export class StencilRepl {

  @Prop() appName: string = 'Stencil App';
  @Prop() inputs: InputData[] = [];

  @State() output: OutputData;

  async compile() {
    const results = await compile(this.inputs);
    results;
  }

  componentDidLoad() {
    this.compile();
  }

  render() {
    return (
      <Host>
        <repl-header appName={this.appName}></repl-header>
        <repl-viewport>
          <repl-inputs slot="left" inputs={this.inputs}/>
          <repl-outputs slot="right" output={this.output}/>
        </repl-viewport>
      </Host>
    );
  }
}

export interface InputData {
  name: string;
  code: string;
}

export interface OutputData {

}
