import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { Typography, Stack } from "@mui/material";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import ImageIcon from "@mui/icons-material/Image";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import IosShareIcon from "@mui/icons-material/IosShare";
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
  return (
    <Box
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", p: 1 }}
    >
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
                <Stack>
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
                  <CloudDownloadIcon
                    sx={{
                      color: "white",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                  />
                  <IosShareIcon
                    sx={{
                      color: "white",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                  />
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
