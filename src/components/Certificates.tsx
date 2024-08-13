import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React,{useRef} from 'react';
// Import Swiper core and required modules
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { useSectionInView } from "../assets/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../context/language-context";
import { certificatesData } from "../assets/lib/data";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CertificateSwiper = () => {
	const { ref } = useSectionInView("Certificates");

  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	return (
		<React.Fragment>
			<section className="mt-16 pb-20 " id="certificates" ref={ref}>
        <div className="title-container flex flex-col gap-6 justify-center items-center p-32 w-1/2 max-lg:w-full max-lg:p-16 max-lg:items-start">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "left",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-orange">&lt;</span>
              {language === "DE" ? certificatesData.title : certificatesData.title_EN}
              <span className="text-orange">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center max-lg:text-left break-words">
              {language === "DE"
                ? certificatesData.description
                : certificatesData.description_EN}
            </h2>
          </motion.div>
        </div>
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
				>
					{certificatesData.certificates.map((certificate: any, index: number) => (
						<SwiperSlide key={`Certificates-${index}`}>
							<img src={certificate.src} alt={certificate.alt} />
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</React.Fragment>
	);
};

export default CertificateSwiper;

