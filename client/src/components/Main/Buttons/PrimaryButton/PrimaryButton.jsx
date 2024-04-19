const PrimaryButton = ({text}) => {
    return(
        <button className="
        bg-primary select-none px-6 py-4 rounded-full text-base text-primary_dark cursor-pointer border-none 
        hover:bg-primary_dark hover:text-primary hover:-translate-y-1 transition-transform
        ">{text}</button>
    )
}

export default PrimaryButton;