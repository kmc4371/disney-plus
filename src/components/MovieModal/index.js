import React, { useRef } from "react";
import "./MovieModal.css";
import useOnClickOutside from "../../hooks/useOnClickOutSide.js";

const MovieModal = ({
                      backdrop_path,
                      title,
                      overview,
                      name,
                      release_date,
                      first_air_date,
                      vote_average,
                      setModalOpen
                    }) => {
  const ref = useRef();

  useOnClickOutside(ref,() => {
    setModalOpen(false)
  })


  // const handleCloseModal = (event) => {
  //   // 클릭 이벤트가 모달 내부에서 발생한 경우는 종료하지 않음
  //   if (modalRef.current && modalRef.current.contains(event.target)) {
  //     return;
  //   }
  //   // 모달 종료
  //   setModalOpen(false);
  // };
  

  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal" /*onClick={handleCloseModal}*/>
        <div className="modal" ref={ref}>
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>
          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal__poster-img"
            className="modal__poster-img"
          />
          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user-perc">100% for you</span>{" "}
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview">평점: {vote_average}</p>
            <p className="modal__overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;