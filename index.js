document.getElementById('downloadResume').addEventListener('click', function() {
    // Replace 'your_resume_filename.pdf' with the actual filename of your resume
    var resumeUrl = 'file:///C:/rohit/rohit/rohitsinharoy.pdf';

    // Create an anchor element
    var downloadLink = document.createElement('a');

    // Set the download link's href to the resume URL
    downloadLink.href = resumeUrl;

    // Set the download attribute with the desired filename
    downloadLink.download = 'Rohit_Sinha_Resume.pdf';

    // Append the link to the document
    document.body.appendChild(downloadLink);

    // Trigger a click on the link to start the download
    downloadLink.click();

    // Remove the link from the document after the download
    document.body.removeChild(downloadLink);
});
