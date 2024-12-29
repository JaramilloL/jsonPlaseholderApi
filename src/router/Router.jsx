import { createBrowserRouter, Navigate } from "react-router-dom";
import Index from "../layout/Index";
import UsersPage from "../pages/UsersPage";
import UserMore from "../components/UserMore";
import PostPage from "../pages/PostPage";
import CommentsPage from "../pages/CommentsPage";
import AlbumsPage from "../pages/AlbumsPage";
import PhotosPage from "../pages/PhotosPage";
import TodoPage from "../pages/TodoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/users/:id",
        element: <UserMore />,
      },
      {
        path: "/post",
        element: <PostPage />,
      },
      {
        path: "/comments",
        element: <CommentsPage />,
      },
      {
        path: "/albums",
        element: <AlbumsPage />,
      },
      {
        path: "/photos",
        element: <PhotosPage />,
      },
      {
        path: "/todos",
        element: <TodoPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);
