const Button = ({ text, type }) => {
    let primaryButton = (
        <button
            className="
        bg-primary text-text_dark hover:text-primary_dark
        dark:bg-primary select-none px-6 py-4 rounded-full text-base dark:text-primary_dark cursor-pointer border-none 
        dark:hover:bg-primary_dark dark:hover:text-primary hover:-translate-y-1 transition-transform
        "
        >
            {text}
        </button>
    );

    let secondaryButton = (
        <button
            className="
        bg-secondary text-text_dark hover:text-secondary_dark
        dark:bg-secondary_dark select-none px-6 py-4 rounded-full text-base cursor-pointer border-none
        dark:hover:bg-secondary dark:hover:text-secondary_dark hover:-translate-y-1 transition-transform
        "
        >
            {text}
        </button>
    );

    return <>{type == "primary" ? primaryButton : secondaryButton}</>;
};

export default Button;
