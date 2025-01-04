import React from 'react';

import '../../scss/components/ReviewBox.scss';

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
                        <img src={personPhotoURL} alt="Awatar użytkownika"/>
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