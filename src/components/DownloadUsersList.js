import React from 'react';
import { exportComponentAsPDF } from "react-component-export-image";

const DownloadButton = ({usedRef}) => {
    return (
        <div>
            <button onClick={() => exportComponentAsPDF(usedRef)}>
            Descarga la tabla
            </button>
        </div>
    )
}

export default DownloadButton;