import React, { Component } from 'react';

export default class EditAdView extends Component {
    render() {
        return (
            <div>
                <h1>Create Advert</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Title </label>
                        <input type="text"
                               name="title"
                               className="form-control"
                               value={this.props.title}
                               onChange={this.props.onChange}
                               required
                        />
                    </div>

                    <div className="form-group">
                        <label>Description </label>
                        <textarea
                            name="description"
                            className="form-control"
                            value={this.props.description}
                            onChange={this.props.onChange}
                            rows="10"
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                               value='Edit Advert'
                               className="btn btn-default"
                        />
                    </div>
                </form>
            </div>
        );
    }
}