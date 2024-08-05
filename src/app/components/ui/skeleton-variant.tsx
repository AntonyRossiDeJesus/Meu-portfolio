// import React from "react";

// const SkeletonLoader: React.FC = () => {
//   return (
//     <>
//       <div className="flex items-center justify-center">CARREGANDO....</div>
//     </>
//   );
// };

// export default SkeletonLoader;

import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import React from "react";
import styled from "styled-components";

const SkeletonWrapper = styled.div`
  height: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
`;

const SkeletonImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const SkeletonImage = styled.div`
  height: 10rem;
  width: 10rem;
  background-color: #ccc;
  margin: 0 0.5rem;
`;

const SkeletonLoader: React.FC = () => {
  return (
    <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
      <LinearProgress color="secondary" />
    </Stack>
  );
};

export default SkeletonLoader;
