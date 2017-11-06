import React from 'react';

const ImageModal = (props) => {
  let activeClass = '';
  if (props.show) {
    activeClass = 'is-active';
  }
  const handleOnClick = () => {
    console.log('dowload');
  };

  return (
    <div className={`modal  ${activeClass}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Image</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.onClose}
          />
        </header>
        <section className="modal-card-body has-text-centered">
          <img src={props.src} alt="" />
        </section>
        <footer className="modal-card-foot justify-flex-end">
          <a href={props.src} download="CanvasGeneratedImage" className="button is-success " >
            Download
          </a>
          <button className="button ">Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default ImageModal;
