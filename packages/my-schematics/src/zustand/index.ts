import { Rule, mergeWith, apply, url, applyTemplates, SchematicContext } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function zustand(options: any): Rule {
  options.name = strings.dasherize(options.name);
  return (_, _context: SchematicContext) => {
    return mergeWith(apply(url("files"), [
      applyTemplates({
        ...strings,
        ...options
      })
    ]))
  }
}