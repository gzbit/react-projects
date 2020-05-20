import React from 'react'
import FileUploaderPC from './PC-PresentationalComponent/FileUploaderPC'

type State = {
    dragging: boolean,
    file: File | null,
}

type Props = {}  // no props used here

class FileUploader extends React.Component<Props, State> {

    static counter = 0;
    fileUpdloaderInput: HTMLElement | null = null

    state = {
        dragging: false,
        file: null,
    }

    dragEventCounter = 0
    dragEnterListener = (e: React.DragEvent<HTMLDivElement>) => {

        this.overrideEventDefaults(e)
        this.dragEventCounter++
        if (e.dataTransfer.types && e.dataTransfer.types[0]) {
            this.setState({ dragging: true })  
        } else  if (e.dataTransfer.types && e.dataTransfer.types[0] === "Files") {
            this.setState({ dragging: true })  //for IE only
        }
    }

    dragLeaveListener = (e: React.DragEvent<HTMLDivElement>) => {
        this.overrideEventDefaults(e)
        this.dragEventCounter--
        if (this.dragEventCounter === 0) {
            this.setState({ dragging: false })
        }
    }

    dropListener = (e: React.DragEvent<HTMLDivElement>) => {
        this.overrideEventDefaults(e)
        this.dragEventCounter = 0
        this.setState({ dragging: false })
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            this.setState({ file: e.dataTransfer.files[0] })
        }
    }

    overrideEventDefaults = (e: Event | React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
    }

    onSelectFileClick = () => {
        this.fileUpdloaderInput && this.fileUpdloaderInput.click()
    }

    onFileChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            this.setState({ file: e.target.files[0] })
        }
    }

    componentDidMount() {
        window.addEventListener("dragover", (e: Event) => this.overrideEventDefaults(e))
        window.addEventListener("drop",     (e: Event) => this.overrideEventDefaults(e))    
    }

    componentWillUnmount() {
        window.removeEventListener("dragover", this.overrideEventDefaults)
        window.removeEventListener("drop",     this.overrideEventDefaults)
    }

    render() {
        return (
            <FileUploaderPC
                dragging={this.state.dragging}
                file={this.state.file}
                onSelectFileClick={this.onSelectFileClick}
                onDrag={this.overrideEventDefaults}
                onDragStart={this.overrideEventDefaults}
                onDragEnd={this.overrideEventDefaults}
                onDragOver={this.overrideEventDefaults}
                onDragEnter={this.dragEnterListener}
                onDragLeave={this.dragLeaveListener}
                onDrop={this.dropListener}
            >
                <input
                    ref={el => this.fileUpdloaderInput = el}
                    type="file"
                    className="file-uploader__input"
                    onChange={this.onFileChanged}
                />
            </FileUploaderPC>
        )
    }
}

export default FileUploader