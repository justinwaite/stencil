import * as d from '../../declarations';
import { build } from './build';
import { createCompilerContext } from './context';
import { validateConfig } from '../config/validate-config';
import { buildError } from '@utils';


export const createCompiler = async (config: d.Config) => {
  const compilerCtx = createCompilerContext();
  const diagnostics: d.Diagnostic[] = [];

  config = validateConfig(config, diagnostics, false);

  if (!config.sys) {
    const diagnostic = buildError(diagnostics);
    diagnostic.messageText = `config.sys required`;
  }

  if (diagnostics.length > 0) {
    throw diagnostics;
  }

  const compiler: d.CompilerCore = {
    build: () => build(config, compilerCtx),
    config,
    destroy: async () => {
      //
    },
    sys: config.sys as any
  };

  return compiler;
};
