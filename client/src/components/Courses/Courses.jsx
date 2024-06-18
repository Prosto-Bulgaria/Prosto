import CourseCard from "./CourseCard/CourseCard";

const Courses = () => {
    return (
        <div className="courses container mx-auto max-w-screen-lg pt-6 pb-10 px-3">
            <div className="border-b-2 border-primary_dark/20 pb-2 mb-6 text-start">
                <h1 className="text-3xl text-text dark:text-text_dark font-bold tracking-tighter">Courses</h1>
            </div>
            <ul className="catalog grid grid-cols-2 gap-x-8 gap-y-6">
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
            </ul>
        </div>
    );
};

export default Courses;
