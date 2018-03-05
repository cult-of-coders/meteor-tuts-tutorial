import React from 'react';
import {AutoForm, AutoField, LongTextField} from 'uniforms-unstyled';
import PostSchema from '/db/posts/schema';

export default class PostEdit extends React.Component {
    constructor() {
        super();
        this.state = {post: null};
    }

    componentDidMount() {
        console.log(this.props);

        Meteor.call('post.get', this.props.match.params._id, (err, post) => {
            this.setState({post});
        });
    }

    submit = (post) => {
        Meteor.call('post.edit', this.props.match.params._id, post, (err) => {
            if (err) {
                return alert(err.reason);
            }
            alert('Post modified!')
        });
    };

    render() {
        const {history} = this.props;
        const {post} = this.state;

        if (!post) {
            return <div>Loading....</div>
        }

        return (
            <div className="post">
                <AutoForm onSubmit={this.submit} schema={PostSchema} model={post}>
                    <AutoField name="title"/>
                    <LongTextField name="description"/>

                    <button type='submit'>Edit post</button>
                    <button onClick={() => history.push('/posts')}>Back to posts</button>
                </AutoForm>
            </div>
        )
    }
}
