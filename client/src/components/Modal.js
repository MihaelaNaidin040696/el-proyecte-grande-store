import classes from "./Modal.module.css";

export default function Modal({ setModal }) {
    function closeModal() {
        setModal(false);
        document.body.style.overflow = "visible";
    }

    return (

        <div onClick={()=>{closeModal(); }} className={classes.container}>
            <div className={classes.modalContainer}>REGELEEEEEEEE</div>
        </div>
    );
}
