/**
 ** Namespace Augmentation
 ** In TypeScript, namespace augmentation is a way to extend or modify existing namespaces.
 ** This is useful when you want to add new functionality to existing namespaces or to fix
 ** missing or incorrect declarations in third-party libraries.
 */
declare namespace MyModule {
  export interface MyModule {
    newFunc(): void;
  }
}
