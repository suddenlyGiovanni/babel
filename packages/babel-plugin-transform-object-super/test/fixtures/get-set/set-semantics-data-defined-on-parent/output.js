"use strict";

var _obj;
const Base = {
  test: 1
};
const obj = _obj = {
  test: 2,
  set() {
    return babelHelpers.superPropSet(_obj, "test", 3, this, 1);
  }
};
Object.setPrototypeOf(obj, Base);
expect(obj.set()).toBe(3);
expect(Base.test).toBe(3);
expect(obj.test).toBe(2);
