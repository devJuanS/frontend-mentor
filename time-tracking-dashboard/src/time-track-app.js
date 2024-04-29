import { renderNavbarDashboard } from "./presentation/render-navbar-dashboard/render-navbar-dashboard";
import { renderTasksBoard } from "./presentation/render-tasks-board/render-tasks-board";

export const TimeTrackApp = ( element ) => {

  renderNavbarDashboard(element);
  //TODO: add the element for the task card space in dashboard
  renderTasksBoard(element, "weekly");

}