import { PhotoIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';
import { Link } from "react-router-dom";
export default function UploadSelect(){

    // assign file input to reference variable
    const fileInputRef = useRef(null);
    
    function handleSelectPhoto(){
        // trigger click on hidden file input
        if(fileInputRef.current){
            fileInputRef.current.click();
        }
    }
    function handleFileChange(event){
        // handle file selection logic here
        const file = event.target.files[0];
        console.log(file);
    }

    return(
        <div className = "flex flex-col justify-center items-center gap-8 p-8 h-full">
            <h2 className = ""> Upload a New Look </h2>
            <div className = "flex flex-col justify-center items-center border border-[#b08968] rounded-md w-11/12 max-w-md min-h-[40vh] gap-4">
                <PhotoIcon className=" h-8 w-8" />

                {/* create a hidden file input that is triggered when the button is clicked */}
                <input onChange={handleFileChange} type="file" ref={fileInputRef} className="hidden"></input>

                <button onClick={handleSelectPhoto} className="rounded-lg"> Select Photo </button>
            </div>

            <Link className="border border-[#b08968] rounded-xl px-4 py-2 inline-block text-black" to = "details"> Upload </Link>
             
        </div>
    );
}









            {/* <div className="flex items-center w-full my-4">
                <hr className="w-full border-t border-gray-400 my-4" /> 
                    <p className="text-black"> or </p>
                <hr className="w-full border-t border-gray-400 my-4" />
            </div>
            <button className="my-4"> Open Camera </button> */}