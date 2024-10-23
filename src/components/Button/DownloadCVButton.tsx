const DownloadCVButton = () => {
  const handleDownload = () => {
    const pdfUrl = `${import.meta.env.BASE_URL}PedroRodrigues_CV.pdf`;

    window.open(pdfUrl, "_blank");
  };

  return (
    <button className="buttonCV" onClick={handleDownload}>
      <p className=" font-manrope font-bold text-sm md:text-xl">DOWNLOAD CV</p>
    </button>
  );
};

export default DownloadCVButton;
