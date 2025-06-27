import { LinearProgress, linearProgressClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

const MatrixProgressBar = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "rgba(0,255,65,0.1)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: "linear-gradient(90deg, #00FF41 0%, #00B86B 100%)",
    boxShadow: "0 0 10px #00FF41, 0 0 20px #00FF41",
  },
}));

export default MatrixProgressBar;
