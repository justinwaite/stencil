import * as d from '.';

export interface CompilerCore {
  build(): Promise<d.BuildResults>;
  config: d.Config;
  destroy(): Promise<void>;
  sys: CompilerSystem;
}

export interface CompilerSystem {
  createDirectory(dirPath: string): void;
  directoryExists(dirPath: string): boolean;
  fileExists(filePath: string): boolean;
  readFile(filePath: string): string | undefined;
  writeFile(filePath: string, data: string): void;
  watchFile?(filePath: string, callback: FileWatcherCallback): FileWatcher;
  watchDirectory?(filePath: string, callback: DirectoryWatcherCallback, recursive?: boolean): FileWatcher;
  resolvePath(filePath: string): string;
}


type FileWatcherCallback = (fileName: string, eventKind: FileWatcherEventKind) => void;
type DirectoryWatcherCallback = (fileName: string) => void;

interface FileWatcher {
  close(): void;
}

type FileWatcherEventKind = 'created' | 'changed' | 'deleted';
