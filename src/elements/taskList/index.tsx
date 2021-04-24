import React from 'react';
import  TaskItem  from '../../elements/task'
import { Store, typeState } from '../../core/models/types';
import { connect } from 'react-redux';

const mapStateToProps = (state: Store) => ({
    tasks: state.taskReducer,
})

const TaskItemList: React.FC<any> = ({ tasks }: any): any => {
    console.log(tasks)

    return (
        <div className="tasks-container">
            {
                tasks.map((item:any) => (<TaskItem
                    id={item.id}
                    date={item.date}
                    text={item.text}
                    expired={item.expired}
                    />)
                    )
            }
        </div>
    );
};



export default connect(mapStateToProps)(TaskItemList);
