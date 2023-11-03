import { useEffect } from "react";

const CreatePostModal = ({modalVisibility,setModalVisibility}) => {


    return (
        <div className={modalVisibility}>
            <div className="modal-inner">
                <button onClick={()=>setModalVisibility('none')}>Close</button>
            </div>
        </div>
    );
}
 
export default CreatePostModal;