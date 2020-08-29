import React, { Component, useState, useEffect } from "react";

//Importing Modal
import ModalVideo from "react-modal-video";

export default function ModalSection(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (stateVal) => {
    setIsOpen(stateVal);
  };

  useEffect(() => {
    if (props.modalOpen === true) {
      openModal(props.modalOpen);
    }
  });

  return (
    <>
      <ModalVideo
        channel={props.channel}
        isOpen={isOpen}
        videoId={props.videoId}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
