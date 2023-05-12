## Install & Start

⚠️ Using [Yarn Package Manager](https://yarnpkg.com) is recommended over `npm`.

### Install dependencies

```shell
yarn
```

### Run frontend app in develop mode

```shell
yarn dev
```

### Run Storybook in develop mode

```shell
yarn storybook
```

## Libraries and technologies used

- vite
- react
- typescript
- react-router
- jest
- storybook
- reduxjs toolkit (rtk query + slices + listeners middleware - depending on specific project ex. listeners middleware or slices could be removed)
- tailwindcss
- clsx
- prettier
- eslint
- husky + lint-staged (precommit hooks)
- svgr

## Rules

### Files structure

#### Keep files structure as flat as possible

- assets - svg files used directly as svg
- components - directory with reusable components and stories for them (ex. `Button.tsx` and `Button.stories.tsx`)
- icons - .tsx icons will be generated here automatically by `svgr`
  - svg - svg icons (.tsx icons are generated based on these svgs). To generate icons run `yarn icons`.
- layout - layout connected components
- logic - reusable logic
- pages
  - page-name - all the files connected with this view like selectors, slices, api, components should be located here. In case there are plenty of specific components, it's ok to create additional components directory inside.
- some-app-part-here - in case there is part of an app which isn't a page itselft, but has it's own logic, view put it in `module-name` directory

### Files and directories naming

- components - `PascalCase`
- svg files - `snake_case`
- other files (logic, selectors etc.) - `camelCase`
- directory - `kebab-case`

### Other rules

- use `type` (in favour of `interface`) wherever possible
- keep component props type right above the component, ex.

```
type ButtonProps = { ... }
const Button = (props: ButtonProps)
```
