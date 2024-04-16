import taskCardHTML from './render-task-card.html?raw';
import './render-task-card.css';

export const renderTaskCard = ( task, element ) => {
  const card = document.createElement('article');
  card.innerHTML = taskCardHTML;
  card.classList.add('task-card');


  element.append( card );
}