import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";
import App from "../../App";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PageToRead from "../pages/pageToRead/PageToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: () => fetch("/BooksData.json"),
        Component: Home,
      },
      {
        path: "/listedBooks",
        loader: () => fetch("/BooksData.json"),
        Component: ListedBooks,
      },
      {
        path: "/pagesToRead",
        loader: () => fetch("/BooksData.json"),
        Component: PageToRead,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/BooksData.json"),
        Component: BookDetails,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
