'use client'

import React from 'react';

import {ReactGoogleReviews} from "react-google-reviews";
import ReviewBox from "@/templates/components/ReviewBox";

type ReviewsSectionProps = {
    featurableAPIKey: string;
};

function ReviewsSection(
    {
        featurableAPIKey = '',
    }: ReviewsSectionProps,
) {

    return (
        <ReactGoogleReviews layout="custom" featurableId={featurableAPIKey} renderer={(reviews) => {
            return (
                <div className="reviews-section__row">
                    {reviews.slice(0, 3).map(({reviewId, reviewer, comment}) => {
                        const cleanedComment = comment.replace(/\(Translated by Google\)(.*?)\(Original\)/is, '').trim();
                        console.log('Original Comment:', comment);
                        console.log('Cleaned Comment:', cleanedComment);

                        return (
                            <div key={reviewId}>
                                <ReviewBox personNickname={reviewer.displayName}
                                           personReview={cleanedComment}
                                           personPhotoURL={reviewer.profilePhotoUrl}/>
                            </div>
                        )
                    })}
                </div>
            );
        }}/>
    );
}

export default ReviewsSection;