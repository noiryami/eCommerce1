import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type GridlistProps<T> = {
  records: T[];
  renderIteam: (record: T) => React.ReactNode;
  emptyMessage: string;
};

type HasId = { id?: number };

const HomeGridList = <T extends HasId>({
  records,
  renderIteam,
}: GridlistProps<T>) => {
  const [width, setWidth] = useState(window.outerWidth);
  const breakpoint = 600;

  useEffect(() => {
    const handleResize = () => setWidth(window.outerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {width > breakpoint ? (
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {records.map((el) => (
            <SwiperSlide key={el.id}>{renderIteam(el)}</SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {records.map((el) => (
            <SwiperSlide key={el.id}>{renderIteam(el)}</SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default HomeGridList;
