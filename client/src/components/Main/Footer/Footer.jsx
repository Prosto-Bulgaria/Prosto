import "./Footer.css";

const Footer = () => {
    let year = new Date();

    return (
        <footer className="mt-auto">
            <p className="footer text-accent_dark">
                &copy; {year.getFullYear()} - Prosto - All Rights Reserved.
            </p>
        </footer>
    );
};
export default Footer;
