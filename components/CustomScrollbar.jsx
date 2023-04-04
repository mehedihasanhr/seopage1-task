import { Scrollbars } from 'react-custom-scrollbars-2';

export default function CustomScrollbar({ children, minH = 200, maxH = 500, ...props }) {
  return (
    <Scrollbars
      autoHide={false}
      autoHeight={true}
      autoHeightMin={minH}
      autoHeightMax={maxH}
      {...props}
      renderView={(props) => <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />}
    >
      {children}
    </Scrollbars>
  );
}
