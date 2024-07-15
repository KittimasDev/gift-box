'use client'
import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '@/public/lotti/auzpDjQ1iH.json'
import BirthdayLottie from '@/public/lotti/hbd.json'
import StayLottie from '@/public/lotti/stay.json'
import Animetion6 from '@/public/anime/animation_6.json'
import Animetion8 from '@/public/anime/animetion_8.json'


import styled, { css, keyframes } from 'styled-components'
import { theme } from "@/styles/theme"

export function Gift() {

    const [onClickPlay, setOnClickPlay] = useState(false)
    const [onReward, setOnReward] = useState(false)
    const [birthdayText, setBirthdayText] = useState(false)
    const [Delay, setDelay] = useState(false)

    useEffect(() => {
        if (onClickPlay == true) {
            setTimeout(() => {
                setOnReward(true)
            }, 2000)
        }
    }, [onClickPlay])

    useEffect(() => {
        if (onReward) {
            setTimeout(() => {
                setBirthdayText(true)
            }, 4000)
        }
    }, [onReward])

    useEffect(() => {
        if (onReward) {
            setTimeout(() => {
                setDelay(true)
            }, 2000)
        }
    }, [onReward])

    return (
        <div className="my-container">
            <Wrapper>
                <Birthday
                    isBirthdayText={birthdayText}
                >
                    <Lottie
                        loop={false}
                        animationData={BirthdayLottie}
                        play={birthdayText}
                        style={{ width: '100%', height: '100%' }}
                    />
                    {/* <div>
                        <div data-reward='flower-2'>
                            <Lottie
                                loop={true}
                                animationData={StayLottie}
                                play={birthdayText}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </div> */}
                    {
                        // Delay &&
                        // <div data-reward='flower-3'>
                        //     <Lottie
                        //         loop={true}
                        //         animationData={Animetion6}
                        //         play={birthdayText}
                        //         style={{ width: '100%', height: '100%' }}
                        //     />
                        // </div>
                    }
                    <div data-reward='flower-4'>
                        <Lottie
                            loop={true}
                            animationData={Animetion8}
                            play={birthdayText}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </Birthday>
                <WrapperGift
                    theme={theme}
                    onClickPlay={onClickPlay}
                    isBirthdayText={birthdayText}
                    onReward={onReward}
                >
                    <Lottie
                        loop={false}
                        onClick={() => setOnClickPlay(true)}
                        animationData={lottieJson}
                        play={onClickPlay}
                        style={{ width: '100%', height: '100%' }}
                    />

                </WrapperGift>
                <Reward onReward={onReward}>
                    <div data-reward='image-view'>
                        <img data-reward='image' src='/image/gift/reward.png' />
                    </div>
                    {/* <div data-reward='flower-5'>
                        <div>
                            ของรอนานหน่อยนะ
                        </div>
                        <div>
                            555+
                        </div>
                    </div> */}
                </Reward>
            </Wrapper>
        </div>
    )
}

export const Wrapper = styled.div`
    position: relative;
    max-width: 560px;
    margin: auto;
`

export const Birthday = styled.div`
    position: absolute;
    left: 50%;
    top: 10%;
    z-index: 99;
    transform: translate(-50%, -0%);
    display: ${(props) => props.isBirthdayText ? 'block' : 'none'};
    svg
    {
        scale:2;
        z-index: 9999;
    }
    [data-reward='flower-2']
    {
        position: absolute;
    }
    [data-reward='flower-3']
    {
        scale: 2;
        position: absolute;
    }
    [data-reward='flower-4']
    {
        scale: 2;
        position: absolute;
    }

`

export const Reward = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -0%);
    animation: open 3s linear 1;
    display: ${(props) => props.onReward ? 'block' : 'none'};
    @keyframes open 
    {
        0% { 
            opacity: 0; 
            top: 80%;  
            width: 0%;
        }
        90% { 
            opacity: 0.3; 
            width: 20%;
        }
        100% { 
            opacity: 0.3; 
            bottom: 40%; 
            width: 40%;
        }
    }

    [data-reward='image']
    {
        width: 100%;
        scale:2;
    }

    [data-reward='image-view']
    {
        width: 100%;
        height: 100%;
    }

    [data-reward='flower-5']
    {
        display: ${(props) => props.onReward ? 'block' : 'none'};
        position:absolute;
        bottom:0;
        right: 0;
    }
`

export const WrapperGift = styled.div`
    display: flex;
    justify-content: flex-end;
    height: calc(100vh - 63px);
    overflow: hidden;
    animation: ${(props) => props.onClickPlay == false && `shake 0.4s linear infinite`};
    position:relative;

    @media(min-width: ${({ theme }) => theme.xs}) {
        height:calc(100vh);
    }

    svg
    {
        scale: 2;
        position:relative;
        bottom: -22%;
        @media(min-width: ${({ theme }) => theme.xs}) {
            bottom: -10%;
        }
    }
    @keyframes shake 
    {
        0%, 100% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-5px);
        }
        75% {
            transform: translateX(5px);
        }
    }
`


// import React from 'react'
// import styled, { css, keyframes } from 'styled-components'

// function Gift() {
//     return (
//         <Wrapper>
//             <div className='topic '>
//                 <div className='content'>ยี่ห้อรถของ บอ เอ สอ เบส</div>
//                 <div className='content'>รุ่น</div>
//                 <div className='content'>ตำแหน่งล้อ</div>
//             </div>
//             <div className='detail'>
//                 <div className='group-item'>
//                     <div className='group-item-1'>
//                         <div className='content'>
//                             เนื้อหา 1
//                         </div>
//                         <div className='content'>
//                             เนื้อหา 1
//                         </div>
//                         <div className='content'>
//                             เนื้อหา 1
//                         </div>
//                     </div>
//                     <div className='group-item-2'>
//                         <div className='content'>
//                             เนื้อหา
//                         </div>
//                         <div className='content'>
//                             เนื้อหา 2
//                         </div>
//                         <div className='content'>
//                             เนื้อหา 2
//                         </div>
//                     </div>
//                     <div className='group-item-3'>
//                         <div className='content'>
//                             เนื้อหา
//                         </div>
//                         <div className='content'>
//                             เนื้อหา 3
//                         </div>
//                         <div className='content'>
//                             เนื้อหา 3
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Wrapper>
//     )
// }

// export default Gift

// export const Wrapper = styled.div`
//     display: flex;
//     text-align: center;
//     padding: 10px;
//     margin: auto;
//     .topic
//     {   
//         background-color: #717de4;
//         width: 30%;
//         min-height: 50px;
//     }
//     .detail
//     {   
//         display: flex;
//         width: 70%;
//         overflow: scroll;
//         min-height: 50px;
//     }
//     .group-item
//     {
//         display: flex;
//     }
//     .group-item-1
//     {
//         width: 180px;
//         min-height: 50px;
//     }
//     .group-item-2
//     {
//         width: 180px;
//         min-height: 50px;
//     }
//     .group-item-3
//     {
//         width: 180px;
//         min-height: 50px;
//     }
//     .content
//     {
//         min-height: 100px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         border: 1px solid white;
//     }
// `