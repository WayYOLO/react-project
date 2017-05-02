import React from 'react';
import ReactDom from 'react-dom';

import {AppContainer} from 'react-hot-loader';

import App from './components/App';

const render = (Component) => {
    ReactDom.render(
        <AppContainer>
            <App/>
        </AppContainer>,
        document.getElementById('root')
    );
}
render(App);

//模块热替换的API
if(module.hot) {
    module.hot.accept('./components/App', ()=>{
        render(App)
    });
}

