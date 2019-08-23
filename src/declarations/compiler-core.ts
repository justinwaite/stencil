import * as d from '.';

export interface CompilerCore {
  build(): Promise<d.CompilerBuildResults>;
  config: d.Config;
  sys: d.CompilerSystem;
  watch(): Promise<d.CompilerWatcher>;
}

export interface CompilerSystem {
  createDirectory(dirPath: string): void;
  directoryExists(dirPath: string): boolean;
  fileExists(filePath: string): boolean;
  readFile(filePath: string): string | undefined;
  writeFile(filePath: string, data: string): void;
  resolvePath(filePath: string): string;
}

export interface CompilerWatcher {
  onFinish(callback: (results: d.CompilerBuildResults) => void): void;
  close(): Promise<WatchExitCode>;
  directoryAdd(dirPath: string): void;
  directoryRemove(dirPath: string): void;
  fileAdd(filePath: string): void;
  fileChange(filePath: string): void;
  fileRemove(filePath: string): void;
}

export interface CompilerBuildResults {
  buildId: number;
  outputTargets: BuildOutputTarget[];
}

export interface BuildOutputTarget {
  type: string;
  dirs: string[];
  dirsAdded: string[];
  dirsRemoved: string[];
  files: string[];
  filesAdded: string[];
  filesChanged: string[];
  filesRemoved: string[];
  filesUpdated: string[];
}

export interface BuildOutputFile {
  name: string;
  content: string;
}

export type WatchExitCode = 0 | 1;
