import tasksData from "../../../server/data.json";
import './render-tasks-board.css';

let tasksBoard;

/**
 * Render the cards with the information about each task according the time frame selected
 * @param {HTMLElement} element The parent element where render the tasks board
 * @param {string} timeframe The time frame selected for the user to show data
 */
export const renderTasksBoard = ( element, timeframe = 'weekly' ) => {
  
  if ( tasksBoard ) return;
  
  tasksBoard = document.createElement('section');
  tasksBoard.className = 'tasks-board';

  createTaskCards( tasksBoard, timeframe );
  element.append( tasksBoard );
}

/**
 * Create the task cards element and render with the time based on the time frame selected
 * @param {HTMLElement} element   Parent element where render the task cards
 * @param {String}      timeframe Word with time frame of the times to show
 */
const createTaskCards = ( element, timeframe ) => {
  if ( !tasksData.length ) {
    tasksBoard.textContent = "This profile has not any tasks";
    return;
  }
  
  tasksData.forEach( task => {
    
    const card        = document.createElement('task-card');
    card.title        = task.title;
    card.timeframe    = timeframe === 'daily' ? 'day' : timeframe.slice(0, -2);  // remove 'ly' from the word
    card.currentTime  = task.timeframes[timeframe].current;
    card.previousTime = task.timeframes[timeframe].previous;
  
    element.append(card);
  });
}

/**
 * Update the time information in the task cards based on the time frame selected
 * @param {String} timeframe Word with time frame of the times to show
 */
export const updateTimesInCards = ( timeframe ) => {

  tasksData.forEach( task => {
    const card = document.querySelector(`task-card[title="${ task.title }"]`);
    card.timeframe    = timeframe === 'daily' ? 'day' : timeframe.slice(0, -2);  // remove 'ly' from the word
    card.currentTime  = task.timeframes[timeframe].current;
    card.previousTime = task.timeframes[timeframe].previous;
  });
}