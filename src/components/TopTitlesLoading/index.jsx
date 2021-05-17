import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function TopTitlesLoading() {
    return (
        <>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={536}/>
            </SkeletonTheme>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={536}/>
            </SkeletonTheme>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={536}/>
            </SkeletonTheme>
        </>
    )
}
