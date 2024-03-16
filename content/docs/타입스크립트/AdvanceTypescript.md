---
title: "Advanced Typescript: Using Generics"
date: 2024-03-16
---
## Generics with Template Literals
```ts
type Book = {
	author: string;
	title: string;
	price: number;
}

type ActionTypes = `update-${keyof Book};`

type Actions<T, K extends keyof T & string> = {
	type: `update-${K}`,
	payload: T[K]
}

// Actions<Book, 'price'>
// 
// @example
// {
//   type: 'update-price';
//   payload: string;
// }
type UpdateAuthorAction = Actions<Book, 'author'>

// Actions<Book, 'price'>
// 
// @example
// {
//   type: 'update-price';
//   payload: number;
// }
type UpdateTitleAction = Actions<Book, 'price'>
```

## Generics with Create-Context
```ts
import React from 'react';

export const createContext = <T extends {}>() => {
	const context = React.createContext<T | undefiend>(undefined);

	const useContext = () => {
		const contextValue = React.useContext(context);

		if (contextValue === undefined) {
			throw new Error('Error');
		}
		
		return contextValue
	}

	return [useContext, Context.Provider] as const
}


// using
const [useContext, ContextProvider] = createContext<YourType>();

// PropsWithChildren -> import { PropsWithChildren } from 'react';
export const SomeProvider = ({ children }: PropsWithChildren) => {
	// your statement value here
	return (
		<ContextProvider value={value}>
			{children}
		</ContextProvider>
	)
}

export const useYourContext = () => {
	const { yourValue } = useContext();
	
	return youtValue
}

export const useYourAction = () => {
	const { action } = useContext();

	return action;
}
```

## Another Type Helper ( Conditional PropType )
```ts
import { ChangeEventHandler } from 'react';

type TightProps<T extends Record<string, unknown>> = T | OptionalProps<T>;

type OptionalProps<T extends Record<string, unknown>> = Partial<Record<keyof T, undefined>>;

type InputProps = TightProps<{
	value: string;
	onChange: ChangeEventHandler;
} & {
	label: string;
}>

const Input = ({label, ...props}: InputProps) => {
	return (
		<div>
			<label>{label}</label>
			<input {...props} />
		</div>
	)
}

// using
function App(){
	return (
		<div>
			<Input label="Name" value="value" onChange={() => {}} />
			<Input label="Name" />
			// Error
			<Input label="Name" value="value" />
			// Error
			<Input label="Name" onChange={() => {}} />
		</div>
	)
}
```

## Reconsidering Generics
```ts
export type PopupProps = {
	isOpen: boolean;
} & (
  | {
	  variant: "with-controls";
	  label: string;
	  onClick: () => void;
    }
  | {
	  variant: "no-controls";
    }
)

export const ...Component


// using
function App(){
	return (
		<>
			<Popup isOpen variant="with-controls" label="click me" onClick={() => {}} />
			<Popup isOpen variant="no-controls" />
			// Error
			<Popup isOpen variant="with-controls" />
			// Error
			<Popup isOpen variant="without-controls" onClick={() => {}} />
		</>
	)
}
```

## Hook With Generics ( useLocalStorage )
```ts
const useLocalStorage = <T,>(identifier: string) => {
	const get = (key: string): T | null => {
		return JSON.parse(window.localStorage.getItem(key + identifier) || "null");
	}

	const set = (key: string, value: T) => {
		window.localStorage.setItem(key + identifier, JSON.stringify(value));
	};

	return { get, set }
}
```

## Higher Order components ( withMousePosition )
```ts
type DisplayMouseMoveProps = {
	x: number;
	y: number;
	onMouseMove: MouseEventHandler;
}

const withMousePositions = <T extends {}>(Component: DisplayMouseMoveProps) => (props: Omit<T, keyof DisplayMouseMoveProps>) => {
	const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });
	
	const updatePosition = useCallback<MouseEventHandler>((e) => {
		// utils
		const { x, y } = getPosition(event);
		setPosition({ x, y});
	}, [setPosition])

	return (
		<Component {...props as T} x={x} y={y} onMouseMove={updatePosition} />
	)
}

// using
function App(){
	const Wrapper = withMouseMove(DisplayMouseMove);
	
	return (
		<div>
			<Wrapper />
		</div>
	)
}
```

