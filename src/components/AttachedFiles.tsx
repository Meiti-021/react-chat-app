import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { Typography, Stack } from "@mui/material";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import ImageIcon from "@mui/icons-material/Image";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import IosShareIcon from "@mui/icons-material/IosShare";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const files: { id: string; name: string; type: string; size: string }[] = [
  {
    id: "attach-1",
    name: "admin_v1.0",
    type: "zip",
    size: "12.5 MB",
  },
  {
    id: "attach-2",
    name: "Image-1",
    type: "jpg",
    size: "4.2 MB",
  },
  {
    id: "attach-3",
    name: "Image-2",
    type: "jpg",
    size: "3.1 MB",
  },
  {
    id: "attach-4",
    name: "Landing-A",
    type: "zip",
    size: "6.7 MB",
  },
];

const AttachedFiles = () => {
  const { darkmode } = useSelector((store: RootState) => store.setting);
  return (
    <Box sx={{ width: "100%", background: darkmode ? "#1D2733" : "white" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {files.map((item) => {
            return (
              <ListItem
                key={item.id}
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  bgcolor: "#1e2933",
                  borderRadius: 1,
                  my: 1,
                }}
              >
                <Button sx={{ px: 1, py: 2.2, bgcolor: "#00b718" }}>
                  {item.type === "zip" ? (
                    <FolderZipIcon sx={{ color: "white" }} />
                  ) : (
                    <ImageIcon sx={{ color: "white" }} />
                  )}
                </Button>
                <Stack sx={{ overflow: "hidden" }}>
                  <Typography
                    sx={{
                      fontFamily: "Public Sans",
                      fontWeight: 600,
                      color: "white",
                      fontSize: "1rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >{`${item.name}.${item.type}`}</Typography>
                  <Typography
                    sx={{
                      fontFamily: "Public Sans",
                      fontWeight: 400,
                      color: "#7a7f9a",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.size}
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  sx={{ ml: "auto", gap: 2, flexShrink: 0 }}
                >
                  <Tooltip title="download">
                    <CloudDownloadIcon
                      sx={{
                        color: "white",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="share">
                    <IosShareIcon
                      sx={{
                        color: "white",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                      }}
                    />
                  </Tooltip>
                </Stack>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};

export default AttachedFiles;
