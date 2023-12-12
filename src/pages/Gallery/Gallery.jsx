const Gallery = () => {
  return (
    <div className="iframe-container">
      <iframe
        src="https://www.pictorem.com/gallery/Reggie.S"
        // allowfullscreen
        frameborder={1}
        width={"100%"}
        height={"100%"}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
      ></iframe>
    </div>
  );
};

export default Gallery;
