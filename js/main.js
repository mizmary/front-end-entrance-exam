let sliders = document.querySelectorAll(".slider");

function calcValue(slider){
  let valuePercentage = (slider.value / slider.max) * 100;
  slider.style.background = `linear-gradient(to right, #28d979 ${valuePercentage}%, #f0f0f0 ${valuePercentage}%)`;
}

sliders.forEach(slider => {
  slider.addEventListener('input', function(){
    calcValue(slider);
  });
  calcValue(slider);
});

document.getElementById('downloadPdf').addEventListener('click', () => {
  const {jsPDF} = window.jspdf;
  const content = document.querySelector('.cv');

  html2canvas(content).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'pt', 'a4');

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('download.pdf');
});
})