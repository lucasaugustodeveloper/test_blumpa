export const imports = {
  'src/components/Input/input.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-input-input" */ 'src/components/Input/input.mdx'
    ),
}
