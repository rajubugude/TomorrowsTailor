// // useEffect(() => {
// //   const convertSvgToImage = async () => {
// //     try {
// //       const svg = svgRef2.current;
// //       const visibleWidth = 800;
// //       const visibleHeight = 1000;

// //       // Split the grid into two parts vertically
// //       const imageDataUrl = await getSvgImage(svg, 0, 0, visibleWidth, visibleHeight);

// //       setImageDataUrlJPEG(imageDataUrl);
// //     } catch (error) {
// //       console.error('Error converting SVG to image:', error);
// //     }
// //   };

// //   convertSvgToImage();
// // }, []);

// //   useEffect(()=>{
// //     generateFrontSVG()
// //   })
// //  const generatePDF =async () => {
// //   const doc = new jsPDF('p', 'mm', 'a4');
// //   console.log(svgRef2)
// //   const svgr = svgRef2.current;
// //   console.log(svgr)
  

// //   // Convert SVG string to image data URL

// //   // Define common styles
// //   const commonStyle = {
// //     font: 'helvetica',
// //     fontStyle: 'normal',
// //     fontWeight: 'normal',
// //     fontSize: 12,
// //     lineHeight: 1.5,
// //     textColor: '#000000',
// //     borderColor: '#000000',
// //     borderWidth: 0.5 // New: Border width for the entire document
// //   };

// //   // Add border for the entire document
// //   doc.setDrawColor(commonStyle.borderColor);
// //   doc.setLineWidth(commonStyle.borderWidth);
// //   doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'S'); // S: Stroke

// //   // Add heading with cursive font and pink color
// //   const headingStyle = {
// //     font: 'times', // Change font to cursive
// //     fontStyle: 'italic', // Set font style to italic
// //     fontSize: 20, // Increase font size
// //     textColor: '#ff69b4' // Pink color
// //   };
// //   doc.setFont(headingStyle.font, headingStyle.fontStyle);
// //   doc.setFontSize(headingStyle.fontSize);
// //   doc.setTextColor(headingStyle.textColor);
// //   doc.text("Tomorrow's Tailor ", 70, 20); // Adjust position as needed

// //   // Add information about tomorrow's tailor
// //   doc.setFont(commonStyle.font, commonStyle.fontStyle, commonStyle.fontWeight);
// //   doc.setFontSize(16);
// //   doc.setTextColor(commonStyle.textColor);
// //   doc.text('Information about user customised values', 10, 40); // Adjust position as needed

// //   // Add customised values with borders and styling
// //   let yPos = 60; // Adjust starting position
// //   const labels = ['Waist', 'Hip', 'Waist to Hip', 'Body Rise', 'Waist to Floor', 'Trouser Bottom Width'];
// //   const keys = ['A', 'B', 'C', 'D', 'E', 'F'];
// //   const cellWidth = 80;
// //   const cellHeight = 15;

// //   labels.forEach((label, index) => {
// //     // Draw border for each cell
// //     doc.setDrawColor(commonStyle.borderColor);
// //     doc.setLineWidth(commonStyle.borderWidth);
// //     doc.rect(10, yPos + index * cellHeight, cellWidth, cellHeight, 'D');

// //     // Draw label
// //     doc.setFont(commonStyle.font, commonStyle.fontStyle, commonStyle.fontWeight);
// //     doc.setFontSize(commonStyle.fontSize);
// //     doc.setTextColor(commonStyle.textColor);
// //     doc.text(label, 12, yPos + index * cellHeight + 8);

// //     // Draw customised value
// //     doc.setFont(commonStyle.font, 'normal', commonStyle.fontWeight);
// //     doc.text(customisedvalues[keys[index]], 95, yPos + index * cellHeight + 8);
// //   });

// //   // Add a new page for the SVG image
// //   doc.addPage();
// //     if (imageDataUrlJPEG) {
// //       const scaleFactor = getScaleFactor(imageDataUrlJPEG, 210, 297); // Dimensions of A4 paper in mm
// //       doc.addImage(imageDataUrlJPEG, 'JPEG', 0, 0, 210, 297, null, 'NONE', 0, scaleFactor);
// //     }

// //   // Convert SVG data URL to image and add it to the PDF
// //   // const img = new Image();
// //   // img.onload = function () {
// //   //    doc.addImage(dataurlsvg, 'PNG', 10, 10, 180, 150); 
// //   //   doc.save('tailor_info.pdf'); // Save the PDF
// //   // };
// // };

// // const getScaleFactor = (imageDataUrl, widthMM, heightMM) => {
// //   const img = new Image();
// //   img.src = imageDataUrl;
// //   const imgWidth = img.width;
// //   const imgHeight = img.height;
// //   const scaleWidth = widthMM / (imgWidth / 25.4); // Convert width from pixels to mm
// //   const scaleHeight = heightMM / (imgHeight / 25.4); // Convert height from pixels to mm
// //   return Math.min(scaleWidth, scaleHeight);
// // };


// // const getSvgImage = (svg) => {
// //   return new Promise((resolve, reject) => {
// //     try {
// //       const svgString = new XMLSerializer().serializeToString(svg);
// //       const img = new Image();
// //       img.onload = () => {
// //         const canvas = document.createElement('canvas');
// //         const context = canvas.getContext('2d');
// //         // Use the SVG's computed bounding box to get its dimensions
// //         const svgBoundingBox = svg.getBoundingClientRect();
// //         canvas.width = svgBoundingBox.width;
// //         canvas.height = svgBoundingBox.height;
// //         context.drawImage(img, 0, 0, canvas.width, canvas.height);
// //         resolve(canvas.toDataURL('image/jpeg', 0.8));
// //       };
// //       img.src = 'data:image/svg+xml;base64,' + btoa(svgString);
// //     } catch (error) {
// //       reject(error);
// //     }
// //   });
// // };

//   const generateFrontSVG = () => {
//     // Create a temporary container to render the SVG
//     const container = document.createElement('div');

//     // Use createRoot to render the SVG inside the container
//     const root = createRoot(container);
//     root.render(
//       <svg width="800" height="1000" viewBox="-0 -115 130 240.0034" baseProfile="full" xmlns="http://www.w3.org/2000/svg" transform="scale(1, -1)" style={{backgroundColor:"whitesmoke" ,borderRadius:"5rem", marginTop:"100px"}}>
//         {generateFrontview()}
//       </svg>
//     );

//     // Log the output of generateFrontview
//     console.log('Generated SVG content:', generateFrontview());

//     // Get the SVG element from the container
//     const svgElement = container.firstChild;

//     // Check if svgElement is a valid Node
//     if (!(svgElement instanceof Node)) {
//       console.error('Invalid SVG element:', svgElement);
//       return null;
//     }

//     // Serialize the SVG to string
//     const svgString = new XMLSerializer().serializeToString(svgElement);

//     return 'data:image/svg+xml;base64,' + btoa(svgString);
//   };