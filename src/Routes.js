// 선미's 컴포넌트
import LoginSeonmi from './Pages/seonmiJeong/Login/Login';
import MainSeonmi from './Pages/seonmiJeong/Main/Main';

// 보현's 컴포넌트
import LoginBohyeon from './Pages/bohyeonKoo/Login/Login';
import MainBohyeon from './Pages/bohyeonKoo/Main/Main';

// 규찬's 컴포넌트
import LoginKyuchan from './Pages/kyuchanMun/Login/Login';
import MainKyuchan from './Pages/kyuchanMun/Main/Main';

// 재윤's 컴포넌트
import LoginJaeyoon from './Pages/jaeyoonJeong/Login/Login';
import MainJaeyoon from './Pages/jaeyoonJeong/Main/Main';

// 필요한 패키지
import React from 'react';
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom';


class Routes extends React.Component {
    render() {
    return (
    <Router>
        <Switch>
            <Route exact path='/login-seonmi' component={LoginSeonmi} />
            <Route exact path='/main-seonmi' component={MainSeonmi} />
            <Route exact path='/login-bohyeon' component={LoginBohyeon} />
            <Route exact path='/main-bohyeon' component={MainBohyeon} />
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

