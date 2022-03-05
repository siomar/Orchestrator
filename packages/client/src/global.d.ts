declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    [elemName: string]: JSX.Element;
  }
}
