import type { RouteObject } from "react-router-dom";
import { lazy } from "react";

const Login = lazy(() => import("@/features/login").then(mod => ({ default: mod.default })));
const TodoPage = lazy(() => import("@/features/todo").then(mod => ({ default: mod.TodoPage })));
const HomePage = lazy(() => import("@/features/home").then(mod => ({ default: mod.Home })));
const CounterPage = lazy(() => import("@/features/counter").then(mod => ({ default: mod.Counter })));
const SearchPage = lazy(() => import("@/features/search").then(mod => ({default: mod.SearchComponent})))

export const routes: RouteObject[] = [
  { path: "/login", element: <Login /> },
  { path: "/", element: <HomePage /> },
  { path: "/todo", element: <TodoPage /> },
  { path: "/counter", element: <CounterPage /> },
  { path: "/search", element: <SearchPage />},
];