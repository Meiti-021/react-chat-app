import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { ChangeEvent } from "react";
import { uploadProfile } from "../services/chatSlice";
const SettingProfileChange = () => {
  const { darkmode } = useSelector((store: RootState) => store.setting);
  const dispatch = useDispatch();
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const image = e.target.files[0];
      dispatch(uploadProfile({ img: URL.createObjectURL(image) }));
    }
  };

  return (
    <IconButton
      sx={{
        bgcolor: darkmode ? "black" : "white",
        position: "absolute",
        bottom: -25,
        right: 30,
        width: 50,
        height: 50,
        border: "1px solid #ebe8e8",
        ":hover": {
          bgcolor: "#ccc",
          color: "white",
        },
      }}
    >
      <label
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="file"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
        <CameraAltIcon />
      </label>
    </IconButton>
  );
};

export default SettingProfileChange;
