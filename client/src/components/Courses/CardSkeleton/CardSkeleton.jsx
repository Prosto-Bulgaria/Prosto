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
