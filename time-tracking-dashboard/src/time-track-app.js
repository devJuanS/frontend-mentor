import { renderNavbarDashboard } from "./presentation/render-navbar-dashboard/render-navbar-dashboard";
import { renderTaskCard } from "./presentation/render-task-card/render-task-card";

export const TimeTrackApp = ( element ) => {

  renderNavbarDashboard(element);
  //TODO: add the element for the task card space in dashboard
  renderTaskCard('Work', element);

}