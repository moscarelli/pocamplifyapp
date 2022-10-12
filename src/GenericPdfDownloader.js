import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";


const GenericPdfDownloader = ({rootElementId , downloadFileName,buttonText}) => {

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
        html2canvas(input)
            .then((canvas) => {
                //canvas.setAttribute('width', 1080);
                //canvas.setAttribute('height', 1920);
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0,0);                
                pdf.save(`${downloadFileName}.pdf`);
            })
    }

    return <button onClick={downloadPdfDocument}>{buttonText}</button>

}

export default GenericPdfDownloader;