import { Rule, apply, url, move, mergeWith, applyTemplates  } from '@angular-devkit/schematics';

import { strings } from '@angular-devkit/core';
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function webReact(options: any): Rule {
  // 把空格后面的大写字母,大写字母,下划线后面的大写字母,变成 中横线 + 对应的小写字母， 统一现在项目命名
  options.name = strings.dasherize(options.name);

  return mergeWith(apply(url("file/base-react-web-template"), [applyTemplates({
        ...strings,
        ...options
      }), move(options.name)]))
};
