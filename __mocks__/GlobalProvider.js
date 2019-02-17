import context from '../testHelpers';

const MyContext = ({
  Consumer(props) {
    return props.children(context);
  },
});

export default MyContext;
