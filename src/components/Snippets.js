import React, { Component } from 'react'

export default class Snippets extends Component {

    render() {
        return (
            <>
                {Object.keys(this.props.categories).map((category) => {
                    return <div key={Math.random()}>
                        <h2 key={Math.random()}>{category}</h2>
                        {Object.keys(this.props.categories[category]).map(type => {
                            console.log(type);

                            return <button
                                id={type}
                                key={Math.random()}
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