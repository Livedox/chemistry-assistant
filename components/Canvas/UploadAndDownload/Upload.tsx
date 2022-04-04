import { MutableRefObject, useRef, useState } from "react";
import { CustomOrganicFormula } from "../classes";
import uploadAndDownload from "./uploadAndDownload";

interface Props {
    isUpload: boolean;
    toggleUpload: () => void;
    addCustomFormula: (formula: CustomOrganicFormula) => void;
}

function Upload({isUpload, toggleUpload, addCustomFormula}:Props) {
    const fileRef = useRef(null);
    const [fileName, setFileName] = useState("");


    const getFile = (ref: MutableRefObject<null>) => {
        const input = ref!.current! as HTMLInputElement;
        if(!input.files) return null;
        if(!input.files.length) return null;
        return input.files[0];
    }


    const updateFileName = () => {
        const file = getFile(fileRef);
        file && setFileName(file.name);
    }


    const upload = () => {
        toggleUpload();
        const file = getFile(fileRef);
        file && uploadAndDownload.upload.run(file, (formula: CustomOrganicFormula) => {
            addCustomFormula(formula);
        });
    }
    return(
        <div className={"modal-upload-canvas " + (isUpload ? "modal-upload-canvas_open" : "")} onClick={toggleUpload}>
            <div className="modal-upload-canvas__inner" onClick={(e) => e.stopPropagation()}>
                <div>
                    <input
                      ref={fileRef}
                      type="file"
                      className="modal-upload-canvas__input-file"
                      id="modal-upload-canvas__input-file"
                      accept="image/*"
                      onChange={updateFileName}/>
                    <label htmlFor="modal-upload-canvas__input-file" className="modal-upload-canvas__custom-input-file">
                        {fileName || "Выберите файл"}
                    </label>
                </div>
                <div className="modal-upload-canvas__buttons-container">
                    <button className="modal-upload-canvas__cancel-button" onClick={toggleUpload}>Отмена</button>
                    <button className="modal-upload-canvas__add-button" onClick={upload}>Добавить</button>
                </div>
            </div>
        </div>
    );
}

export default Upload;