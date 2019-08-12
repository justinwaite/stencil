import * as d from '.';

export interface CompileOptions {
  file?: string;
  componentMetadata?: 'runtimestatic' | 'compilerstatic' | string | undefined;
  proxy?: 'defineproperty' | string | undefined;
  module?: 'cjs' | 'esm' | string;
  componentExport?: 'customelement' | 'module' | string | undefined;
  script?: CompileScript;
  type?: StencilDataType;
  data?: d.StencilComponentData;
}

export interface CompileResults {
  diagnostics: d.Diagnostic[];
  code: string;
  map: any;
  inputFilePath: string;
  outputFilePath: string;
  inputOptions: CompileOptions;
  imports: { path: string; }[];
  componentMeta: any[];
}

export interface CompileScriptMinifyOptions {
  script?: CompileScript;
  pretty?: boolean;
}


export type CompileScript = 'latest' | 'esnext' | 'es2017' | 'es2015' | 'es5' | string | undefined;

export type StencilDataType = 'css' | 'js' | 'ts' | 'dts';

export interface ResolvedStencilData {
  type: StencilDataType;
  resolvedId: string;
  filePath: string;
  fileName: string;
  data: StencilComponentData;
  importee: string;
  importer: string;
}

export interface StencilComponentData {
  tag: string;
  scopeId: string;
  encapsulation?: string;
  mode?: string;
}
