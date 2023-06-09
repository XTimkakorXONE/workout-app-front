import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";
import NewWorkout from "../pages/new-workout/NewWorkout";
import Profile from "../pages/profile/Profile";
import NewExercise from "../pages/new-exercise/NewExercise";
import Workout from "../pages/workouts/detail/Workout";
import ListWorkouts from "../pages/workouts/list/ListWorkouts";
import ExerciseLog from "../pages/exercise-log/ExerciseLog";

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
  {
    path: "/new-exercise",
    component: NewExercise,
    isAuth: true,
  },

  {
    path: "/workout/:id",
    component: Workout,
    isAuth: true,
  },
  {
    path: "/workouts",
    component: ListWorkouts,
    isAuth: true,
  },
  {
    path: "/exercise/:id",
    component: ExerciseLog,
    isAuth: true,
  },
];
