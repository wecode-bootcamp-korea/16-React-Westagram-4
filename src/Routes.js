// 선미's 컴포넌트
import LoginSeonmi from './pages/seonmiJeong/Login/Login';
import MainSeonmi from './page/seonmiJeong/Main/Main';

// 보현's 컴포넌트
import loginBohyeon from './pages/bohyeonKoo/Login/Login';
import MainBohyeon from './pages/bohyeonKoo/Main/Main';

// 규찬's 컴포넌트
import LoginKyuchan from './pages/kyuchanMun/Login/Login';
import MainKyuchan from './page/kyuchanMun/Main/Main';

// 재윤's 컴포넌트
import LoginJaeyoon from './pages/jaeyoonJeong/Login/Login';
import MainJaeyoon from './pages/jaeyoonJeong/Main/Main';

import React from 'react';
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom';


class Routes extends React.Component {
    render() {
    return (
    <Router>
        <Switch>
            <Route exact path='/login-seonmi' component={LoginSeonmi} />
            <Route exact path='/main-seonmi' component={MainSeonmi} />
            <Route exact path='/login-bohyeon' component={LoginBohyun} />
            <Route exact path='/main-bohyeon' component={MainBohyun} />
            <Route exact path='/login-jaeyoon' component={LoginJaeyoon} />
            <Route exact path='/main-jaeyoon' component={MainJaeyoon} />
            <Route exact path='/login-kyuchan' component={LoginKyuchan} />
            <Route exact path='/main-kyuchan' component={MainKyuchan} />
        </Switch>
    </Router>
    )
    }
}

export default Routes;

