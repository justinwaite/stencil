import * as d from '../../declarations';


export const watch = async (_config: d.Config, _compilerCtx: d.CompilerCtx) => {

  const onFinish = (_callback: (results: d.CompilerBuildResults) => void) => {
    //
  };

  const close = async () => {
    const exitCode: d.WatchExitCode = 0;
    return exitCode;
  };

  const directoryAdd = (_dirPath: string) => {
    //
  };

  const directoryRemove = (_dirPath: string) => {
    //
  };

  const fileAdd = (_filePath: string) => {
    //
  };

  const fileChange = (_filePath: string) => {
    //
  };

  const fileRemove = (_filePath: string) => {
    //
  };

  const watcher: d.CompilerWatcher = {
    onFinish,
    close,
    directoryAdd,
    directoryRemove,
    fileAdd,
    fileChange,
    fileRemove
  };
  return watcher;
};

