import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Navigation from "./components/Main/Navigation/Navigation";
import Footer from "./components/Main/Footer/Footer";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Theme from "./components/Main/Theme/Theme";
import Logout from "./components/Auth/Logout/Logout";

function App() {
    return (
        <>
            <AuthProvider>
                <Theme>
                    <div className="App bg-background dark:bg-background_dark flex flex-col min-w-screen min-h-screen overflow-x-hidden items-center text-center justify-between">
                        <Navigation />
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/courses" element={<Courses />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />}/>
                                <Route path="/logout" element={<Logout />} />
                            </Routes>
                        </main>
                        <Footer></Footer>
                    </div>
                </Theme>
            </AuthProvider>
        </>
    );
}

export default App;