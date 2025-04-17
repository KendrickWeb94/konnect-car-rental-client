import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./routes/home";
import { YourCars } from "./routes/your-cars";
import { DashboardLayout } from "./components/layouts/dashboard-layout";
import { Login } from "./routes/login";
import { Register } from "./routes/register";
import { Customers } from "./routes/customers";
import { MyProfile } from "./routes/my-profile";
import { PrivateRoute } from "./controllers/private-routes";
import { ThemeProvider } from "./components/theme/theme-provider";
import { Message } from "./routes/message";
import { Reviews } from "./routes/reviews";
import { AuthLayout } from "./components/layouts/auth-layout";
import { OnBoarding } from "./routes/onboarding";
import { ForgotPassWord } from "./components/auth/forgot-password";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Home />
              </DashboardLayout>
            }
          />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route
            path="/cars"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <YourCars />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/customers"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <Customers />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/my-profile"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <MyProfile />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/reviews"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <Reviews />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <Message />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path="/register"
            element={
              <AuthLayout>
                <Register />
              </AuthLayout>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <AuthLayout>
                <ForgotPassWord />
              </AuthLayout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
