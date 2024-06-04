import PropTypes from "prop-types";
const App = () => <h1>Our First Test</h1>;

export default App;

const RenderName = (props) => {
  return <div>{props.name}</div>;
};

RenderName.propTypes = {
  name: PropTypes.string.isRequired,
};

RenderName.defaultProps = {
    name: 'zach',
};

export RenderName
