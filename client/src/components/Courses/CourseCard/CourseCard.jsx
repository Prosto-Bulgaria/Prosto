const CourseCard = () => {
    return(
        <div className="rounded-xl h-72 min-w-sm w-md max-w-lg overflow-hidden text-xl bg-primary/5 dark:bg-primary_dark/5">
            <img className="cardImage object-cover w-full max-w-full max-h-44" src="https://ictskillnet.ie/wp-content/uploads/2023/09/Software-Development-courses-with-ICT-Skillnet.png" alt="" />
            <div className="container">
                <header><h2 className="text-xl text-text dark:text-text_dark">Title</h2></header>
                <div className="description">
                    <p className="text-sm text-ellipsis text-text dark:text-text_dark">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam cum adipisci natus aliquam fuga doloremque, odio eius deserunt minima eum vel iste doloribus, totam accusamus autem? Voluptatum quod necessitatibus dignissimos esse pariatur. Veritatis modi quaerat molestias blanditiis, culpa nesciunt nihil?</p>
                </div>
            </div> 
        </div>
    )
}

export default CourseCard;