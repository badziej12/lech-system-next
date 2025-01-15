import React from 'react';

import '../../scss/components/ReviewBox.scss';
import Image from "next/image";

type ReviewBoxProps = {
    personNickname: string;
    personReview: string;
    personPhotoURL: string;
};

function ReviewBox(
    {
        personNickname = '',
        personReview = '',
        personPhotoURL = '',
    }: ReviewBoxProps,
) {
    return (
        <div className="ReviewBox">
            <div className="ReviewBox__content">
                <div className="ReviewBox__heading">
                    <div className="ReviewBox__avatar">
                        <Image src={`/api/proxy-image?url=${personPhotoURL}`} width={48} height={48} alt="Awatar użytkownika"/>
                    </div>
                    <h3>{personNickname}</h3>
                </div>
                <div className="ReviewBox__copy">
                    <p>
                        {personReview}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ReviewBox;