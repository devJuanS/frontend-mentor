import tasksData from "../../../server/data.json";
import './render-tasks-board.css';

/**
 * Render the cards with the information about each task according the time frame selected
 * @param {HTMLElement} element The parent element where render the tasks board
 * @param {string} timeframe The time frame selected for the user to show data
 */
export const renderTasksBoard = ( element, timeframe ) => {
  const tasksBoard = document. createElement('section');
  tasksBoard.className = 'tasks-board';
  
  tasksData.forEach( task => {
    if ( !task ) return;
    const card        = document.createElement('task-card');
    card.title        = task.title;
    card.currentTime  = task.timeframes[timeframe].current;
    card.previousTime = task.timeframes[timeframe].previous;

    tasksBoard.append(card);
  });
  
  element.append(tasksBoard);
}