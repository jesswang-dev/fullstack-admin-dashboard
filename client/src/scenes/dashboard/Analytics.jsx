import { useMediaQuery } from "@mui/material";
// import BarChart from "../../components/BarChart"
import { Box } from "@mui/system";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

  const gridTemplateLarge = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
  `;

  const gridTemplateMedium = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
  `;

const Analytics = () => {
  const isAboveMediumScreen = useMediaQuery('(min-width:1200px)');

  return (
    <>
      <Box
        width="100%"
        height="100%"
        display={"grid"}
        gap={"1rem"}
        sx={
          isAboveMediumScreen
            ? {
                gridTemplateAreas: gridTemplateLarge,
                gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
                gridTemplateRows: "repeat(10, minmax(80px, 1fr))",
              }
            : {
                gridTemplateAreas: gridTemplateMedium,
                gridAutoColumns: "100%",
                gridAutoRows: "80px",
              }
        }
      >
        <Row1 />
        <Row2 />
        <Row3 />
      </Box>
    </>
  );
}

export default Analytics