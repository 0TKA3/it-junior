import noImage from '../assets/images/noimage.jpg'
const Body = () => {
    return (
        <>
            <div className="main-body parent mt-5">
                <div className="block sticky sidebar"></div>
                <div className="block central-block">
                    <div className="central-block-create-post w-full h-20 bg-slate-200 rounded-2xl flex p-5 gap-4">
                        <div className="nav-profile-picture w-10 h-10 rounded-md bg-cyan-300 flex items-center justify-center mr-3">
                            <a href="#">P</a>
                        </div>
                        <div className="central-block-create-post w-4/6">
                            <input className="central-block-create-post-input w-full h-11 rounded-md p-3 outline-none" type="text" placeholder="О чем пишем?"/>
                        </div>
                        <div className="central-block-create-post-button">
                            <button className="h-11 bg-white p-0 rounded-lg pl-3 pr-3 font-medium">Создать пост</button>
                        </div>
                    </div>
                    <div className="central-block-posts mt-5 w-full">
                        <div className="central-block-post h-52 w-full p-5 rounded-2xl">
                            <img src={noImage}  alt="#" className="central-block-post-image w-full h-full rounded-2xl" />
                            <div className="post-right-side flex flex-col">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="block sticky rightbar"></div>
            </div>
        </>
    );
}
 
export default Body;