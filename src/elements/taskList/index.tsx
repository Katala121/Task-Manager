import React from 'react';
import TaskItem from '../../elements/task'
import NewTask from '../newTask/index';
import ButtonClearAll from '../buttonClearAll/index';
import { Store, typeState } from '../../core/models/types';
import { Task } from '../../core/models/task';
import { connect } from 'react-redux';

const mapStateToProps = (state: Store) => ({
    tasks: state.taskReducer,
})

const TaskItemList: React.FC<any> = ( { tasks }: any) => {

    return (
        <div className="tasks-container">
            {
                tasks.map((item:Task) => (<TaskItem
                    id={item.id}
                    date={item.date}
                    text={item.text}
                    expired={item.expired}
                    key={item.id}
                    />)
                    )
            }
            <NewTask />
            <ButtonClearAll />
        </div>
    );
};



export default connect(mapStateToProps)(TaskItemList);
