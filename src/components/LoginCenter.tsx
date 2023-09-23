import { Box, Button, Typography } from "@mui/material";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import login from "../assets/login.json";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperRef as SwiperRefType } from "swiper/react";
import "swiper/css";
import LoginCenterForm from "./LoginCenterForm";
const LoginCenter = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const swiperRef = useRef<SwiperRefType>(null);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      allowTouchMove={false}
      ref={swiperRef}
    >
      <SwiperSlide>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "100vh",
            width: "100vw",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "45px",
          }}
        >
          <Box
            component={"div"}
            sx={{
              width: { xs: 320, md: 450 },
              height: { xs: 200, md: 400 },
            }}
          >
            <Lottie
              animationData={login}
              lottieRef={lottieRef}
              loop={false}
              autoplay={false}
              onComplete={() => {
                swiperRef.current?.swiper.slideNext();
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              color: "white",
              bgcolor: "#008EE4",
              width: "90%",
              maxWidth: "400px",
              mt: { xs: 10, md: 0 },
            }}
            onClick={() => {
              if (lottieRef.current) {
                lottieRef.current.play();
              }
            }}
          >
            START MESSAGING
          </Button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            component={"form"}
            sx={{
              width: "95%",
              maxWidth: "450px",
              height: "100px",
            }}
          >
            <Typography fontSize={"1.2rem"} textAlign={"center"}>
              Your Email Address
            </Typography>
            <Typography color={"#848484"} mt={1}>
              Please confirm your email address and enter your password.
            </Typography>
            <LoginCenterForm />
          </Box>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default LoginCenter;
