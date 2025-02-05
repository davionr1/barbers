import "./barbersCards.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import Home from "./home";

import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BarbersCards = () => {
    return (
        <>
            <Home className="navbar" />
            <Swiper
                modules={[Navigation]}
                navigation={true}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div className="barbers-cards-container">
                    <div className="scrollable-tabs-container">
                        <SwiperSlide>

                            <div className="barbers-cards">
                                <img className="barbers-img" src="https://this-person-does-not-exist.com/img/avatar-gen8c452529cd39255414aee8decddbc1e4.jpg"></img>
                                <div className="barber-description">
                                    <div className="barbers-name">Billy bob</div>
                                    <div className="barbers-price">$30.00</div>
                                    <div className="barbers-reviews">4 stars</div>
                                    <div className="barbers-set-appointment"><button>Set appointment</button></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="barbers-cards ">
                            <img className="barbers-img" src="https://cdn.vectorstock.com/i/500p/11/69/blank-avatar-profile-picture-vector-45161169.jpg"></img>
                            <div className="barber-description">
                                <div className="barbers-name">Billy bob</div>
                                <div className="barbers-price">$30.00</div>
                                <div className="barbers-reviews">4 stars</div>
                                <div className="barbers-set-appointment"><button>Set appointment</button></div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="barbers-cards ">
                            <img className="barbers-img" src="https://cdn.vectorstock.com/i/500p/11/69/blank-avatar-profile-picture-vector-45161169.jpg"></img>
                            <div className="barber-description">
                                <div className="barbers-name">Billy bob</div>
                                <div className="barbers-price">$30.00</div>
                                <div className="barbers-reviews">4 stars</div>
                                <div className="barbers-set-appointment"><button>Set appointment</button></div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="barbers-cards ">
                            <img className="barbers-img" src="https://cdn.vectorstock.com/i/500p/11/69/blank-avatar-profile-picture-vector-45161169.jpg"></img>
                            <div className="barber-description">
                                <div className="barbers-name">Billy bob</div>
                                <div className="barbers-price">$30.00</div>
                                <div className="barbers-reviews">4 stars</div>
                                <div className="barbers-set-appointment"><button>Set appointment</button></div>
                            </div>
                        </div></SwiperSlide>
                    </div>
                </div>
            </Swiper>

        </>

    )
}
{/* <div className="barbers-background">
               
            </div>
            <div className="barbers-cards-container swiper">
                <div className="scrollable-tabs-container slider-wrapper">

                    <div className="left-arrow"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    </div>

                    <div className="barbers-cards swiper-slide">
                        
                            {/* <img className="barbers-img" src="https://cdn.vectorstock.com/i/500p/11/69/blank-avatar-profile-picture-vector-45161169.jpg"></img> */}
//                 <img className="barbers-img" src="https://this-person-does-not-exist.com/img/avatar-gen8c452529cd39255414aee8decddbc1e4.jpg"></img>
//                 <div className="barber-description">
//                     <div className="barbers-name">Billy bob</div>
//                     <div className="barbers-price">$30.00</div>
//                     <div className="barbers-reviews">4 stars</div>
//                     <div className="barbers-set-appointment"><button>Set appointment</button></div>
//                 </div>

//         </div>
//         <div className="barbers-cards swiper-slide">
//             <img className="barbers-img" src="https://cdn.vectorstock.com/i/500p/11/69/blank-avatar-profile-picture-vector-45161169.jpg"></img>
//             <div className="barber-description">
//                     <div className="barbers-name">Billy bob</div>
//                     <div className="barbers-price">$30.00</div>
//                     <div className="barbers-reviews">4 stars</div>
//                     <div className="barbers-set-appointment"><button>Set appointment</button></div>
//                 </div>
//         </div>
//         <div className="barbers-cards swiper-slide">
//             <img className="barbers-img" src="https://cdn.vectorstock.com/i/500p/11/69/blank-avatar-profile-picture-vector-45161169.jpg"></img>
//             <div className="barber-description">
//                     <div className="barbers-name">Billy bob</div>
//                     <div className="barbers-price">$30.00</div>
//                     <div className="barbers-reviews">4 stars</div>
//                     <div className="barbers-set-appointment"><button>Set appointment</button></div>
//                 </div>
//         </div>
//         <div className="barbers-cards swiper-slide">
//             <img className="barbers-img" src="https://cdn.vectorstock.com/i/500p/11/69/blank-avatar-profile-picture-vector-45161169.jpg"></img>
//             <div className="barber-description">
//                     <div className="barbers-name">Billy bob</div>
//                     <div className="barbers-price">$30.00</div>
//                     <div className="barbers-reviews">4 stars</div>
//                     <div className="barbers-set-appointment"><button>Set appointment</button></div>
//                 </div>
//         </div>
//         <div className="barbers-cards swiper-slide">
//             <img className="barbers-img" src="https://cdn.vectorstock.com/i/500p/11/69/blank-avatar-profile-picture-vector-45161169.jpg"></img>
//             <div className="barber-description">
//                     <div className="barbers-name">Billy bob</div>
//                     <div className="barbers-price">$30.00</div>
//                     <div className="barbers-reviews">4 stars</div>
//                     <div className="barbers-set-appointment"><button>Set appointment</button></div>
//                 </div>
//         </div>
//         <div className="barbers-cards swiper-slide">
//             <img className="barbers-img" src="https://cdn.vectorstock.com/i/500p/11/69/blank-avatar-profile-picture-vector-45161169.jpg"></img>
//             <div className="barber-description">
//                     <div className="barbers-name">Billy bob</div>
//                     <div className="barbers-price">$30.00</div>
//                     <div className="barbers-reviews">4 stars</div>
//                     <div className="barbers-set-appointment"><button>Set appointment</button></div>
//                 </div>
//         </div> 
//         <div className="barbers-cards swiper-slide">
//             <img className="barbers-img" src="https://cdn.vectorstock.com/i/500p/11/69/blank-avatar-profile-picture-vector-45161169.jpg"></img>
//             <div className="barber-description">
//                     <div className="barbers-name">Billy bob</div>
//                     <div className="barbers-price">$30.00</div>
//                     <div className="barbers-reviews">4 stars</div>
//                     <div className="barbers-set-appointment"><button>Set appointment</button></div>
//                 </div>
//         </div>
//         <div className="barbers-cards swiper-slide">
//             <img className="barbers-img" src="https://cdn.vectorstock.com/i/500p/11/69/blank-avatar-profile-picture-vector-45161169.jpg"></img>
//             <div className="barber-description">
//                     <div className="barbers-name">Billy bob</div>
//                     <div className="barbers-price">$30.00</div>
//                     <div className="barbers-reviews">4 stars</div>
//                     <div className="barbers-set-appointment"><button>Set appointment</button></div>
//                 </div>
//         </div>
//         <div className="right-arrow"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
//         </svg>
//         </div>
//     </div>
// </div> 

export default BarbersCards