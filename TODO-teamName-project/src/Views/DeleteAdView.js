import React, { Component } from 'react';

export default class DeleteAdView extends Component {
    render() {
        return (
            <div>
                <h1>Delete Advert</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Title </label>
                        <input type="text"
                               name="title"
                               className="form-control"
                               value={this.props.title}
                               disabled
                        />
                    </div>

                    <div className="form-group">
                        <label>Description </label>
                        <textarea
                            name="description"
                            className="form-control"
                            value={this.props.description}
                            rows="10"
                            disabled
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                               value='Delete Advert'
                               className="btn btn-default"
                        />
                    </div>
                </form>
            </div>
        );
    }
}