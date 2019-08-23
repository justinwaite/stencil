// import { InputData } from '../components/stencil-repl/stencil-repl';



const build = async (_config: CompilerConfig, _compilerCtx: CompilerContext) => {

};

const normalizeCompilerConfig = (inputConfig: CompilerConfig) => {
  return Object.assign({}, DEFAULT_CONFIG, inputConfig || {});
};



const createCompilerContext = () => {
  const compilerCtx: CompilerContext = {

  };
  return compilerCtx;
};


export interface Compiler {
  build: () => Promise<any>;
  config: CompilerConfig;
  sys: CompilerSystem;
}


export interface CompilerConfig {
  sys?: CompilerSystem;
  watch?: boolean;
}


export interface CompilerContext {
  sys?: CompilerSystem;
}

type FileWatcherCallback = (fileName: string, eventKind: FileWatcherEventKind) => void;
type DirectoryWatcherCallback = (fileName: string) => void;

interface FileWatcher {
  close(): void;
}

enum FileWatcherEventKind {
  Created = 0,
  Changed = 1,
  Deleted = 2
}
