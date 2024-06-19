import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
    return Array(cards)
        .fill(0)
        .map((x, i) => 
            <div key={i} className="rounded-xl h-72 w-96 min-w-sm w-md max-w-lg overflow-hidden text-xl bg-white dark:bg-primary_dark/5 shadow-md">
                <div className="h-full flex flex-col">
                    <Skeleton className="h-32 w-full" />
                    <div className="p-4 flex flex-col gap-2 grow">
                        <header>
                            <h2>
                                <Skeleton />
                            </h2>
                        </header>
                        <div className="grow">
                            <p>
                                <Skeleton height={14} count={2} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default CardSkeleton;

// <div className="group hover:cursor-pointer rounded-xl h-72 w-96 min-w-sm w-md max-w-lg overflow-hidden text-xl bg-white dark:bg-primary_dark/5 shadow-md">
//     <div className="h-full flex flex-col">
//         <img
//             className="cardImage object-cover h-32 w-full"
//             src={`${course.imageUrl}`}
//             alt=""
//         />
//         <div className="wrap text-start p-4 flex flex-col  gap-2 grow">
//             <div className="flex justify-between">
//                 <header>
//                     <h2 className="text-xl font-bold">{course.title}</h2>
//                 </header>
//             </div>
//             <div className="description grow">
//                 <p className="text-sm flex">{course.description}</p>
//             </div>
//             <div className="wrap flex justify-between items-center mt-auto">
//                 <div className="notification">
//                     <span className="text-xs text-accent tracking-tighter p-1 bg-accent/20 dark:text-accent_dark dark:bg-accent_dark/20 rounded-md select-none">
//                         FREE THIS MONTH
//                     </span>
//                 </div>
//                 <span className="text-transparent text-sm p-1 group-hover:text-accent dark:group-hover:text-accent_dark rounded-md transition duration-150 ease-in-out">
//                     Start now
//                 </span>
//             </div>
//         </div>
//     </div>
// </div>;
