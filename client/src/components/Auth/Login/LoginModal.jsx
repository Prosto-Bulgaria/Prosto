import { useRef, useState } from "react";
import Login from "./Login";


const LoginModal = ({ clickElement, isAuth }) => {
    const [isPop, setPop] = useState(false);
    const dialogRef = useRef();
    
    const clickElementStyles = clickElement.props.className;
    const clickElementText = clickElement.props.children;

    const closeDialog = () => {
        dialogRef.current?.close();
    };
    
    return (
        <div>
            <clickElement className={`${clickElementStyles}`}
                onClick={() => {
                    if(!isAuth){
                        dialogRef.current?.showModal();
                        console.log(isPop);
                        setPop(true);
                    }
                }}
            >{clickElementText}</clickElement>
            <dialog className="rounded-xl" ref={dialogRef}>
                <Login onSuccess={closeDialog}></Login>
            </dialog>
        </div>
    );
};

export default LoginModal;
