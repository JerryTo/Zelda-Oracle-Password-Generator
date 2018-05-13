import React, {Component} from 'react';
import './App.css';

import {updateProperties} from './zeldaOraclePasswordGenerator';

import nayru from './imgs/Nayru.gif';
import nayru_inactive from './imgs/nayru.png';
import din from './imgs/Din.gif';
import din_inactive from './imgs/din.png';
import link from './imgs/link.png';
import link_ages from './imgs/link_ages.gif';
import link_seasons from './imgs/link_seasons.gif';
import triforce from './imgs/triforce.png';
import moosh from './imgs/moosh.png';
import moosh_inactive from './imgs/moosh.png';
import ricky from './imgs/ricky.png';
import ricky_inactive from './imgs/ricky.png';
import dimitri from './imgs/dimitri.png';
import dimitri_inactive from './imgs/dimitri.png';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainPassword: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
            memoryPassword: ["", "", "", "", "", "", "", "", "", ""],
            game: "",
            gameID: "",
            heroName: "",
            childName: "",
            animal: "Ricky",
            behavior: "Infant",
            isLinkedGame: false,
            isHeroQuest: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.formatPassword = this.formatPassword.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleToggleLinkedGame = this.handleToggleLinkedGame.bind(this);
        this.handleToggleHerosQuest = this.handleToggleHerosQuest.bind(this);
        this.checkValidID = this.checkValidID.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        let passwords = this.getPassword();

        if (!passwords) {
            return false;
        }

        let newPassword = passwords[0];

        let oldPass = prevState.mainPassword ? prevState.mainPassword.join("") : "";
        let newPass = newPassword.join("");


        if (oldPass !== newPass) {
            this.setState({
                mainPassword: newPassword,
                memoryPassword: passwords.splice(1)
            });
        }
    }

    getPassword() {
        let newPassword = updateProperties(
            this.state.game,
            this.state.gameID,
            this.state.heroName,
            this.state.childName,
            this.state.animal,
            this.state.behavior,
            this.state.isLinkedGame,
            this.state.isHeroQuest
        );

        if (this.state.game && this.state.gameID) {
            return newPassword;
        }

    }

    handleChange(event) {
        let value = event.target.value;
        if (event.target.type === "checkbox") {
            value = event.target.checked;
        }
        this.setState({
            [event.target.name]: value
        });
    }

    handleChangeState(game, stateName) {
        this.setState({
            [stateName]: game
        });
    }

    handleToggleLinkedGame() {
        this.setState((prevState) => ({
            isLinkedGame: !prevState.isLinkedGame
        }));
    }

    handleToggleHerosQuest() {
        this.setState((prevState) => ({
            isHeroQuest: !prevState.isHeroQuest
        }));
    }

    formatPassword(password) {
        let newPassword = password.slice();
        if (!password) {
            return "";
        }
        for (let i = 0; i < newPassword.length; i++) {
            if (i === 0) {
                continue;
            }
            if (i % 10 === 0) {
                newPassword[i] = "<br>" + newPassword[i];
                continue;
            }
            if (i % 5 === 0) {
                newPassword[i] = " " + newPassword[i];
            }
        }

        return newPassword.join('');
    }

    checkValidID(event) {
        // 5 digits max
        if (event.target.value.length > 5) {
            console.log("1");
            event.target.value = event.target.value.slice(0, 5);
        }

        // Set to min value if too low
        if (event.target.value < 1 && event.target.value) {
            console.log(event.target.value);
            event.target.value = event.target.min;
        }

        // Set too max value if too high
        if (Number(event.target.value) > Number(event.target.max)) {
            console.log("13");
            event.target.value = event.target.max;
        }
    }

    render() {
        let statePassword = this.state.mainPassword;
        let htmlPassword = this.formatPassword(statePassword);

        let gameIsAges = this.state.game === "Ages";
        let memoryPassword = this.state.memoryPassword;

        return (
            <div className="App" onChange={this.handleChange}>
                <header className="App-header">
                    <h1 className="App-title">Zelda Oracle Password Generator</h1>
                </header>
                <div className="main">
                    <div id="leftColumn">
                        <div>
                            <CardBlock
                                title="Ages"
                                changeGame={(e) => this.handleChangeState(e, "game")}
                                currentGame={this.state.game}
                                activeImg={nayru}
                                inactiveImg={nayru_inactive}
                            />
                            <CardBlock
                                title="Seasons"
                                changeGame={(e) => this.handleChangeState(e, "game")}
                                currentGame={this.state.game}
                                activeImg={din}
                                inactiveImg={din_inactive}
                            />
                        </div>

                        <div>
                            <CardBlock
                                title="Linked Game"
                                changeGame={this.handleToggleLinkedGame}
                                currentGame={this.state.isLinkedGame}
                                activeImg={gameIsAges ? link_ages : link_seasons}
                                inactiveImg={link}
                            />
                            <CardBlock
                                title="Hero's Quest"
                                changeGame={this.handleToggleHerosQuest}
                                currentGame={this.state.isHeroQuest}
                                activeImg={triforce}
                                inactiveImg={triforce}
                            />
                        </div>


                        <div>
                            <CardBlock
                                title="Ricky"
                                changeGame={(e) => this.handleChangeState(e, "animal")}
                                currentGame={this.state.animal}
                                activeImg={ricky}
                                inactiveImg={ricky_inactive}
                            />
                            <CardBlock
                                title="Dimitri"
                                changeGame={(e) => this.handleChangeState(e, "animal")}
                                currentGame={this.state.animal}
                                activeImg={dimitri}
                                inactiveImg={dimitri_inactive}
                            />
                            <CardBlock
                                title="Moosh"
                                changeGame={(e) => this.handleChangeState(e, "animal")}
                                currentGame={this.state.animal}
                                activeImg={moosh}
                                inactiveImg={moosh_inactive}
                            />
                        </div>
                    </div>


                    <div id="rightColumn">
                        <div className="inputBlock">
                            <label htmlFor="heroName">Hero Name:</label>
                            <input type="text" id="heroName" name="heroName" maxLength="5"/>
                        </div>

                        <div className="inputBlock">
                            <label htmlFor="childName">Child Name:</label>
                            <input type="text" id="childName" name="childName" maxLength="5"/>
                        </div>

                        <div className="inputBlock">
                            <label htmlFor="gameID">ID: </label>
                            <input type="number" id="gameID" name="gameID" min="1" max="32767"
                                   onInput={this.checkValidID}/>
                        </div>

                        <div className="inputBlock">
                            <label htmlFor="behavior">Behavior: </label>
                            <select id="behavior" name="behavior">
                                <option value="Infant">Infant</option>
                                <option value="BouncyA">BouncyA</option>
                                <option value="BouncyB">BouncyB</option>
                                <option value="BouncyC">BouncyC</option>
                                <option value="BouncyD">BouncyD</option>
                                <option value="BouncyE">BouncyE</option>
                                <option value="ShyA">ShyA</option>
                                <option value="ShyB">ShyB</option>
                                <option value="ShyC">ShyC</option>
                                <option value="ShyD">ShyD</option>
                                <option value="ShyE">ShyE</option>
                                <option value="HyperA">HyperA</option>
                                <option value="HyperB">HyperB</option>
                                <option value="HyperC">HyperC</option>
                                <option value="HyperD">HyperD</option>
                                <option value="HyperE">HyperE</option>
                            </select>
                        </div>

                    </div>
                    <Footer gameIsAges={gameIsAges} memoryPassword={memoryPassword} htmlPassword={htmlPassword}/>
                </div>
            </div>
        );
    }
}

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.expandFooter = this.expandFooter.bind(this);
    }

    expandFooter() {
        this.setState((prevState) => ({
            active: !prevState.active
        }));
    }

    render() {
        let gameIsAges = this.props.gameIsAges;
        let memoryPassword = this.props.memoryPassword;
        let htmlPassword = this.props.htmlPassword;

        if (htmlPassword.length < 10) {
            htmlPassword = "The password will appear here.";
        }

        let footerClass = "";
        let memoryTableClass = "memoryTable";
        let arrow = "▲";

        if (this.state.active) {
            footerClass = "footerActive";
            memoryTableClass = "memoryTable memoryTableActive";
            arrow = "▼";
        }
        return (
            <div id="footer" className={footerClass}>
                <div id="expandFooter" onClick={this.expandFooter}>{arrow}</div>
                <div className="password passwordText" dangerouslySetInnerHTML={{__html: htmlPassword}}/>
                <table className={memoryTableClass}>
                    <tbody>
                    <MemorySecrets password={memoryPassword[0] || "N/A"}
                                   person={gameIsAges ? "ClockShop" : "King Zora"}/>
                    <MemorySecrets password={memoryPassword[1] || "N/A"} person={gameIsAges ? "Graveyard" : "Fairy"}/>
                    <MemorySecrets password={memoryPassword[2] || "N/A"} person={gameIsAges ? "Subrosian" : "Troy"}/>
                    <MemorySecrets password={memoryPassword[3] || "N/A"} person={gameIsAges ? "Diver" : "Plen"}/>
                    <MemorySecrets password={memoryPassword[4] || "N/A"} person={gameIsAges ? "Smith" : "Library"}/>
                    <MemorySecrets password={memoryPassword[5] || "N/A"} person={gameIsAges ? "Pirate" : "Tokay"}/>
                    <MemorySecrets password={memoryPassword[6] || "N/A"} person={gameIsAges ? "Temple" : "Mamamu"}/>
                    <MemorySecrets password={memoryPassword[7] || "N/A"} person={gameIsAges ? "Deku" : "Tingle"}/>
                    <MemorySecrets password={memoryPassword[8] || "N/A"} person={gameIsAges ? "Biggoron" : "Elder"}/>
                    <MemorySecrets password={memoryPassword[9] || "N/A"} person={gameIsAges ? "Ruul" : "Symmetry"}/>
                    </tbody>
                </table>
            </div>
        );
    }
}

class MemorySecrets extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.person} Secret</td>
                <td className="passwordText">{this.props.password}</td>
            </tr>

        );
    }
}

class CardBlock extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(game) {
        this.props.changeGame(game);
    }

    render() {
        let imgAlt = this.props.title;
        let isActive;
        if (this.props.title === "Linked Game" || this.props.title === "Hero's Quest") {
            isActive = this.props.currentGame === true;
        } else {
            isActive = this.props.currentGame === this.props.title;
        }
        let image = isActive ? this.props.activeImg : this.props.inactiveImg;
        let containerClass = isActive ? "cardBlock" : "cardBlock inactive";


        let imgClass = "cardBlockImage";

        if (this.props.title === "Ages" || this.props.title === "Linked Game" || this.props.title === "Hero's Quest" || this.props.title === "Dimitri" || this.props.title === "Moosh") {
            imgClass = imgClass + " cardBlockAges";
        }
        if (this.props.title === "Dimitri" || this.props.title === "Moosh") {
            imgClass = imgClass + " cardBlockAnimal";
        }
        if (this.props.title === "Dimitri" || this.props.title === "Ricky" || this.props.title === "Moosh") {
            containerClass = containerClass + " cardBlockTall";
        }

        let titleClass = "cardBlockTitle";
        return (
            <div className={containerClass} onClick={(e) => this.handleClick(this.props.title)}>
                <div className={titleClass}>{this.props.title}</div>
                <img src={image} className={imgClass} alt={imgAlt}/>
            </div>
        )
    }
}

export default App;
