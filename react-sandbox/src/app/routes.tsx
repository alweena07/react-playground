import type { RouteObject } from "react-router-dom";
import { lazy } from "react";

const TodoPage = lazy(() => import("../features/todo").then(mod => ({ default: mod.TodoPage })));
const HomePage = lazy(() => import("../features/home").then(mod => ({ default: mod.Home })));

export const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/todo", element: <TodoPage /> },
];