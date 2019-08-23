import { Component, Host, h, Prop, State } from '@stencil/core';
import { createCompiler, Compiler, CompilerConfig } from '../../compiler';


@Component({
  tag: 'stencil-repl',
  styleUrl: 'stencil-repl.css',
  shadow: true
})
export class StencilRepl {

  @Prop() appName: string = 'Stencil App';
  @Prop() inputs: InputData[] = [];

  @State() output: OutputData;

  compiler: Compiler;

  async componentWillLoad() {
    const config: CompilerConfig = {

    };

    this.compiler = await createCompiler(config);

    await Promise.all(this.inputs.map(async input => {
      await this.compiler.sys.writeFile(input.name, input.code);
    }));
  }

  async compile() {
    const results = await this.compiler.build();
    console.log('results', results);
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
