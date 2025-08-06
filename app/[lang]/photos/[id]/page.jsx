import React from 'react';
import PhotoDeatails from '@/components/PageDeatails';

const page = ({ params: { id, lang } }) => {
    return (
        <div>
            <PhotoDeatails id={id} lang={lang} />
        </div>
    );
};

export default page;