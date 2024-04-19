const Button = ({text, type}) => {

    let primaryButton = (
        <button className="
        bg-primary select-none px-6 py-4 rounded-full text-base text-primary_dark cursor-pointer border-none 
        hover:bg-primary_dark hover:text-primary hover:-translate-y-1 transition-transform
        ">{text}</button>
    )

    let secondaryButton = (
        <button className="
        bg-secondary_dark select-none px-6 py-4 rounded-full text-base cursor-pointer border-none
        hover:bg-secondary hover:text-secondary_dark hover:-translate-y-1 transition-transform
        ">{text}</button>
    )

    return(
        <>
            {
                type == "primary" ? primaryButton : secondaryButton
            }
        </>
    )
}

export default Button;