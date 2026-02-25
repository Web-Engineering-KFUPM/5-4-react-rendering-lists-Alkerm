// src/components/CourseCard.jsx
import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {
  /* =========================================================
     TASK 4 — Interactivity (Toggle + Delete ONLY)
     ---------------------------------------------------------
     1) Implement toggleTask(id) using onMutateCourse + .map()
     2) Implement deleteTask(id) using onMutateCourse + .filter()
     ========================================================= */

  // TASK 4: toggleTask flips isDone for the matching task using .map()
  function toggleTask(id) {
    onMutateCourse(index, (tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  }

  // TASK 4: deleteTask removes the matching task using .filter()
  function deleteTask(id) {
    onMutateCourse(index, (tasks) => tasks.filter((t) => t.id !== id));
  }

  const hasTasks = course.tasks.length > 0;
  const allDone = hasTasks && course.tasks.every((t) => t.isDone);

  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>

        {/* TASK 3: Show "All caught up" badge ONLY when course has tasks AND all are done */}
        {hasTasks && allDone && (
          <span className="badge success">All caught up ✓</span>
        )}
      </header>

      <section className="tasksSection">

        {/* TASK 3: Show "No tasks yet." ONLY when there are no tasks */}
        {course.tasks.length === 0 && <p className="muted">No tasks yet.</p>}

        <ul className="tasks">
          {/* TASK 2: Render tasks using course.tasks.map() */}
          {course.tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>
    </article>
  );
}