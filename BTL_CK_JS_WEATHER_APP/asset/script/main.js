import { setupCalendar } from "./calendarHandling.js";
import { createEvent_GetWeather_byLocation, CreateEvent_SearchButton } from "./search.js";
import { createEvent_CloseSideBar, createEvent_OpenCalendar, createEvent_OpenHome, createEvent_OpenSetting, createEvent_OpenSideBar, startSideBar } from "./sideBarHanding.js";
import { createEvent_ChangeThemeDark, createEvent_ChangeThemeLight } from "./themeHandling.js";

CreateEvent_SearchButton()
createEvent_CloseSideBar()
createEvent_OpenSideBar()
startSideBar()
createEvent_OpenCalendar() 
createEvent_OpenHome()

createEvent_GetWeather_byLocation()
createEvent_OpenSetting()

createEvent_ChangeThemeDark()
createEvent_ChangeThemeLight()