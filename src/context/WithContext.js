import React from 'react';
import GlobalContext from './MyContext';

const withContext = Component => function ConnectedComponent(props) {
  return (
    <GlobalContext.Consumer>
      {context => <Component {...props} context={context.state} />}
    </GlobalContext.Consumer>
  );
};

export default withContext;
