// 라이브러리 의존성
import MyModule from './MyModule';
import { ModuleName } from './MyModule';
import { ModuleName as RenamedModuleName } from './MyModule';

function Fun() {
  MyModule();
}
export const CONST_VALUE = 0;
export class MyClass {}
export default new Fun();
