
const Footer = () => {
    let year = new Date();

    return (
        <footer className="mt-auto">
            <p className="footer text-accent_dark/60 select-none items-center justify-center flex mb-0 h-8 w-screen text-base">
                &copy; {year.getFullYear()} - Prosto - All Rights Reserved.
            </p>
        </footer>
    );
};
export default Footer;
