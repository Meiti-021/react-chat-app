import {
  Box,
  Button,
  Typography,
  Fab,
  TextField,
  TextFieldProps,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { enqueueSnackbar } from "notistack";
import login from "../assets/login.json";
import login2 from "../assets/login2.json";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Swiper, SwiperSlide, SwiperRef as SwiperRefType } from "swiper/react";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../services/settingSlice";
import { RootState } from "../store";
const LoginCenter = () => {
  const dispatch = useDispatch();
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  const [open, setOpen] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const lottie2Ref = useRef<LottieRefCurrentProps>(null);
  const swiperRef = useRef<SwiperRefType>(null);
  const emailRef = useRef<TextFieldProps>(null);
  const passwordRef = useRef<TextFieldProps>(null);
  const codeRef = useRef<TextFieldProps>(null);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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
              background: darkmode ? "#000" : "#fff",
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
                  setOpen(true);
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
              size="large"
              onClick={() => {
                if (lottieRef.current) {
                  lottieRef.current.play();
                }
              }}
            >
              {language.startMessaging}
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
              position: "relative",
              background: darkmode ? "#000" : "#fff",
            }}
          >
            <Box
              component={"form"}
              sx={{
                width: "90%",
                maxWidth: "450px",
                position: "relative",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                fontSize={"1.2rem"}
                textAlign={"center"}
                color={darkmode ? "#fff" : undefined}
              >
                {language.firstLoginForm.title}
              </Typography>
              <Typography color={"#848484"} mt={1} textAlign={"center"} px={3}>
                {language.firstLoginForm.subtitle}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: 2,
                  gap: 1,
                  width: "100%",
                }}
              >
                <TextField
                  label="Email"
                  variant="outlined"
                  size="small"
                  type="email"
                  required
                  inputRef={emailRef}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  size="small"
                  required
                  inputRef={passwordRef}
                />
              </Box>
              <Fab
                color="primary"
                aria-label="add"
                sx={{ position: "absolute", bottom: 56, right: 0 }}
                onClick={() => {
                  if (emailRef.current?.value && passwordRef.current?.value) {
                    swiperRef.current?.swiper.slideNext();
                    lottie2Ref.current?.play();
                  } else {
                    enqueueSnackbar({
                      variant: "error",
                      message: language.fillTheFormErrorMessage,
                    });
                  }
                }}
              >
                <ArrowForwardIcon />
              </Fab>
            </Box>
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
              position: "relative",
              background: darkmode ? "#000" : "#fff",
            }}
          >
            <Box
              component={"form"}
              sx={{
                width: "90%",
                maxWidth: "450px",
                position: "relative",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: { xs: 920, md: 850 },
                  height: { xs: 300, md: 500 },
                  mt: { xs: -30, md: -20 },
                  display: darkmode ? "none" : "block",
                }}
              >
                <Lottie
                  animationData={login2}
                  lottieRef={lottie2Ref}
                  loop={false}
                  autoplay={false}
                  width={"600px"}
                  style={{ height: "300px" }}
                />
              </Box>
              <Typography
                fontSize={"1.2rem"}
                textAlign={"center"}
                color={darkmode ? "#fff" : undefined}
              >
                {language.loginRegistery.title}
              </Typography>
              <Typography color={"#848484"} mt={1} textAlign={"center"} px={3}>
                {language.loginRegistery.subtitle}
              </Typography>
              <TextField
                label="code"
                variant="outlined"
                size="small"
                sx={{ width: "100%", mt: 2 }}
                required
                inputRef={codeRef}
              />
              <Fab
                color="primary"
                aria-label="add"
                sx={{ position: "absolute", bottom: 56, right: 0 }}
                onClick={() => {
                  if (codeRef.current?.value) {
                    dispatch(logIn());
                  } else {
                    enqueueSnackbar({
                      variant: "error",
                      message: language.fillTheFormErrorMessage,
                    });
                  }
                }}
              >
                <CheckIcon />
              </Fab>
              <Fab
                color="primary"
                aria-label="add"
                sx={{ position: "absolute", bottom: 56, left: 0 }}
                onClick={() => {
                  swiperRef.current?.swiper.slidePrev();
                }}
              >
                <ArrowBackIcon />
              </Fab>
            </Box>
          </div>
        </SwiperSlide>
      </Swiper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Typography
            sx={{
              fontSize: "1rem",
              color: darkmode ? "lightgrey" : undefined,
              fontWeight: "bold",
            }}
          >
            {language.loginWarning.dataPersistence.title}
          </Typography>{" "}
          {language.loginWarning.dataPersistence.description}
          <Typography
            sx={{
              fontSize: "1rem",
              mt: 2,
              color: darkmode ? "lightgrey" : undefined,
              fontWeight: "bold",
            }}
          >
            {language.loginWarning.noRealData.title}
          </Typography>{" "}
          {language.loginWarning.noRealData.description}
          <Typography
            sx={{
              fontSize: "1rem",
              mt: 2,
              color: darkmode ? "lightgrey" : undefined,
              fontWeight: "bold",
            }}
          >
            {language.loginWarning.dataDeletion.title}
          </Typography>{" "}
          {language.loginWarning.dataDeletion.description}
          <Typography
            sx={{
              fontSize: "1rem",
              mt: 2,
              color: darkmode ? "lightgrey" : undefined,
              fontWeight: "bold",
            }}
          >
            {language.loginWarning.privacy.title}
          </Typography>{" "}
          {language.loginWarning.privacy.description}
          <Typography
            sx={{
              fontSize: "1rem",
              mt: 2,
              color: darkmode ? "lightgrey" : undefined,
              fontWeight: "bold",
            }}
          >
            {language.loginWarning.resetOnRefresh.title}
          </Typography>{" "}
          {language.loginWarning.resetOnRefresh.description}
          <Typography
            sx={{
              fontSize: "1rem",
              mt: 2,
              color: darkmode ? "lightgrey" : undefined,
              fontWeight: "bold",
            }}
          >
            {language.loginWarning.forTestingPurposes.title}
          </Typography>
          {language.loginWarning.forTestingPurposes.description}
          <Typography
            sx={{
              fontSize: "1rem",
              mt: 2,
              color: darkmode ? "lightgrey" : undefined,
              fontWeight: "bold",
            }}
          >
            {language.loginWarning.authentication.title}
          </Typography>{" "}
          {language.loginWarning.authentication.description}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            {language.continue}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LoginCenter;
