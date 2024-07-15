const Button = ({ text, type }) => {
    let primaryButton = (
        <p
            className="
        bg-primary text-text_dark hover:text-primary_dark w-40
        dark:bg-primary select-none px-6 py-4 rounded-full text-base dark:text-primary_dark cursor-pointer border-none 
        dark:hover:bg-primary_dark dark:hover:text-primary hover:-translate-y-1 transition-transform
        "
        >
            {text}
        </p>
    );

    let secondaryButton = (
        <p
            className="
        bg-secondary text-text_dark hover:text-secondary_dark w-40
        dark:bg-secondary_dark select-none px-6 py-4 rounded-full text-base cursor-pointer border-none 
        dark:hover:bg-secondary dark:hover:text-secondary_dark hover:-translate-y-1 transition-transform
        "
        >
            {text}
        </p>
    );

    return <>{type == "primary" ? primaryButton : secondaryButton}</>;
};

export default Button;
