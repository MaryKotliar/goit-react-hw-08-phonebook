import { Blocks, Watch } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <>
      <Blocks
        visible={true}
        height="80"
        width="80"
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
    <>
      <Watch
        height="16"
        width="16"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </>
  );
};
