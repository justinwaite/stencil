import * as d from '../../declarations';
import { build } from './build';
import { buildError } from '@utils';
import { createCompilerContext } from './context';
import { validateConfig } from '../config/validate-config';
import { watch } from './watch';


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
    sys: config.sys as any,
    watch: () => watch(config, compilerCtx)
  };

  return compiler;
};
