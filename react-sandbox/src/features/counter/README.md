# Counter Feature

Simple example feature demonstrating an internal counter component.

## Purpose

The `Counter` component provides a minimal example of local state management in React using `useState`. It's intended as a learning/demo feature and a starting point for building small UI widgets.

## Usage

Import and render the `Counter` component where needed:

```tsx
import { Counter } from "@/features/counter/components/Counter";

export default function Page() {
	return <Counter />;
}
```

## API

- Props: none — the component manages its own internal `count` state.
- Export: `Counter` (named export)

## Behavior

- Shows the current count.
- Buttons: `Increment` (+1), `Decrement` (-1), `Reset` (back to 0).

## Files

- `components/Counter.tsx` — main component implementation
- `README.md` — this file

## Dev notes / Extension ideas

- Add props such as `initialValue?: number` and `step?: number`.
- Add unit/interaction tests for button behavior and edge cases.
- Replace buttons with accessible custom controls and add keyboard support.

## See also

- Shared `Button` component used by `Counter`: `src/shared/components/button.tsx`


