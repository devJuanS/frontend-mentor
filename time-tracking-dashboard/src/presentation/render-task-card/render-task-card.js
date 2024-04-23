import taskCardHTML from './render-task-card.html?raw';
import './render-task-card.css';

export const renderTaskCard = ( task, element ) => {
  const card = document.createElement('task-card');
  card.name = task.toLowerCase();
  card.time = 32;
  card.priorTime = 36;

  //TODO: add event listeners.


  element.append( card );
}