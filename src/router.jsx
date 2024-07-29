import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./components/home";
import ArticlesPage from "./pages/articlesPage";
import ArticlePage from "./pages/articlePage";
import SignUp from "./pages/signUp";
import AddArticle from "./pages/addArticle";


  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: "/",
          element: <HomePage />,
        },
        {
          path: "/articles",
          element: <ArticlesPage />,
        },
        {
          path: "articles/:id",
          element: <ArticlePage />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: "/addarticle",
          element: <AddArticle/>
        },
 
 
      ],
    },
  ]);
  
  export default router;