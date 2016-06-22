import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {title: ''}
        };
        this.onTitleChangeHaHa = this.onTitleChange.bind(this);
        this.onClickSaveHaHa = this.onClickSave.bind(this);
    }
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>CoursesPage</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input type="text" value={this.state.course.title} onChange={this.onTitleChangeHaHa}/>
                <input type="submit" value="Save" onClick={this.onClickSaveHaHa}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
//const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//export default connectedStateAndProps(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);