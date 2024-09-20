"use client";
import React, { useState } from "react";
import style from "./styles.module.scss";
import { tasks as initialTasks } from "@/data/tasks";
import Modal from "../Modal/modal";


export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);

  const handleOpenAddTaskModal = () => {
    setIsAddTaskModalOpen(true);
  };
  const handleCloseAddTaskModal = () => setIsAddTaskModalOpen(false);

  const handleOpenDeleteTaskModal = (taskId: number) => {
    setTaskToDelete(taskId);
    setIsDeleteTaskModalOpen(true);
  };
  const handleCloseDeleteTaskModal = () => {
    setTaskToDelete(null);
    setIsDeleteTaskModalOpen(false);
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskName.trim()) {
      const newTask = {
        id: tasks.length + 1,
        name: newTaskName,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskName("");
      handleCloseAddTaskModal();
    }
  };

  const handleDeleteTask = () => {
    if (taskToDelete !== null) {
      setTasks(tasks.filter((task) => task.id !== taskToDelete));
      handleCloseDeleteTaskModal();
    }
  };

  const handleCheckboxChange = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <p className={style.title}>Suas Tarefas de Hoje</p>

        <div className={style.unfinishedTasks}>
          {tasks
            .filter((task) => !task.completed)
            .map((task) => (
              <div key={task.id} className={style.taskContainer}>
                <div className={style.nameContainer}>
                  <input
                    type="checkbox"
                    className={style.checkbox}
                    checked={task.completed}
                    onChange={() => handleCheckboxChange(task.id)}
                  />
                  <p>{task.name}</p>
                </div>
                <button
                  className={style.deleteBtn}
                  onClick={() => handleOpenDeleteTaskModal(task.id)}
                >
                  <img src="/icon.png" alt="deleteBtn" />
                </button>
              </div>
            ))}
        </div>

        <p className={style.title}>Tarefas finalizadas</p>

        <div className={style.finishedTasks}>
          {tasks
            .filter((task) => task.completed)
            .map((task) => (
              <div key={task.id} className={style.taskContainer}>
                <div className={style.nameContainer}>
                  <input
                    type="checkbox"
                    className={style.checkbox}
                    checked={task.completed}
                    onChange={() => handleCheckboxChange(task.id)}
                  />
                  <p>{task.name}</p>
                </div>
                <button
                  className={style.deleteBtn}
                  onClick={() => handleOpenDeleteTaskModal(task.id)}
                >
                  <img src="/icon.png" alt="deleteBtn" />
                </button>
              </div>
            ))}
        </div>
      </div>

      <button className={style.addBtn} onClick={handleOpenAddTaskModal}>
        Adicionar nova Tarefa
      </button>

      <Modal isOpen={isAddTaskModalOpen} onClose={handleCloseAddTaskModal}>
        <h2 className={style.modalTitle}>Nova Tarefa</h2>
        <form onSubmit={handleAddTask}>
          <label htmlFor="">Título</label>
          <input
            type="text"
            placeholder="Digite"
            className={style.inputTitle}
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <button type="submit" className={style.addBtnModal}>
            Adicionar
          </button>
        </form>
      </Modal>

      <Modal
        isOpen={isDeleteTaskModalOpen}
        onClose={handleCloseDeleteTaskModal}
      >
        <h2 className={style.modalTitle}>Deletar Tarefa</h2>
        <p className={style.modalSubtitle}>
          Tem certeza que você deseja deletar essa tarefa?
        </p>
        <button className={style.deleteBtnModal} onClick={handleDeleteTask}>
          Deletar
        </button>
      </Modal>
    </div>
  );
}
