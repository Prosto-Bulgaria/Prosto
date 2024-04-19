const SecondaryButton = ({text}) => {
    return(
        <button className="
        bg-secondary_dark select-none px-6 py-4 rounded-full text-base cursor-pointer border-none
        hover:bg-secondary hover:text-secondary_dark hover:-translate-y-1 transition-transform
        ">{text}</button>
    )
}

export default SecondaryButton;