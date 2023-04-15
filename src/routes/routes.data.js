import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";
import NewWorkout from "../pages/NewWorkout";
import Profile from "../pages/Profile";

export const routes = [
  {
    path: "/auth",
    component: Auth,
    isAuth: false,
  },

  {
    path: "/",
    component: Home,
    isAuth: true,
  },
  {
    path: "/auth",
    component: Auth,
    isAuth: false,
  },
  {
    path: "/profile",
    component: Profile,
    isAuth: true,
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
