import { renderNavbarDashboard } from "./presentation/render-navbar-dashboard/render-navbar-dashboard";
import { renderTasksBoard } from "./presentation/render-tasks-board/render-tasks-board";

export const TimeTrackApp = ( element ) => {

  renderNavbarDashboard(element);
  renderTasksBoard(element);
}