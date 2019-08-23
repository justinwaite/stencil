import { Component, Host, h, Prop, State, Listen } from '@stencil/core';
import * as d from '../../../../../dist/declarations';
import { experimentalCreateCompiler } from '@stencil/core/compiler';


@Component({
  tag: 'stencil-repl',
  styleUrl: 'stencil-repl.css',
  shadow: true
})
export class StencilRepl {

  @Prop() appName: string = 'Stencil App';
  @Prop() inputs: InputFile[] = [];

  @State() output: OutputData;

  watcher: d.CompilerWatcher;

  async componentDidLoad() {
    const browserSystem: d.CompilerSystem = {

    } as any;

    const browserLogger: d.Logger = {

    } as any;

    const config: d.Config = {
      sys: browserSystem as any,
      logger: browserLogger
    };

    const compiler = await experimentalCreateCompiler(config);

    this.inputs.forEach(input => {
      compiler.sys.writeFile(input.name, input.code);
    });

    this.watcher = await compiler.watch();

    this.watcher.onFinish(results => {
      console.log('build finished', results.buildId);

      const outputTarget = results.outputTargets.find(o => o.type === 'custom-element');
      if (outputTarget) {
        this.output = {
          files: outputTarget.files.map(fileName => {
            const code = compiler.sys.readFile(fileName);
            const outputFile: OutputFile = {
              name: fileName,
              code
            };
            return outputFile;
          })
        };
      }
    });
  }

  @Listen('fileAdd')
  async fileAdd(ev: any) {
    console.log('fileAdd', ev.detail);
    this.watcher.fileAdd(ev.detail.fileName);
  }

  @Listen('fileChange')
  async fileChange(ev: any) {
    console.log('fileChange', ev.detail);
    this.watcher.fileChange(ev.detail.fileName);
  }

  @Listen('fileRemove')
  async fileRemove(ev: any) {
    console.log('fileRemove', ev.detail);
    this.watcher.fileRemove(ev.detail.fileName);
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

export interface InputFile {
  name: string;
  code: string;
}

export interface OutputData {
  files: OutputFile[];
}

export interface OutputFile {
  name: string;
  code: string;
}
