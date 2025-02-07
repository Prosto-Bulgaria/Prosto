import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Navigation from "./components/Main/Navigation/Navigation";
import Footer from "./components/Main/Footer/Footer";
import Theme from "./components/Main/Theme/Theme";
import Logout from "./components/Auth/Logout/Logout";
import CourseDetails from "./components/Courses/CourseDetails/CourseDetails";
import CreateCourse from "./components/Courses/CreateCourse/CreateCourse";

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
                                    <Route
                                        path="/courses"
                                        element={<Courses />}
                                    />
                                    <Route
                                        path="/logout"
                                        element={<Logout />}
                                    />
                                    <Route
                                        path="/courses/details/:detailsId"
                                        element={<CourseDetails />}
                                    />
                                    <Route
                                        path="/courses/create"
                                        element={<CreateCourse />}
                                    />
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
