To install with cleanup protocol

```
npm i estlin-plugin-enforce-cleanup --save-dev
npm i cleanup-protocol
```

This eslint rule package does two things:

- Enforce the implementation of `CleanupProtocol` in Typescript Classes
- Enforce the calling of `myClass.cleanup()` function in useEffect and classes. It only apply checks for classes defined in the project.

With this rule, all the classes in the repository should implement `CleanupProtocol`

```typescript
class MyClass implmenets CleanupProtocol {
  // ...
  cleanup():void {
    // implement cleanup code here
  }
}
```

And whenever the class is intantiated, cleanup function must be called

```typescript
const myInstance = new MyClass();
myInstance.cleanup();
```

It is recommended to write an explanation you have to disable the rule for a specific line.

Note that an exception class list is available in the `cleanup-ignore-list.js` under `lib/rules`. The current list is being tuned to the common need of my projects, but feel free to fork the repo and make it yours.

To publish the plugin:
`npm run publih`
