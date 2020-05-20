import React from 'react'
import './FileUploaderPC.css'

type Props = {
    dragging: boolean,
    file: File | null,
    onSelectFileClick: () => void,
    onDrag: (e: React.DragEvent<HTMLDivElement>) => void,
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => void,
    onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void,
    onDragOver: (e: React.DragEvent<HTMLDivElement>) => void,
    onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void,
    onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void,
    onDrop: (e: React.DragEvent<HTMLDivElement>) => void,
}

const FileUploaderPC: React.FunctionComponent<Props>  = props => {
    const {
        dragging, file, onSelectFileClick, onDrag, onDragStart, 
        onDragEnd, onDragOver, onDragEnter, onDragLeave, onDrop 
    } = props

    let uploaderClasses = "file-uploader"
    if (dragging) {
        uploaderClasses += " file-uploader--dragging"
    }

    const fileName = file ? file.name : "No File Uploaded!"

    return (
        <div
            className={uploaderClasses}
            onDrag={onDrag}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
        >
            <div className="file=uploader__contents">
                <p className="file-uploader__file-name">{fileName}</p>
                <p>Drag & Drop File</p>
                <p>or</p>                
                <p onClick={onSelectFileClick}>Select File</p>
            </div>
            <div className="file-uploader__select">
                {props.children}
            </div>
            
        </div>
    )
}

export default FileUploaderPC