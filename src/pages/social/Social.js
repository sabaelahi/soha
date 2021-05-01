import axios from "axios";
import React from "react";
import './style.css';

class Social extends React.Component {
    state = {
        post: [],
        allPosts: [],
        item: '',
        show: false
    };

    componentDidMount() {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(({data}) => {
                this.setState({
                    post: data,
                    allPosts: data // array data from JSON stored in these
                });
            })
            .catch(err => {
            });
    }

    _onKeyUp = e => {
        // filter post list by title using onKeyUp function
        const post = this.state.allPosts.filter(item =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        this.setState({post, item: e.target.value});
    };

    handlersearch = () => {
        this.setState({show: true});
    }
    close = () => {
        this.setState({item: '', show: false})
    }

    render() {
        let inputStyle = {
            display: 'none'
        };
        let test = {
            backgroundColor: '#DDFE5A',
            border: '5px solid #06A9A0',
            outline: 'none'
        }
        if (!this.state.show) {
            inputStyle = {
                display: 'block',
                right: '4px',
                top: '5px',
                backgroundColor: '#DDFE5A',
                borderRadius: '50%',
                position: 'absolute'
            };
            test = {
                backgroundColor: '#06A9A0',
            }
        }
        return (
            <div>
                <h1 className={"title text-center"}>Select your Country</h1>
                <div className="container-search position-relative mt-5">
                    <div className="search-outer d-flex justify-content-center mt-5 position-relative">
                        <form role="search" method="get">
                            <input id={"Search"} type="search" onChange={this._onKeyUp}
                                   placeholder="Select Your Country"
                                   value={this.state.item} autoComplete="off" onClick={this.handlersearch}
                                   style={test}/>
                            <div className={"arrow position-absolute pointer"} onClick={this.close}><img
                                src="/images/btn-close.png"/></div>
                            <div style={inputStyle}><img src="/images/btn-search.png" className={"pointer"}
                                                         onClick={this.handlersearch}/></div>
                        </form>
                    </div>
                    {
                        this.state.show === true ?
                            <div className={"parent-data-list bg-blue"}>
                                <ul className="data-list bg-blue list-unstyled ">
                                    {this.state.post.map((item) => (
                                        <li onClick={() => {
                                            this.setState({item: item.name, show: false})
                                        }}>
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            : ''}
                </div>
            </div>
        );
    }
}

export default Social;