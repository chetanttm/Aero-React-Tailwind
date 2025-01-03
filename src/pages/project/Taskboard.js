import React, { useState } from 'react'
import Breadcrumb from '../../components/common/Breadcrumb'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
    IconPlus,
    IconEdit,
    IconClockHour4,
    IconMessages,
    IconTrash,
    IconSquareCheckFilled,
} from '@tabler/icons-react'
import {
    avatar7,
    avatar8,
} from '../../assets/images'

export default function Taskboard() {

    const breadcrumbItem = [
        {
            name: "Project",
        },
        {
            name: "Taskboard",
        },
    ]



    const initialData = {
        planned: [
            {
                id: "1",
                title: "Themeforest update",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                date: "18 Jan",
                comments: 5,
                checks: 11,
                team: [
                    {
                        avatar: avatar7,
                    },
                    {
                        avatar: avatar8,
                    },
                ],
            },
            {
                id: "2",
                title: "Sites to review",
                description: "Contrary to popular belief, Lorem Ipsum is not simply.",
                date: "28 Jan",
                comments: 2,
                checks: 8,
            },
            {
                id: "3",
                title: "Client Followup",
                description: "It is a long established fact that a reader.",
                date: "05 Feb",
                comments: 0,
                checks: 0,
            },
        ],
        inProgress: [
            {
                id: "4",
                title: "Sites to review",
                description: "Contrary to popular belief, Lorem Ipsum is not simply..",
                date: "28 Jan",
                comments: 2,
                checks: 8,
            },
            {
                id: "5",
                title: "Client Followup",
                description: "It is a long established fact that a reader.",
                date: "05 Feb",
                comments: 0,
                checks: 0,
            },
        ],
        completed: [
            {
                id: "6",
                title: "Themeforest update",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                date: "18 Jan",
                comments: 5,
                checks: 11,
                team: [
                    {
                        avatar: avatar7,
                    },
                    {
                        avatar: avatar8,
                    },
                ],
            },
            {
                id: "7",
                title: "Client Followup",
                description: "It is a long established fact that a reader.",
                date: "05 Feb",
                comments: 0,
                checks: 0,
            },

        ]
    };

    const [tasks, setTasks] = useState(initialData);

    const originalError = console.error;
    console.error = (message, ...args) => {
        if (!message.includes('defaultProps')) {
            originalError(message, ...args);
        }
    };

    const getBadgeStyle = (columnId) => {
        switch (columnId) {
            case "planned":
                return { backgroundColor: "#888888" }; // Orange for planned
            case "inProgress":
                return { backgroundColor: "#FD7E14" }; // Blue for in-progress
            case "completed":
                return { backgroundColor: "#198754" }; // Green for completed
            default:
                return {};
        }
    };

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return; // If dropped outside a column, ignore

        const sourceColumn = source.droppableId;
        const destColumn = destination.droppableId;

        if (!tasks[sourceColumn] || !tasks[destColumn]) return; // Ensure columns exist

        const sourceItems = Array.from(tasks[sourceColumn]);
        const [removed] = sourceItems.splice(source.index, 1);

        if (sourceColumn === destColumn) {
            sourceItems.splice(destination.index, 0, removed);
            setTasks((prev) => ({ ...prev, [sourceColumn]: sourceItems }));
        } else {
            const destItems = Array.from(tasks[destColumn]);
            destItems.splice(destination.index, 0, removed);
            setTasks((prev) => ({
                ...prev,
                [sourceColumn]: sourceItems,
                [destColumn]: destItems,
            }));
        }
    };

    return (
        <>
            <Breadcrumb breadcrumbItem={breadcrumbItem} title="Taskboard" buttonContent={<IconPlus className='w-[18px] h-[18px] min-w-[18px]' />} buttonUrl="#" />
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid lg:grid-cols-3 md:gap-30 gap-15 pt-15">
                    {["planned", "inProgress", "completed"].map((columnId) => (
                        <div key={columnId}>
                            <p className='text-primary mb-10 uppercase text-[16px]/[20px] font-bold'>
                                {columnId === "planned" ? "Planned" : columnId === "inProgress" ? "In Progress" : "Completed"}
                            </p>
                            <div className='card bg-card-color rounded-md md:p-20 p-15'>
                                <Droppable droppableId={columnId}>
                                    {(provided) => (
                                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                                            {tasks[columnId].map((task, index) =>
                                                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                                                    {(provided) => (
                                                        <li
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className="border border-border-color mb-5 last:mb-0"
                                                        >
                                                            <div className='px-4 py-3 flex items-center gap-2 justify-between'>
                                                                <p className='text-[14px]/[17px] font-bold uppercase'>{task.title}</p>
                                                                <div className='flex items-center gap-2'>
                                                                    <button>
                                                                        <IconEdit className='text-font-color-100 stroke-[1.5] w-[20px] h-[20px]' />
                                                                    </button>
                                                                    <button>
                                                                        <IconTrash className='text-danger stroke-[1.5] w-[20px] h-[20px]' />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className='px-4 py-3'>
                                                                <p className='mb-4 text-[14px]/[17px]'>{task.description}</p>
                                                                <div className='flex items-center gap-2 justify-between'>
                                                                    <span className="px-2 py-[3px] flex items-center gap-1 min-w-fit rounded text-white text-[12px]/[1] font-bold" style={getBadgeStyle(columnId)}>
                                                                        <IconClockHour4 className='w-[14px] h-[14px] min-w-[14px]' />
                                                                        {task.date}
                                                                    </span>
                                                                    <div className="flex items-center gap-15">
                                                                        <button className='flex items-center gap-1 text-grey'>
                                                                            <IconMessages className='w-[18px] h-[18px] min-w-[18px]' />
                                                                            {task.comments}
                                                                        </button>
                                                                        <button className='flex items-center gap-1 text-grey'>
                                                                            <IconSquareCheckFilled className='w-[18px] h-[18px] min-w-[18px]' />
                                                                            {task.checks}
                                                                        </button>
                                                                        {task.team && Array.isArray(task.team) && (
                                                                            <ul className="flex items-center ps-10">
                                                                                {task.team.map((res, key) => (
                                                                                    <li key={key} className="-ms-10 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300 ease-in-out">
                                                                                        <img src={res.avatar} alt="Avatar" className="w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-medium" />
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            )}
                                            {provided.placeholder}
                                        </ul>
                                    )}
                                </Droppable>
                            </div>
                        </div>
                    ))}
                </div>
            </DragDropContext>
        </>
    )
}
