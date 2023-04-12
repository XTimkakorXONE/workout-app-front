import Auth from "../pages/Auth";
import Home from "../pages/Home";
import NewWorkout from "../pages/NewWorkout";
import Profile from "../pages/Profile";

export const routes = [
  {
    path: "/",
    component: Home,
    isAuth: false,
  },
  {
    path: "/auth",
    component: Auth,
    isAuth: false,
  },
  {
    path: "/profile",
    component: Profile,
    isAuth: false,
  },
  {
    path: "/new-workout",
    component: NewWorkout,
    isAuth: true,
  },
  //   {
  //     path: "/new-exercise",
  //     component: NewExercise,
  //     isAuth: true,
  //   },

  //   {
  //     path: "/workout/:id",
  //     component: SingleWorkout,
  //     isAuth: true,
  //   },
  //   {
  //     path: "/workouts",
  //     component: ListWorkouts,
  //     isAuth: true,
  //   },
  //   {
  //     path: "/exercise/:id",
  //     component: SingleExercise,
  //     isAuth: true,
  //   },
];
