import { useEffect } from "react";
import closeIcon from '../assets/icons/close.svg'


const CreatePostModal = ({modalVisibility,setModalVisibility}) => {



    return (
        <div className={modalVisibility}>
            <div className="modal-inner p-4 rounded-xl flex flex-col items-end">
                <button className="mb-2" onClick={()=>setModalVisibility('none')}><img src={closeIcon} width={40}></img></button>
                <section className="w-full h-full rounded-xl"> </section>
            </div>
        </div>
    );
}
 
export default CreatePostModal;