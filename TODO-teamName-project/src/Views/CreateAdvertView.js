import React, { Component } from 'react';

export default class CreateAdvertView extends Component {
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
                               disabled={this.props.disabled}
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
                            disabled={this.props.disabled}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                               value='Create Advert'
                               className="btn btn-default"
                               disabled={this.props.disabled}
                        />
                    </div>
                </form>
            </div>
        );
    }
}