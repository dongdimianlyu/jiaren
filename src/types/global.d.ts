// Global type declarations
declare module 'locomotive-scroll' {
  export default class LocomotiveScroll {
    constructor(options: any)
    destroy(): void
  }
}

// Suppress firebase types if they're being imported somewhere
declare module 'firebase' {
  const firebase: any
  export = firebase
}

declare module 'firebase/*' {
  const content: any
  export = content
}
