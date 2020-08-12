import React, { Component } from 'react';
import SideBox from './Sidebox';
import Feed from './Feed';
import Nav from '../../../Components/Nav/Nav'
import '../../../Components/Nav/Nav.scss'
import './Main.scss'


class Main extends Component {
    render() {
        return (
            <div className="MainWrapper">
                <Nav />
                <main >
                    <section>
                        <div className="sectionBox">
                            <Feed />
                            <SideBox />
                        </div>
                    </section >
                </main >
            </div>
        );
    }
}
export default Main;