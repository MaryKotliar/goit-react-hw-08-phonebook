import { Blocks, Watch } from 'react-loader-spinner';
import { Box } from '@mui/material';
export const Loader = () => {
  return (
    <>
      <Blocks
        visible={true}
        height="40"
        width="40"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
      ;
    </>
  );
};
export const LoaderWatch = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Watch
        height="14"
        width="14"
        radius="48"
        color="blue"
        marginLeft="4"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Box>
  );
};
