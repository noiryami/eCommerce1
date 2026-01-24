import { lazy, Suspense } from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

//layouts
const MainLayout = lazy(()=>import('../layouts/mainLayout/MainLayout'));
const ProfileLayout = lazy(()=>import('../layouts/ProfileLayout/ProfileLayout'));

//Components 
import { PageSuspenseFallback,LottieHandler  } from '@components/feedback';

//pages
const Home = lazy(()=>import('../pages/Home')) ;
const Categories = lazy(()=>import('../pages/Categories')) ;
const AboutUs = lazy(()=>import('../pages/AboutUs')) ;
const Register = lazy(()=>import('../pages/Register')) ;
const Login = lazy(()=>import('../pages/Login')) ;
const Products = lazy(()=>import('../pages/Products')) ;
const Cart = lazy(()=>import('../pages/Cart')) ;
const Wishlist = lazy(()=>import('../pages/Wishlist')) ;
const Account = lazy(() => import('../pages/Account')); 
const Orders = lazy(() => import('../pages/Orders'));

const GymProducts = lazy(()=>import('../pages/StaticProducts/GymProudcts')) ;
const BooksProducts = lazy(()=>import('../pages/StaticProducts/BooksProudcts')) ;
const ElectronicsProducts = lazy(()=>import('../pages/StaticProducts/ElectronicsProdcts')) ;

//error
import Error from '@pages/Error';

//protect routes
import ProtectedRoute from '@components/Auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div style={{ marginTop: "10%" }}>
            <LottieHandler
              type="loading"
              message="loading please wait...."
            />{" "}
          </div>
        }
      >
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFallback>
            <Home />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "cart",
        element: (
          <PageSuspenseFallback>
            <Cart />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            <PageSuspenseFallback>
              <Wishlist />
            </PageSuspenseFallback>
          </ProtectedRoute>
        ),
      },
      {
        path: "categories",
        element: (
          <PageSuspenseFallback>
            <Categories />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "categories/products/:prefix",
        element: (
          <PageSuspenseFallback>
            <Products />
          </PageSuspenseFallback>
        ),
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "category not found",
              status: 400,
            });
          }

          return true;
        },
      },
      {
        path: "categories/products/electronics",
        element: (
          <PageSuspenseFallback>
            <ElectronicsProducts />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "categories/products/gym",
        element: (
          <PageSuspenseFallback>
            <GymProducts />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "categories/products/books",
        element: (
          <PageSuspenseFallback>
            <BooksProducts />
          </PageSuspenseFallback>
        ),
      },

      {
        path: "about-us",
        element: (
          <PageSuspenseFallback>
            <AboutUs />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "login",
        element: (
          <PageSuspenseFallback>
            <Login />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "register",
        element: (
          <PageSuspenseFallback>
            <Register />{" "}
          </PageSuspenseFallback>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <PageSuspenseFallback>
              <ProfileLayout />
            </PageSuspenseFallback>
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: (
              <PageSuspenseFallback>
                <Account />
              </PageSuspenseFallback>
            ),
          },
          {
            path: "orders",
            element: (
              <PageSuspenseFallback>
                <Orders />
              </PageSuspenseFallback>
            ),
          },
        ],
      },
    ],
  },
]);
const AppRouter = () => {
  return (
       <RouterProvider router={router} />
  )
}

export default AppRouter
