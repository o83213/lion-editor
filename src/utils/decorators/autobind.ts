// Decorator
export function autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjustDescriptor;
}
