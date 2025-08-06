import Modal from '@/components/Modal';
import PhotoDEtails from '@/components/PageDeatails';
import React from 'react';

const PhotoModal = ({params: {id,lang}}) => {
    return (
        <Modal>
            <PhotoDEtails id={id} lang={lang} />
        </Modal>
    );
};

export default PhotoModal;