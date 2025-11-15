import { useState, useEffect } from "react";
import clsx from "clsx";
// Components
import HeaderComp from "../../components/HeaderComp";
import HeadingComp from "../../components/HeadingComp";
import SpanComp from "../../components/SpanComp";
import FormComp from "../../components/FormComp";
import InputComp from "../../components/InputComp";
import ButtonComp from "../../components/ButtonComp";
import DescComp from "../../components/DescComp";
import UlistComp from "../../components/UlistComp";
import LabelComp from "../../components/LabelComp";
import ImgComp from "../../components/ImgComp";

import Clipboard from "public/img/Clipboard.png";

// Styles
import styles from "./Todo.module.scss";
import ParaComp from "../../components/ParaComp";

let uniId = 0;
function Todo() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    // handle Input
    const handleInputChange = (e) => setInputValue(e.target.value);

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([
                ...todos,
                { id: ++uniId, text: inputValue, completed: false },
            ]);
            setInputValue(""); // reset input về rỗng
        }
    };

    // Handle complete
    // const handleToggle = (id) => {
    //     setTodos(
    //         todos.map((todo) =>
    //             todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //         )
    //     );
    // };

    const handleToggle = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // handle Delete
    // const handleDelete = (id) => {
    //     setTodos(todos.filter((todo) => todo.id !== id));
    // };
    const handleDelete = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    // handle statistics calculate
    const createdCount = todos.length;
    const completedCount = todos.filter((t) => t.completed).length;
    const remainingCount = createdCount - completedCount;

    //
    const statisticsData = [
        { label: "Created", value: createdCount },
        { label: "Completed", value: completedCount },
        { label: "Remaining", value: remainingCount },
    ];

    return (
        <>
            <DescComp className={styles.wrapper}>
                <DescComp className={styles.inner}>
                    {/* Header */}
                    <HeaderComp className={styles.header}>
                        {/* Heading */}
                        <HeadingComp className={styles.heading}>
                            Todo
                            <SpanComp className={styles.headingSpan}>
                                List
                            </SpanComp>
                        </HeadingComp>

                        {/* form */}
                        <DescComp className={styles.formGroup}>
                            <FormComp
                                className={styles.formTask}
                                onSubmit={handleSubmit}
                            >
                                <InputComp
                                    className={styles.todoTask}
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter New Task..."
                                />
                                <ButtonComp
                                    className={styles.todoTaskBtn}
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                >
                                    +
                                </ButtonComp>
                            </FormComp>
                        </DescComp>

                        {/* statisticsGroup */}
                        <UlistComp className={styles.statisticsGroup}>
                            {statisticsData.map((item, index) => (
                                <li
                                    className={styles.createGroup}
                                    key={index}
                                    label={item.label}
                                    value={item.value}
                                >
                                    <ParaComp
                                        className={styles.createGroupTitle}
                                    >
                                        {item.label}
                                    </ParaComp>
                                    <SpanComp
                                        className={styles.createGroupSpan}
                                    >
                                        {item.value}
                                    </SpanComp>
                                </li>
                            ))}
                        </UlistComp>
                    </HeaderComp>

                    {/* Main */}
                    <DescComp className={styles.main}>
                        {todos.length === 0 ? (
                            <DescComp className={styles.initTasks}>
                                <ImgComp
                                    className={styles.initTasksImg}
                                    src=".../../../"
                                    alt="TaskImageNone"
                                />
                                <ParaComp className={styles.initTasksDesc}>
                                    You don't have any tasks yet. Create tasks
                                    and organize your to-do items!
                                </ParaComp>
                            </DescComp>
                        ) : (
                            <DescComp className={styles.taskGroup}>
                                <UlistComp
                                    className={styles.taskGroupList}
                                    todos={todos}
                                    onToggle={handleToggle}
                                    onDelete={handleDelete}
                                >
                                    {todos.map((todo) => (
                                        <li
                                            key={todo.id}
                                            className={clsx(
                                                styles.taskGroupItem,
                                                {
                                                    [styles.checked]:
                                                        todo.completed,
                                                    [styles.unchecked]:
                                                        !todo.completed,
                                                }
                                            )}
                                        >
                                            <InputComp
                                                className={styles.checkBoxTask}
                                                type="checkbox"
                                                id={`task-${todo.id}`}
                                                checked={todo.completed}
                                                onChange={() =>
                                                    handleToggle(todo.id)
                                                }
                                            />
                                            <LabelComp
                                                className={styles.taskGroupDesc}
                                                htmlFor={`task-${todo.id}`}
                                            >
                                                {todo.text}
                                            </LabelComp>
                                            <ButtonComp
                                                className={styles.btnTrash}
                                                onClick={() =>
                                                    handleDelete(todo.id)
                                                }
                                            >
                                                <i className="fa-solid fa-trash-can"></i>
                                            </ButtonComp>
                                        </li>
                                    ))}
                                </UlistComp>
                            </DescComp>
                        )}
                    </DescComp>
                </DescComp>
            </DescComp>
        </>
    );
}

export default Todo;
