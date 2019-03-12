import React, { Component } from 'react'

export default class Snippets extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <h1 className="mt-0">Snippets</h1>
                {Object.keys(this.props.categories).map((category) => {
                    return <div>
                        <h2>{category}</h2>
                        {Object.keys(this.props.categories[category]).map(type => {
                            console.log(type);

                            return <button
                                id={type}
                                className="btn-white"
                                onClick={() => this.props.onClick(this.props.categories[category][type])}
                            >
                                {type}
                            </button>
                        })}
                    </div>
                })}
            </>
        )
    }
}