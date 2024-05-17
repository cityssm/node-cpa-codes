import type { CPACode, CPACodeCategory } from './types';
export declare function _getCodeCategory(categoryList: CPACodeCategory[], cpaCode: string): CPACodeCategory | undefined;
export declare function _getCodesByAbbreviation(codeList: CPACode[], cpaCodeAbbreviation: string): CPACode[];
