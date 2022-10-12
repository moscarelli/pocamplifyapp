import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";


const GenericPdfDownloader = ({rootElementId , downloadFileName,buttonText}) => {

    // const downloadPdfDocument = () => {
    //     const input = document.getElementById(rootElementId);
    //     html2canvas(input)
    //         .then((canvas) => {
    //             //canvas.setAttribute('width', 1080);
    //             //canvas.setAttribute('height', 1920);
    //             const imgData = canvas.toDataURL('image/png');
    //             const pdf = new jsPDF();
    //             pdf.addImage(imgData, 'JPEG', 0,0);                
    //             pdf.save(`${downloadFileName}.pdf`);
    //         })
    // }

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
        html2canvas(input).then((canvas)=>{           

                //Returns the image data URL, parameter: image format and clarity (0-1)
                var pageData = canvas.toDataURL('image/png', 1.0);

                //Default vertical direction, size ponits, format a4[595.28,841.89]
                var pdf = new jsPDF('p', 'pt', 'a4');

                //Two parameters after addImage control the size of the added image, where the page height is compressed according to the width-height ratio column of a4 paper.
                pdf.addImage(pageData, 'JPEG', 0, 0, 595.28, 592.28/canvas.width * canvas.height );

                pdf.save('stone.pdf');            
        })
    }
     
    return <button onClick={downloadPdfDocument}>{buttonText}</button>

}

export default GenericPdfDownloader;