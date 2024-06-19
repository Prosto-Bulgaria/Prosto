const CreateCourse = () => {
    const createHandler = (e) => {
        e.preventDefault();

        let { title, description, image} = Object.fromEntries(
            new FormData(e.currentTarget)
        );
    };

    return (
        <section id="create-course-page" className="create-course">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-primary_dark/5 rounded-lg border-2 border-primary/5">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark:text-text_dark text-text select-none">
                        Create course
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form
                        className="space-y-6 w-80"
                        id="create-course-form"
                        onSubmit={createHandler}
                        method="POST"
                    >
                        <div>
                            <div className="flex">
                                <label htmlFor="title" className="form-label">
                                    Course title
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    autoComplete="title"
                                    required
                                    placeholder="Your title here... "
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="description"
                                    className="form-label"
                                >
                                    Description
                                </label>
                            </div>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    type="description"
                                    autoComplete="current-description"
                                    required
                                    rows={5}
                                    placeholder="Your description here..."
                                    className="form-input"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="image" className="form-label">
                                    Image
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    autoComplete="current-image"
                                    required
                                    rows={5}
                                    placeholder="Your image here..."
                                    className="form-input"
                                />
                            </div>
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Create"
                                className="form-button"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CreateCourse;
